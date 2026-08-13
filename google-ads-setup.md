# Google Ads Setup — The Pool Man (Tactical Companion)

**Companion to the BenchworksAI LSA + Google Ads strategy doc (F-020 / F-015).**
That doc owns the *strategy* (platform state, LSA, sequencing, economics, blockers).
This doc owns the *tactics* — exactly what to type into each wizard field, per campaign.
Where the two ever disagree, the strategy doc wins.

Business facts (from kevinthepoolman.com): The Pool Man / legal "Kevin the Pool Man",
owner Kevin Cherwinski. 110 Frowein Rd, Center Moriches, NY 11934. **Phone (631) 878-7796.**
Residential inground pools only — **above-ground is NOT serviced** (hard negative). 30+ years.
Licensed & insured (confirmed by owner). CBP Certified, NESPA/NPC, LIPSA Gold Award, BBB A+.
Google rating currently **4.4**.

---

## 0. Read first — architecture & what changed

**Three paid campaigns, no service/repair campaign.** Weekly-service demand is handled by
LSA (cleaning category deferred to Skimmer launch per field capacity) + organic — a paid
service campaign would generate route work Carlos can't absorb this season. Google Ads
covers the keyword-driven, higher-margin work:

| # | Campaign | Priority | Geography | Notes |
|---|---|---|---|---|
| **1** | **Construction (gunite/vinyl)** | **Lead campaign (your call)** | Eastern / Hamptons-adjacent, premium-geo bidding | High margin, long cycle |
| 2 | Vinyl Liners | Proven, fast close | Full area, western lean | One close ≈ covers month |
| 3 | Heaters | Shoulder-season timed | Full area | Season-extension play |

**Numbering ≠ launch order.** You asked for Construction as Campaign 1 and it's the
priority. But the strategy doc recommends *launching the Liner campaign first* to calibrate
conversion tracking cheaply before spending on expensive construction clicks. Keep
Construction as #1 in priority; decide launch order separately. Recommended launch
sequence: **Liners → Construction → Heaters.**

**LSA comes before all of this.** Pay-per-lead, longest verification clock (2–5 wks),
captures highest-intent "pool company near me." See the strategy doc §4.

**Do NOT build call-only ads** — they're retired (no new ones since Feb 2026). Use
**Responsive Search Ads + call assets** instead (this doc's ad copy already does).

---

## 1. Pre-launch corrections (close these before building)

1. **Above-ground = OUT.** Your FAQ states it. Hard negative in every campaign, not an open decision.
2. **Legal name for verification.** Confirm the exact entity name on the Suffolk home-improvement license and the insurance COI, then use that identical string in GBP + LSA + billing. Site schema legal name is "Kevin the Pool Man"; trading name is "The Pool Man." A mismatch stalls verification.
3. **Verify conversion mechanism against the real build.** The contact server action already fires a Google Ads conversion on submit — confirm whether a `/thank-you` page exists or if it's the action that fires. Wire Cal.com booking + call-asset events to match.
4. **Spot-check ZIPs before loading** the LSA/geo list — one wrong ZIP = paying for wrong-area leads. 11934 = Center Moriches ✓; verify the rest.
5. **Rating is 4.4, not 4.5.** Review engine must lift the *average*, not just count.
6. **Real phone everywhere:** (631) 878-7796. The old placeholder 555-1234 is fixed on the site.

---

## 2. "What makes your business unique" (setup wizard field)

Feeds Google's AI copy generation — answer truthfully, don't keyword-stuff. Business-level
(same for all campaigns).

**Full:**
> The Pool Man is an owner-operated pool company serving the South Shore of Eastern
> Suffolk County, Long Island, from Center Moriches. Owner Kevin Cherwinski has been
> building, servicing, and repairing residential inground pools for over 30 years. We do
> it all in-house: full gunite and vinyl pool construction and renovation, vinyl liners,
> heaters, salt systems, and repairs. What sets us apart is that Kevin is on every job —
> not a franchise, not a sales team — and he personally answers calls and texts mornings,
> evenings, and weekends. We're licensed and insured, a CBP Certified Builder, NESPA and
> NPC certified, LIPSA Gold Award winner, and BBB A+ rated, with honest recommendations
> and no upselling.

**Short:**
> Owner-operated pool company in Center Moriches, 30+ years on Eastern Suffolk County's
> South Shore. Custom pool construction, renovations, liners, heaters, and repairs.
> Licensed & insured, owner on every job, CBP Certified, BBB A+, no upselling.

---

## 3. Service area (targeting)

Radius around Center Moriches + these towns. Set location option to **"Presence: people in
or regularly in your targeted locations"** (NOT the default "presence or interest").

Center Moriches, Moriches, East Moriches, Eastport, Remsenburg, Westhampton,
Westhampton Beach, Quogue, Hampton Bays, Shirley, Mastic, Mastic Beach, Manorville,
Brookhaven, Bellport, Patchogue. ("From Patchogue to the Hamptons.")

- **Construction (Campaign 1):** eastern / Hamptons-adjacent ZIPs, bid emphasis on premium towns.
- **Liners / Heaters:** full area; western lean via location bid adjustments once data supports.

Char limits reference: Headlines ≤30 · Long headlines ≤90 · Descriptions ≤90 ·
Sitelink text ≤25 · Callouts ≤25.

---

## Campaign 1 — Construction & Renovation

Landing page: `/construction` (never the homepage). Lead on HFS financing.

### Search themes (Smart mode) / keywords (Expert mode, phrase match)
inground pool builder, pool builder near me, swimming pool construction, gunite pool
builder, concrete pool installation, vinyl inground pool installation, new pool
installation cost, build a pool Long Island, pool contractor Suffolk County, pool
renovation, pool remodeling, pool resurfacing, pool deck and coping replacement, replace
pool liner, pool and spa builder, inground hot tub installation, salt water pool
conversion.

### Category tags (product/service field)
Home Swimming Pools, Saunas & Spas; Pool Contractor; Home Improvement & Maintenance;
Inground Pool Builder; Swimming Pool Construction; Gunite Pool Contractor; Vinyl Inground
Pool; Pool Renovation; Pool Resurfacing; Spa & Hot Tub Installation; Pool Deck & Coping.
(Do NOT keep "Commercial & General Contracting.")

### "What products/services are you advertising?"
> Custom residential inground pool construction and renovation on the South Shore of
> Eastern Suffolk County. New gunite and vinyl inground pool design and build, pool and
> spa construction, and full renovations — resurfacing, new vinyl liners, tile/coping/
> decking, LED lighting, and equipment upgrades. Financing available.

### Headlines (≤30)
Kevin the Pool Man / Custom Inground Pools / Inground Pool Builder / Gunite & Vinyl Pools /
30+ Years Building Pools / CBP Certified Builder / Licensed & Insured / Owner on Every Job
Site / Free Design Consultation / Financing Available / Rates as Low as 2.99% / LIPSA Gold
Award Winner / BBB A+ Rated Pool Builder / Serving Eastern Suffolk / Built by Kevin, Not a
Chain

### Long headlines (≤90)
- Custom Inground Pool Construction on Long Island's South Shore
- Owner-Operated Pool Builder — 30+ Years in Eastern Suffolk County
- Gunite & Vinyl Pools, Renovations & Spas — Licensed, Insured & CBP Certified

### Descriptions (≤90)
- Custom gunite & vinyl inground pools in Eastern Suffolk County. 30+ years, owner-run.
- Licensed, insured & CBP certified. Kevin is on every job — no sales team, no upselling.
- Financing available — rates from 2.99%, up to 20 years. Free on-site design consult.
- Serving Center Moriches to the Hamptons. Call (631) 878-7796 for a free quote.

### Sitelinks (→ page)
New Pool Construction → /construction · Gunite & Vinyl Pools → /construction · Pool
Renovations → /construction · Financing Options → /faq · Our Work → /our-work · Free
Consultation → /booking

### Callouts
Licensed & Insured · 30+ Years Experience · CBP Certified Builder · BBB A+ Rated · Owner
on Every Job · Financing Available · No Upselling · Free On-Site Consultation

---

## Campaign 2 — Vinyl Liners

Landing page: `/vinyl-liners`. Fast sales cycle — recommended launch-first for tracking calibration.

### Search themes / keywords (phrase match)
vinyl pool liner replacement, pool liner installation, replace pool liner, new pool
liner, inground pool liner, pool liner cost, pool liner quote, 20 mil pool liner, 28 mil
pool liner, Loop-Loc liner, Merlin pool liner, pool liner near me, [town] pool liner.

### Category tags
Home Swimming Pools, Saunas & Spas; Pool Contractor; Pool Liner Replacement; Vinyl Pool
Liner; Inground Pool Liner.

### "What products/services are you advertising?"
> Vinyl inground pool liner replacement and installation on the South Shore of Eastern
> Suffolk County. Precision on-site measurement, custom fabrication, and vacuum-fit
> installation of 20-mil and 28-mil liners from Loop-Loc, Merlin, and Latham.

### Headlines (≤30)
Kevin the Pool Man / Vinyl Pool Liner Experts / Pool Liner Replacement / New Liner, No
Wrinkles / Loop-Loc, Merlin & Latham / 30+ Years Installing Liners / Custom-Fit Vinyl
Liners / Licensed & Insured / Free On-Site Measurement / Owner-Operated, Not a Chain /
Serving Eastern Suffolk / 20-mil & 28-mil Liners / BBB A+ Rated Pool Pros / Free Liner
Quote / Fast, Clean Installation

### Long headlines (≤90)
- Custom-Fit Vinyl Pool Liner Replacement in Eastern Suffolk County
- Loop-Loc, Merlin & Latham Liners — Precision-Measured, Zero-Wrinkle Installation
- 30+ Years Replacing Pool Liners on Long Island's South Shore — Owner-Operated

### Descriptions (≤90)
- Precision-measured, zero-wrinkle vinyl liner installation. Loop-Loc, Merlin & Latham.
- 30+ years, owner-operated. Free on-site measurement and a no-pressure quote.
- Licensed & insured, BBB A+ rated. Serving Center Moriches to the Hamptons.
- Time for a new liner? Call (631) 878-7796 for a free measurement and quote.

### Sitelinks (→ page)
Vinyl Liner Options → /vinyl-liners · 20-mil & 28-mil Liners → /vinyl-liners · Design Your
Liner → /vinyl-liners · Free Measurement → /booking · Our Work → /our-work

### Callouts
Licensed & Insured · 30+ Years · Zero-Wrinkle Fit · Free Measurement · Top Liner Brands ·
BBB A+ Rated · No Upselling · Owner-Operated

---

## Campaign 3 — Heaters

Landing page: `/pool-heaters`. Launch timed to shoulder season (F-014 alignment).

### Search themes / keywords (phrase match)
pool heater installation, pool heater repair, pool heat pump, gas pool heater, propane
pool heater, pool heater replacement, heat pump pool heater install, pool heater near me,
swimming pool heater cost, [town] pool heater.

### Category tags
Home Swimming Pools, Saunas & Spas; Pool Contractor; Pool Heater Installation; Swimming
Pool Heater; Heat Pump Installation.

### "What products/services are you advertising?"
> Swimming pool heater sales, installation, repair, and replacement on the South Shore of
> Eastern Suffolk County. Heat pumps and natural gas/propane heaters, all major brands
> serviced, to extend the swim season from April through October.

### Headlines (≤30)
Kevin the Pool Man / Pool Heater Installation / Heat Pump & Gas Heaters / Extend Your Swim
Season / Pool Heater Repair & Install / Swim April to October / 30+ Years of Experience /
Licensed & Insured / All Major Heater Brands / Free Heater Quote / Owner-Operated Service /
Serving Eastern Suffolk / Gas & Propane Heaters / Fast Heater Repair / BBB A+ Rated Pool
Pros

### Long headlines (≤90)
- Pool Heater Installation & Repair Across Eastern Suffolk County — 30+ Years
- Heat Pumps, Gas & Propane Heaters — Sales, Install & Repair, All Major Brands
- Extend Your Swim Season April Through October — Licensed & Insured Pool Pros

### Descriptions (≤90)
- Heat pump & gas heater sales, installation, and repair. All major brands serviced.
- Extend your swim season from April through October. 30+ years, owner-operated.
- Licensed & insured, BBB A+ rated. Serving Center Moriches to the Hamptons.
- Heater down? Call (631) 878-7796 for fast repair or a free install quote.

### Sitelinks (→ page)
Heat Pumps → /pool-heaters/heat-pumps · Gas Heaters → /pool-heaters/gas-heaters · Heater
Repair → /pool-heaters/heater-repair · Heater Replacement → /pool-heaters/heater-replacement ·
Free Quote → /booking

### Callouts
Licensed & Insured · 30+ Years · All Major Brands · Fast Repair · Free Quotes · BBB A+
Rated · Owner-Operated · Extend Your Season

---

## Negative keywords (shared list — apply to all campaigns)

above ground, jobs, hiring, salary, careers, diy, how to, kit, intex, doughboy, stock
tank, cost calculator (unless bidding cost intent), cheap, free (guard), parts, chemicals,
hot tub cover, commercial, municipal, city of, plunge pool, and any town outside the
service area.

**Cross-campaign negatives:** add liner/heater terms as negatives in Construction (and vice
versa) so queries don't leak between campaigns.

---

## Settings checklist (Expert Mode preferred over Smart)

Smart mode auto-opts into Display/YouTube and hides network + location controls. Prefer
Expert Mode; if you launch Smart, tighten after week one.

- [ ] Objective **Leads**, type **Search**
- [ ] Conversion tracking live BEFORE spend: **Calls** (call assets + call reporting, 60s min duration) · **Forms** (verify real mechanism) · **Bookings** (Cal.com completion) · **GA4 linked, enhanced conversions on**
- [ ] Bidding: **Maximize Clicks + max-CPC cap** ($3–$5) → **Maximize Conversions** after ~15–30 conv → **Target CPA per campaign** (liner tCPA ≠ construction tCPA)
- [ ] Networks: **Search partners OFF, Display OFF**
- [ ] Locations: **"Presence"**, not "presence or interest"
- [ ] Match type **phrase** to start (broad only later with smart bidding + clean data)
- [ ] Negative list applied to all campaigns; cross-campaign negatives set
- [ ] RSAs + **call assets** (NOT call-only ads); business-hours call scheduling (human-first rule)
- [ ] Each campaign → its own budget + geo; landing page = service page, not homepage
- [ ] UTMs on every ad URL (F-023); leads resolve to Service Location in the spine

---

## Local Services Ads (do first — highest ROI, longest clock)

Now that Kevin is licensed & insured, LSA is unblocked. Badge is now **"Google Verified"**
(the old Google Guaranteed money-back guarantee ended Nov 2025; verification requirements
unchanged). LSA is migrating into Google Ads as a Performance Max pay-per-lead campaign
(Search + Maps only, still keywordless/pay-per-lead) — the UI may differ from older guides.
Full setup, blockers, and economics live in the BenchworksAI strategy doc §4. Start the
verification clock (2–5 wks) immediately; use the wait to build these paused campaigns and
run the review engine.

---

## Known caveats
- Google rating is **4.4** — don't claim 5 stars.
- "Family-owned" only in schema/a review — prefer "owner-operated / Kevin on every job."
- Residential inground only; above-ground explicitly excluded (kept as a negative).
