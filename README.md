# The Pool Man

Marketing site and booking funnel for a pool service company. Next.js App Router
application deployed to Cloudflare Workers via OpenNext, with scheduled jobs and
a containerised self-hosted path as an alternative.

## Stack

Next.js (App Router) · TypeScript · Supabase (SSR auth via `@supabase/ssr`)
· Cal.com embedded scheduling · Brevo for transactional email · Cloudflare Workers
through OpenNext · Docker + nginx for VPS deployment

## What's interesting here

- **Dual deployment target.** The same codebase ships to Cloudflare Workers
  (`open-next.config.ts`, `npm run deploy`) or to a VPS via `docker-compose.yml`
  and `nginx/`. Typed Worker bindings are generated with `npm run cf-typegen`.
- **SEO as a first-class concern.** Programmatic `sitemap.ts` and `robots.ts`,
  structured data, and separate light/dark global stylesheets. The repository also
  carries the keyword research and Google Ads campaign planning that drove the
  page structure.
- **Secrets stay out of the repo.** `npm run secrets:sync` pushes environment
  values to the deployment target; only `.env.local.example` is committed.

## Development

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

`npm run build` produces the production bundle; `npm run preview` runs it against
the Workers runtime locally.

## Layout

```
src/app/(marketing)/   public marketing pages
src/app/api/           route handlers
cron/                  scheduled jobs
nginx/                 reverse-proxy config for the self-hosted path
```
