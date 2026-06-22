# Changelog: The Pool Man SOW — v2.0 → v2.1

**Date:** June 14, 2026
**Review Cycle:** 1
**Reviewers:** Builder (A), Business (B), Implementer (C)
**Result:** 17 findings, all APPROVED (several with refined fixes). No re-review required — changes are additive/clarifying plus one structural data-model decision.

## Approved Changes

| ID | Sev | Change | Sections |
|----|-----|--------|----------|
| REV-001 | CRITICAL | QB export hardened: summary-level, static account mapping, backup-before-import, totals check; F-017 mapping spec added | F-017, App. B, 9.5 |
| REV-002 | MED | Attribution reworded to best-effort; walk-in + missed-call fallbacks | O-001, F-007, F-023, 2.1 |
| REV-003 | LOW | Skimmer↔spine sync payload named explicitly | F-019 |
| REV-004 | LOW | Booking defaults (radius, zip-list owner, buffers) called out | F-006 |
| REV-005 | HIGH | Phases re-marked by disruption level; field + phone cutovers sequenced off-peak | §8 |
| REV-006 | HIGH | **Data model made property/Service-Location-centric** | F-010, §6, App. A.2 |
| REV-007 | HIGH | LSA line human-first; Sona as after-hours/overflow backstop | F-009, F-020 |
| REV-008 | MED | AI scope-limitation clause | 9.3, F-008/F-009 |
| REV-009 | MED | Key definitions (qualified lead, booked consult, retained) | 2.1 |
| REV-010 | MED | Consent state machine + suppression | 3.3, F-012/F-013 |
| REV-011 | MED | Client Responsibilities, acceptance window, timeline disclaimer | §10, §11, §8 |
| REV-012 | MED | Ownership/support/disclaimers cross-referenced to TSA; added marketing-performance + accounting-liability disclaimers | §9 |
| REV-013 | MED | List normalization/dedup/consent pass | F-013 |
| REV-014 | LOW | Dashboard refresh + retention specified | F-011 |
| REV-015 | LOW | Phase 5 split into 5A (infrastructure) / 5B (launch) | §8 |
| REV-016 | LOW | LSA "background check" → "Google-required personnel verification/screening" | F-020 |
| REV-017 | LOW | Exec-summary phrasing professionalized | §1 |

## Rejected / Deferred
None. (Reviewer-prescribed fixes were refined, not rejected: REV-005 re-sequence vs delay; REV-001 summary-level discipline over format choice; REV-007 human-first routing over disclosure-only; REV-012 cross-ref TSA vs duplicate.)
