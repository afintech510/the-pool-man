# the-pool-man (kevinthepoolman.com)

Next.js 16 marketing site for The Pool Man, deployed as a Cloudflare Worker
(OpenNext adapter). Live at https://www.kevinthepoolman.com.

**Deploying, secrets, and the cron keepalive worker: see [DEPLOY.md](./DEPLOY.md).**
Read it before running `npm run deploy` or touching any secret — all secrets
and build vars live in Doppler (project `the-pool-man`, config `prd`), not in
any `.env` file in this repo or on the VPS.

A legacy VPS deployment (`poolman_web` Docker container behind shared
`hampton_nginx`) still exists as a rollback path but is not part of the
current deploy flow — do not redeploy to it or stop it without explicit
sign-off from the owner.
