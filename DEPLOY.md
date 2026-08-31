# Deploying kevinthepoolman.com

The site runs as a Cloudflare Worker (Next.js via OpenNext), not on the VPS.
Deploys are pushed directly from a local working tree via `wrangler` — nothing
in CI triggers a deploy today, and the VPS git-pull-and-Docker-rebuild flow no
longer applies to this site.

## One-time setup (per machine)

1. **Cloudflare auth** — the zone `kevinthepoolman.com` lives in the
   `Office@kevinthepoolman.com` Cloudflare account (id
   `9e0c24edaaa880a0fa9a67e24da3a646`), which is a **different account** from
   the default `benchworksai.com` one wrangler may already be logged into.
   Check with `npx wrangler whoami` — if it shows a different account, run
   `npx wrangler login` and pick the Office@kevinthepoolman.com account when
   the browser opens.
2. **Doppler auth** — run `doppler login` and confirm you have access to the
   `the-pool-man` project (`doppler projects` should list it). All secrets and
   `NEXT_PUBLIC_*` build vars live there, in the `prd` config — there is no
   other copy to fall back to except the VPS's old `/opt/poolman/.env.local`,
   which is legacy and should not be used going forward.

## Deploy the site

```
npm run deploy
```

This runs `doppler run --project the-pool-man --config prd -- opennextjs-cloudflare build`
(injects the 9 `NEXT_PUBLIC_*` vars at build time) then `opennextjs-cloudflare deploy`
(pushes the built Worker to Cloudflare via wrangler). No manual env exports
needed — Doppler is the only source of truth.

`npm run preview` does the same build but runs it locally instead of deploying.

## Update a secret or build var

1. `doppler secrets set NAME="value" --project the-pool-man --config prd`
2. If it's a **build-time** var (`NEXT_PUBLIC_*`): just redeploy —
   `npm run deploy` picks up the new value automatically.
3. If it's a **runtime secret** (`SUPABASE_SERVICE_ROLE_KEY`, `BREVO_API_KEY`,
   or a webhook secret): run `npm run secrets:sync` to push it to the Worker
   (`wrangler secret put` reads it via Doppler instead of a hand-typed value).
   Runtime secrets are NOT redeployed by `npm run deploy` — Cloudflare Worker
   secrets are set out-of-band from the code deploy, so `secrets:sync` is a
   separate step whenever a secret value changes.

Currently-configured runtime secrets: `SUPABASE_SERVICE_ROLE_KEY`,
`BREVO_API_KEY`. `SHOPIFY_WEBHOOK_SECRET`, `CALCOM_WEBHOOK_SECRET`,
`QUO_WEBHOOK_SECRET`, `GOOGLE_SITE_VERIFICATION`, `BREVO_SENDER_EMAIL`,
`BREVO_SENDER_NAME` are all intentionally unset (matching current production
behavior — see route handlers under `src/app/api/webhooks/*` for what each
gates). If any of these get a real value in Doppler, add its sync line to
`secrets:sync` in `package.json` and to this list.

## The Supabase keepalive cron worker

A separate, small Worker (`cron/supabase-keepalive/`) pings Supabase's
`/auth/v1/health` endpoint every 3 days to prevent the free-tier project from
auto-pausing after 7 days of inactivity. It shares the same `NEXT_PUBLIC_SUPABASE_URL`
(as the plain var `SUPABASE_URL` in `cron/supabase-keepalive/wrangler.jsonc`)
and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (as the Worker secret `SUPABASE_ANON_KEY`)
values from Doppler.

Deploy/redeploy it:

```
cd cron/supabase-keepalive
npx wrangler deploy
```

Sync its secret from Doppler if it ever needs rotating:

```
doppler secrets get NEXT_PUBLIC_SUPABASE_ANON_KEY --plain --project the-pool-man --config prd | npx wrangler secret put SUPABASE_ANON_KEY
```

Check it's alive: `npx wrangler tail` in that directory while hitting
`https://poolman-supabase-keepalive.kevinthepoolman.workers.dev/` (its `fetch`
handler runs the same ping logic as the cron trigger, useful for manual
testing). Its schedule can be inspected via
`GET /accounts/{account_id}/workers/scripts/poolman-supabase-keepalive/schedules`
on the Cloudflare API.

## DNS / architecture notes

- `www.kevinthepoolman.com` → Cloudflare Worker Custom Domain, attached to the
  `the-pool-man` Worker (as of 2026-08-30 cutover).
- `kevinthepoolman.com` (apex) → still points at the VPS
  (`5.161.88.134`, proxied) and is redirected to `www` by **VPS nginx**, not
  by any Cloudflare rule. This is a known gap: if the VPS/nginx is ever
  decommissioned, the apex redirect must be replaced first — either attach the
  apex as a second Worker Custom Domain plus an app-level host redirect, or
  add a Cloudflare Redirect Rule (`kevinthepoolman.com/* → https://www.kevinthepoolman.com/$1`)
  before touching nginx. Do not decommission the VPS without doing this first.
- Email (MX → Outlook/M365, SPF/DMARC TXT, Brevo DKIM CNAMEs, GoDaddy mail
  subdomains) is entirely separate from the above and untouched by any of it.
- The VPS (`poolman_web` container + `hampton_nginx` blocks, see
  `nginx/poolman.conf` for reference) is kept running as a rollback path.
  It is not part of the live deploy flow anymore, but do not stop it without
  explicit sign-off — see `nimbalyst-local/plans/i-want-to-transfer-staged-gosling.md`
  for the full migration plan and decommission checklist.
