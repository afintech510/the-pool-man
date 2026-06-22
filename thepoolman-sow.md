# Statement of Work: The Pool Man — Digital Growth Platform

**Version:** 2.1 — **LOCKED**
**Date:** June 14, 2026
**Prepared for:** Kevin "The Pool Man" Cherwinski — Center Moriches, NY
**Prepared by:** BenchworksAI

> v2.1 incorporates all 17 findings from Review Cycle 1 (Builder, Business, Implementer). Headline change: the data model is now **property/pool-centric** — the Service Location is the primary entity, not the Contact. See changelog for the full list.

---

## 1. Executive Summary

The Pool Man is a service-anchored pool business: ~95 weekly-service clients are the recurring foundation, with high-ticket work (vinyl liners, pool heaters, occasional construction) and an emerging retail/water-test counter providing the upside. This engagement builds the digital platform whose primary goal is to convert qualified inquiries — across calls, web, and walk-ins — into booked on-site consultations and retained customers.

The platform is a Next.js website (service-first, with vinyl liners and pool heaters as co-equal high-ticket pillars and an embedded retail store), an AI layer (a web/SMS assistant plus the Sona AI voice agent on the Quo line), and consultation booking. A Supabase data spine — modeled around the **property and its pool**, not the person — captures every lead with its source on a best-effort basis, enforces messaging consent, and powers an attribution dashboard. Skimmer runs the field service operation (Carlos's routes, water testing, service billing) and syncs to the spine via Zapier. Brevo drives reactivation and seasonal campaigns; Google Ads and Local Services Ads generate demand; Shopify runs commerce in-store and online; and an accounting export delivers a QuickBooks-Desktop-ready file for Toni to import.

## 2. Project Objectives

| ID | Objective | Success Metric | Priority |
|----|-----------|----------------|----------|
| O-001 | Generate qualified leads across all three channels | Qualified leads/month by source (best-effort attribution) | MUST |
| O-002 | Convert inquiries into booked on-site consultations | On-site consults booked/month via web, SMS, Sona | MUST |
| O-003 | Reactivate and retain the existing client base | % of base re-permissioned; season-over-season retention | MUST |
| O-004 | Unify customer data + attribution in one spine | % of leads with source captured; single dashboard live | MUST |
| O-005 | Launch pool heaters as a growth pillar | Heater consults and jobs booked | SHOULD |
| O-006 | Get commerce + service revenue into QuickBooks cleanly | Shopify + Skimmer revenue importable to QB Desktop without manual re-entry | SHOULD |
| O-007 | Diversify acquisition beyond paid search | Leads attributed across ≥4 channels | SHOULD |
| O-008 | Establish the retail water-test-to-sale loop | Counter sales attributed to a water test | COULD |

### 2.1 Key Definitions

- **Qualified lead** — an inquiry with a contactable phone or email and an identified service interest, captured in the spine with a source where technically possible.
- **Booked consult** — a confirmed on-site consultation on the calendar with a date/time and a service location.
- **Retained customer** — a service-location account active in consecutive seasons (or with a repeat job within 12 months).
- **Attribution** — best-effort source capture; direct, offline, and anonymous walk-in traffic is captured whenever technically possible but not guaranteed.

## 3. Feature Set

### 3.1 Core Features (Must-Have)

| ID | Feature | Description | Acceptance Criteria |
|----|---------|-------------|---------------------|
| F-001 | Next.js marketing site | Service-first IA replacing the liner-only demo hierarchy | Site live with service, liners, heaters, retail, location sections |
| F-002 | Service pillar pages | Weekly maintenance, openings/closings, covers, repairs | Service pages published with booking CTA |
| F-003 | Vinyl liner pillar | Port the demo's laser/zero-wrinkle craftsmanship content | Liner hub + spec content live; interactive 20/28-mil selector retained |
| F-004 | Pool heater hub + subpages | Heat-pump (lead), gas, repair, replacement; season extension | Hub + ≥1 subpage live per approved outline, with consultation CTA |
| F-005 | Location / town pages | Center Moriches + Eastern Suffolk; service/liner/heater × town | Town pages published, NAP-consistent |
| F-006 | Consultation booking | Cal.com; free on-site consult. Service radius, zip-list owner, and travel-buffer defaults set with Kevin at build start | Booking writes to one calendar + spine; reminders fire; out-of-area zips blocked per the agreed list |
| F-007 | Lead capture + source attribution | Leads tagged with channel/source/campaign on a best-effort basis | Source captured whenever technically possible; recorded on the lead |
| F-008 | AI Pool Expert (web + SMS) | Pool Q&A, lead capture, booking handoff (informational + qualification only — see §9.3) | Answers from knowledge base, captures lead, can send booking link |
| F-009 | Quo phone + Sona AI voice agent | AI answering: qualify, book, FAQ, transfer; transcripts + summaries. LSA line is human-first (see F-020) | Sona answers/qualifies on non-LSA lines; transcript + summary + lead to spine |
| F-010 | Supabase data spine (property-centric) | Service Location is the primary entity; Contacts and Bodies of Water hang off it; identity resolved at the property level | All channels read/write the spine; leads/jobs/orders resolve to a Service Location where known |
| F-011 | Lead & attribution dashboard | Leads by source/channel/outcome; daily refresh; full historical retention | Dashboard shows source → channel → outcome; refresh + retention as specified |
| F-012 | Brevo email + SMS engine | Transactional + marketing; consent state machine enforced (see §3.3) | Sends gated by consent state; suppression honored; templates live |
| F-013 | Client list import + consent re-permission | Import the base into Skimmer + spine with phone normalization (E.164), dedup, and a consent-status pass; run re-opt-in | Base imported, deduped, normalized; documented consent before bulk sends |
| F-014 | Reactivation + seasonal campaigns | Opening/closing, heater pre/post-season, review requests | Seasonal automations configured and triggered |
| F-015 | Google Ads setup | Paid search, call ads, lead forms, local/PMax; conversion tracking | Campaigns live; conversions tracked to source |
| F-016 | Shopify online store (headless) | Catalog on the site; one inventory across in-store POS + online | Online store live; inventory/pricing shared with POS |
| F-017 | Accounting export (QuickBooks Desktop) | Summary-level export (one journal entry / sales receipt per period) of Shopify + Skimmer revenue as a QB-Desktop IIF file (CSV if her edition supports it), mapped to static account IDs; backup-before-import; human-readable totals generated alongside. See Appendix B | Summary entries import cleanly into QB Desktop against the locked account mapping; totals reconcile to the period |
| F-018 | LaMotte water-test-to-sale loop | Test reading → recommendation → Shopify POS sale | Counter flow: test → recommendation → ring-up |
| F-019 | Skimmer field-ops platform | Selected; routing, mobile app, LaMotte/Orenda, service billing; Zapier↔spine | Skimmer live with the base + routes; **property/customer records, jobs, invoices, and billing events** sync to the spine |
| F-020 | Google Local Services Ads | Google Guaranteed: license/insurance, Google-required personnel verification/screening, review threshold. **LSA tracking number routes human-first in business hours; Sona is after-hours/overflow backstop with AI disclosure; drop-off monitored on this number** | LSA profile live and serving; LSA-line routing and drop-off monitoring in place |
| F-021 | Review / reputation automation | Post-job review requests via Brevo feeding GBP rating | Automated ask fires after jobs; velocity tracked |
| F-022 | Referral program + tracking | Trackable referral codes via Brevo | Codes issued and attributed in the spine |
| F-023 | Per-channel attribution instrumentation | Tracking numbers, UTM links, QR codes per channel; walk-in and missed-call fallbacks so every lead resolves to a known source where possible | Each channel resolves to a distinct tracked source; fallbacks capture walk-ins/missed calls best-effort |

### 3.2 Enhancement Features (Nice-to-Have)

| ID | Feature | Dependency | Deferred Until |
|----|---------|------------|----------------|
| F-050 | CallRail keyword attribution | F-015 | When ad spend scales |
| F-051 | Customer portal | F-010, F-016 | Post-launch |
| F-052 | Heater financing messaging | F-004 | If a financing partner is added |
| F-053 | Social ads management (Nextdoor/Meta) | F-023 | Retainer add-on |

### 3.3 Consent State Machine (F-012 / F-013)

- States per contact, per channel (email, SMS): `unknown` → `pending re-permission` → `opted-in` / `opted-out`.
- Only `opted-in` contacts receive marketing sends; transactional messages follow applicable rules.
- `opted-out` is permanently suppressed across all campaigns. Opt-in records store timestamp + source.

### 3.4 Explicitly Out of Scope

- Migrating to QuickBooks Online; a live Shopify↔QB sync or paid bridge (Webgility/MyWorks).
- Building a custom field-ops/routing platform — Skimmer is selected (F-019).
- Adopting Pool360 PoolService.
- Construction as the primary lead-gen focus (low-volume halo only).
- Any email/SMS without captured consent.
- Payment processing outside Shopify (retail) and Skimmer (service).
- Multi-location / franchise tooling.

## 4. Users & Personas

**Kevin (Owner-Operator)** — sales, on-site assessments, high-ticket work. Mobile-first. Wants more booked consults, retention, and the heater line without heavy admin.

**Carlos (Field Technician)** — runs all weekly routes. Needs a simple, offline-capable mobile app (Skimmer) to log readings, dosing, and photos. Pain: spotty signal, paperwork.

**Toni (Office / Bookkeeping)** — bookkeeping, admin, some customer email. Lives in QuickBooks Desktop; imports the accounting export; manages bookings and campaign sends. Pain: manual data entry, reconciling commerce + service revenue.

**Homeowner Prospect** — searching for liners, heaters, or service; wants to trust a local specialist and get a quote fast.

**Walk-In Retail Customer** — brings water in, buys chemicals; wants the right products.

## 5. Competitive & Design References

| Reference | URL | Emulate | Avoid |
|-----------|-----|---------|-------|
| The Pool Man demo | benchworksai.com/demo/thepoolman | Liner craftsmanship narrative, owner-operated trust, zip gating, interactive spec toggle | Liner-only hierarchy (elevate service + heaters); generic estimate form (use booking) |

## 6. Technical Constraints & Existing Infrastructure

**Stack:** Next.js/TypeScript/Tailwind · Supabase/PostgreSQL · Docker on Hetzner · Shopify (in-store POS running) · Skimmer (field ops) · Brevo · LaMotte WaterLink (Spin Touch) · Quo + Sona (to provision) · QuickBooks Desktop (kept; import-file only) · Cal.com · Google Ads + LSA; optional CallRail.

**Constraints:** lean off-season cost (month-to-month/usage services); consent-gated messaging; NAP-safe call tracking; Shopify is the single source of truth for catalog/inventory/payments; QB Desktop receives data only via import file (one-directional); the data model is property-centric.

## 7. Assets & Materials

Logo/brand (confirm); liner copy (available, from demo); heater outline (available); client list ~95 (available — export, cleanup, consent needed); photography (needed); dealer/cert status (needed, for EEAT + LSA); NAP — phone/hours/email/service area (needed); **Toni's QB Desktop edition/year + chart of accounts + item list (needed — required for F-017, Appendix B)**.

## 8. Delivery Phases & Rollout Sequencing

Phases are marked by **disruption level**. Non-disruptive work proceeds during the season; the two changes Carlos and Toni actually feel — Carlos onto the Skimmer field app, and the phone port — are sequenced to the shoulder season or run in soft-parallel.

### Phase 1: Foundation — Spine, Skimmer (office) & List Building  · *non-disruptive*
Supabase property-centric schema + consent model (F-010); Skimmer office configuration, account/route import, LaMotte/Orenda setup, Zapier↔spine (F-019); list import + normalization + re-permission (F-013); Brevo (F-012); attribution backbone + dashboard skeleton (F-007, F-011). **Milestone:** base imported/deduped/re-permissioned; a test lead resolves to a Service Location with a source.

### Phase 2: Website & Booking  · *non-disruptive*
Site + service-first IA (F-001, F-002), liners (F-003), heaters (F-004), location pages (F-005); booking (F-006); AI Pool Expert (F-008); headless Shopify store (F-016). **Milestone:** a prospect books an on-site consult from web/SMS into the spine + calendar.

### Phase 3: Phone & AI Voice  · *disruptive — soft-parallel, shoulder-season cutover*
Quo provisioned; Sona configured (F-009); Quo runs in parallel with a soft-forward before full port; number ported at the agreed window. **Milestone:** Sona answers a missed call (non-LSA), qualifies, and books — with a clean spine record — before full cutover.

### Phase 3b: Skimmer Field Cutover (Carlos)  · *disruptive — shoulder-season*
Carlos transitions to the Skimmer mobile app for live routes after off-season training. **Milestone:** Carlos runs a full week of routes in-app with readings/dosing/photos syncing.

### Phase 4: Commerce & Accounting  · *non-disruptive*
Shopify online live (F-016); water-test-to-sale (F-018); accounting export → QB Desktop (F-017, Appendix B). **Milestone:** a period's Shopify + Skimmer revenue imports cleanly into QB Desktop, reconciled to totals.

### Phase 5A: Acquisition Infrastructure  · *non-disruptive*
Per-channel instrumentation (F-023), review automation (F-021), referral program (F-022), LSA verification + line routing (F-020), conversion tracking. **Milestone:** every channel resolves to a tracked source.

### Phase 5B: Campaign Launch  · *non-disruptive*
Google Ads (F-015), reactivation + seasonal campaigns (F-014), Nextdoor/Facebook/directory presence; optional CallRail (F-050). **Milestone:** paid + organic channels produce tracked, attributable leads.

*Timelines are estimates dependent on client responsiveness, account provisioning, and content delivery.*

## 9. Commercial Terms, Ownership & Disclaimers

**9.1 Commercial.** Phased engagement under the separate BenchworksAI **Technology Services Agreement (TSA)**; each phase is an independently deliverable milestone. Pricing/payment per the TSA.

**9.2 Ownership & support.** Data/IP ownership, post-launch support/warranty, no-ranking guarantee, confidentiality, and independent-contractor terms are governed by the TSA and are not restated here. Kevin owns all customer/lead data, website content, and business records; BenchworksAI retains its pre-existing frameworks, templates, and tooling.

**9.3 AI scope & limitations.** The AI assistant and Sona provide informational assistance and lead qualification only. Final pricing, technical and chemical/dosing recommendations, warranty advice, and contractual commitments remain the responsibility of The Pool Man staff.

**9.4 Marketing-performance disclaimer.** BenchworksAI does not guarantee lead volume, cost per lead, rankings, revenue, or advertising performance.

**9.5 Accounting-export liability.** The accounting export (F-017) is an import-assistance tool. Final accounting review, reconciliation, and tax treatment remain the responsibility of Toni and/or the company's accountant.

## 10. Client Responsibilities

- Provide brand assets, dealer/certification status, and job/heater photography by the agreed dates.
- Provide Toni's QuickBooks Desktop edition/year, chart of accounts, and item list before F-017 build.
- Provide admin access to Shopify, Skimmer, Google Ads, and the domain/DNS; open the Quo account and make the number available to port.
- Fund Google Ads / LSA budgets directly.
- Approve copy and deliverables within the acceptance window (§11).
- Complete consent re-permission participation as needed.

## 11. Acceptance & Revisions

Each phase deliverable is reviewed against its milestone criteria. A deliverable is deemed accepted after **5 business days** unless written defects are reported. Defect remediation within the defined scope is included; new scope is handled as a change request.

## 12. Assumptions & Dependencies

Kevin/Toni provide data and access per §10; consent re-permission completed before bulk sends; Skimmer and Quo + Sona validated on free trials before commitment/cutover; brand assets and photography supplied.

## 13. Risks & Mitigations

| Risk | L | I | Mitigation |
|------|---|---|------------|
| Number-porting downtime in peak season | Med | High | Soft-parallel; port at shoulder-season window |
| Mid-season tech change overwhelms Carlos/Toni | Med | High | Disruption-tiered phases; field/phone cutovers off-peak |
| Marketing without valid consent | Med | High | Consent state machine; suppression enforced |
| IIF import error / data corruption | Med | High | Summary-level, static account mapping, backup-before-import, totals check |
| Household data fragmentation | Med | Med | Property-centric model; identity resolution at the location |
| Quo call quality in the field | Med | Med | Validate on trial across job sites |
| Sona exceeds bundled allotment | High | Med | Price the upgraded tier up front |
| LSA penalized for AI answering | Med | Med | Human-first LSA routing; drop-off monitoring |
| Channels added without measurement | Med | Med | F-023 instruments every channel |

## 14. Customer Acquisition Strategy

Demand feeds the three incoming channels (calls, web, walk-ins); every channel is instrumented (F-023).

- **Tier 1:** Local Services Ads (F-020, human-first), review engine (F-021), referral program (F-022), route-density tactics (yard signs, neighbor door-hangers).
- **Tier 2:** Nextdoor; Facebook/Meta (value-first local groups, page, geo lead ads); directory citations (Yelp, Bing, Apple, BBB, Houzz).
- **Tier 3:** EasternLM cross-referral (owned); realtors/inspectors/PMs; complementary trades.
- **Tier 4:** Paid lead marketplaces (Angi/Thumbtack/HomeAdvisor) — test and measure.
- **Tier 5:** Truck wraps; QR-tracked EDDM timed to season; free-water-test storefront hook; local sponsorships.

## 15. Sign-Off

- [x] **SOW Confirmed (LOCKED v2.1)** — Kevin Cherwinski / BenchworksAI — June 14, 2026

---

## Appendix A: Architecture & Implementation Spec — Structure Outline (Phase 3 Preview)

1. System Architecture — funnel + property-centric spine; integrated services (Skimmer/Zapier, Quo/Sona, Shopify, Brevo, Cal.com); Hetzner topology.
2. Database Schema (Supabase) — Service Location (primary) → Contacts, Bodies of Water; Leads, Jobs, Orders, Calls, Messages, Bookings, Consent, Attribution; SQL DDL, indexes, RLS, identity resolution.
3. API Design — webhook routes (Quo, CallRail, Shopify, Cal.com, Zapier/Skimmer), lead/booking endpoints, signature verification.
4. Component Architecture — Next.js page tree, booking + chat widgets, dashboard.
5. Integration Requirements — Skimmer↔spine (Zapier), Quo/Sona, Shopify Storefront + accounting export (Appendix B), acquisition tracking, Brevo consent/automations.
6. Build Phases — §8 sequence with disruption tiers and dependencies.
7. Security & Auth — admin auth, secrets, consent enforcement, PII handling/retention, webhook signature validation.
8. Error Handling & Observability — webhook retries/idempotency, export integrity, logging, alerting.
9. Testing Strategy — Playwright E2E for critical journeys; coverage per feature.
10. Feature-to-Component Traceability Matrix.

## Appendix B: F-017 Accounting Export — Mapping Spec (to complete at build start)

- QuickBooks Desktop edition + year (determines IIF vs CSV path).
- Chart of accounts mapping (revenue: retail/chemicals, service, liners, heaters; sales tax payable; processor fees) to **static account references**.
- Item list mapping.
- Export grain: one summary sales receipt or journal entry per period (not per order).
- Sample IIF row structure + import procedure (File → Utilities → Import → IIF); mandatory backup; human-readable totals file for pre-import verification.
