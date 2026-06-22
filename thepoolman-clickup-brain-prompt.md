# ClickUp Brain — Task Generation Prompt: The Pool Man

> Paste everything below the line into ClickUp Brain (app.clickup.com → AI/Brain), inside the Space where you want the project created. If Brain can't build it all in one pass, it will create the structure first; then say "continue with the remaining phases." Optionally attach `thepoolman-sow.md` for full context.

---

You are setting up a complete project in ClickUp from a locked Statement of Work. The project is **"The Pool Man — Digital Growth Platform"** — a website, CRM/data spine, marketing, phone/AI, commerce, and accounting build by BenchworksAI for a service-anchored pool business in Center Moriches, NY.

Create the full structure: a **Folder** named "The Pool Man — Digital Growth Platform" containing one **List per phase** (below). In each list, create one **Task per feature** and the **subtasks** listed. Apply the conventions, then generate everything.

**Conventions**
- Task name format: `F-### — <feature name>`.
- Task description = the acceptance criteria I provide.
- Create these **custom fields** on all tasks: `Feature ID` (text), `Disruption` (dropdown: Non-disruptive / Disruptive), `Owner` (dropdown: BenchworksAI / Kevin / Carlos / Toni), `Priority` (Urgent/High/Normal/Low).
- **Statuses:** To Do, In Progress, Blocked, In Review, Complete. (A task moves to Complete when acceptance criteria are met; deliverables auto-accept after 5 business days unless defects are reported.)
- **Dependencies:** every later phase depends on Phase 1 (Foundation). Mark the two **Disruptive** items (phone port, Skimmer field cutover) and schedule them for the shoulder season (Sept–Oct), not mid-summer.
- People: **Kevin** (owner/sales/on-site), **Carlos** (field tech), **Toni** (office/bookkeeping/email), **BenchworksAI** (build).

---

**List: Phase 1 — Foundation (Spine, Skimmer office, List Building)** · Disruption: Non-disruptive
- `F-010 — Supabase property-centric data spine` (Owner: BenchworksAI). Acceptance: all channels read/write the spine; leads/jobs/orders resolve to a Service Location. Subtasks: provision Supabase; build schema (service_locations primary + contacts, bodies_of_water, leads, etc.); RLS policies; identity-resolution function; consent tables.
- `F-019 — Skimmer setup (office) + Zapier sync` (Owner: BenchworksAI). Acceptance: Skimmer live with 95 accounts + routes; property/customer records, jobs, invoices, and billing events sync to the spine. Subtasks: configure Skimmer; import accounts/routes; LaMotte + Orenda setup; build Zapier flows to spine.
- `F-013 — Client list import + consent re-permission` (Owner: BenchworksAI). Acceptance: base imported, deduped, phone-normalized (E.164); documented consent before bulk sends. Subtasks: export 95-list; normalize/dedup; consent-status pass; run re-opt-in.
- `F-012 — Brevo + consent state machine` (Owner: BenchworksAI). Acceptance: sends gated by consent state; suppression honored. Subtasks: connect Brevo; import contacts with consent; configure suppression.
- `F-007 / F-011 — Attribution backbone + dashboard skeleton` (Owner: BenchworksAI). Acceptance: a test lead resolves to a Service Location with a source; dashboard shows source → channel → outcome.

**List: Phase 2 — Website & Booking** · Non-disruptive
- `F-001 — Next.js site (service-first IA)` (BenchworksAI).
- `F-002 — Service pillar pages` (BenchworksAI). Weekly maintenance, openings/closings, covers, repairs.
- `F-003 — Vinyl liner pillar` (BenchworksAI). Port the demo's laser/zero-wrinkle content + 20/28-mil selector.
- `F-004 — Pool heater hub + subpages` (BenchworksAI). Heat-pump (lead), gas, repair, replacement, per the approved outline.
- `F-005 — Location/town pages` (BenchworksAI). Center Moriches + Eastern Suffolk; service/liner/heater × town.
- `F-006 — Consultation booking (Cal.com)` (BenchworksAI). Set service radius, zip-list owner, and travel-buffer defaults with Kevin; out-of-area zips blocked.
- `F-008 — AI Pool Expert (web + SMS)` (BenchworksAI). Informational + lead-qualification only; can send booking link.
- `F-016 — Headless Shopify store` (BenchworksAI). One inventory across in-store POS + online.

**List: Phase 3 — Phone & AI Voice** · Disruptive (soft-parallel, shoulder-season)
- `F-009 — Quo + Sona setup` (BenchworksAI). Answer/qualify/book/FAQ/transfer; transcripts + summaries to spine.
- `Quo soft-parallel forward + number port` (BenchworksAI/Kevin). **Disruption: Disruptive.** Run Quo in parallel before full port; port at the shoulder-season window.

**List: Phase 3b — Skimmer Field Cutover (Carlos)** · Disruptive (shoulder-season)
- `Carlos field training (off-season)` (BenchworksAI/Carlos).
- `Carlos live route cutover` (Carlos). **Disruption: Disruptive.** A full week of routes run in-app with readings/dosing/photos syncing.

**List: Phase 4 — Commerce & Accounting** · Non-disruptive
- `F-016 — Shopify online store live` (BenchworksAI).
- `F-018 — LaMotte water-test-to-sale loop` (BenchworksAI). Test → recommendation → Shopify POS sale.
- `F-017 — Accounting export → QuickBooks Desktop` (BenchworksAI + Toni). Summary IIF/CSV; static account mapping; backup-before-import; totals check. Subtasks: get Toni's QB edition/year + chart of accounts + item list; build export; test import.

**List: Phase 5A — Acquisition Infrastructure** · Non-disruptive
- `F-023 — Per-channel attribution instrumentation` (BenchworksAI). Tracking numbers, UTMs, QR codes; walk-in + missed-call fallbacks.
- `F-021 — Review/reputation automation` (BenchworksAI). Post-job review asks via Brevo.
- `F-022 — Referral program + tracking` (BenchworksAI). Trackable referral codes.
- `F-020 — Google Local Services Ads` (BenchworksAI + Kevin). License/insurance, Google-required personnel screening, review threshold; LSA line human-first with Sona as after-hours backstop; monitor drop-off.

**List: Phase 5B — Campaign Launch** · Non-disruptive
- `F-015 — Google Ads` (BenchworksAI + Kevin funds budget).
- `F-014 — Reactivation + seasonal campaigns` (BenchworksAI/Toni). Opening/closing, heater pre/post-season.
- `Nextdoor / Facebook / directory presence` (BenchworksAI).
- `F-050 — CallRail keyword attribution (optional)` (BenchworksAI). Defer until ad spend scales.

**List: Client Inputs (blockers)** · assign to Kevin/Toni with due dates
- Brand assets + dealer/certification status (Kevin).
- Job/heater/liner photography (Kevin).
- QuickBooks Desktop edition/year + chart of accounts + item list (Toni) — blocks F-017.
- Admin access: Shopify, Skimmer, Google Ads, domain/DNS; open Quo + make number available to port (Kevin).
- Fund Google Ads / LSA budgets (Kevin).
- Approve copy/deliverables within 5 business days (Kevin).

---

Create all lists, tasks, subtasks, custom fields, statuses, and dependencies now. Set the two Disruptive items to a September–October target. If you can't create everything in one response, create the Folder, all Lists, and Phase 1–2 tasks first, then continue with Phases 3 through 5B and the Client Inputs list.
