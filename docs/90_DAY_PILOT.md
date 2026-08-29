# 90-Day Production-Core Pilot

## Pilot objective
Move from evaluator prototype to a Department-approved production-core pilot without a big-bang rewrite of legacy systems.

| Gate | Days | Output |
|---|---:|---|
| 0. Baseline & governance | 0–15 | top-task inventory, content crawl, system owners, data classification, integration onboarding, pilot districts, baseline analytics |
| 1. Citizen foundation | 15–35 | mobile PWA, Hindi/English design system, structured catalogue, search, CMS adapter, instrumentation |
| 2. Service orchestration | 25–50 | rule registry/compiler, application timeline adapter, secure document-readiness flow, consent/receipt model |
| 3. Rajasthan DPI adapters | 35–60 | RajSSO/Jan Aadhaar/Raj Sewa Dwaar contract integration in approved environments; RajKisan handoff/status; Raj eVault pattern |
| 4. Intelligence & access | 45–70 | Krishi Saathi, BHASHINI path, RajDharaa-aligned GIS, IMD/AGMARKNET context, e-Mitra assisted UX |
| 5. Department operations | 55–75 | task funnel, search/feedback intelligence, content health, integration health, operational alerts |
| 6. Hardening & field UAT | 70–85 | security/VAPT remediation, WCAG 2.1 AA/GIGW evidence, performance, low-bandwidth and device testing |
| 7. Go-live gate | 85–90 | UAT sign-off, runbooks, role training, migration plan, KPI baseline, statewide scale blueprint |

## Suggested contrasting pilot
- Jaipur: high-volume, mixed citizen/service use.
- Jodhpur: western/arid agriculture and regional operations.
- Udaipur or Barmer: contrasting terrain/connectivity and assisted-access validation.

Final district selection should be made with the Department using transaction volume, scheme mix, connectivity and field-support availability.

## Pilot acceptance targets
Targets are subject to baseline validation during Days 0–15.

- 100% of selected priority services represented as structured, versioned service objects.
- 100% core citizen flows available in Hindi and English.
- 100% eligibility pre-checks produce rule/source/version traces.
- 0 autonomous AI sanction/denial paths.
- 100% connected systems expose health + truth state.
- 100% top-task events instrumented from discovery to completion/handoff.
- WCAG 2.1 AA evidence for core journeys; GIGW readiness matrix completed.
- Target p75 LCP <=2.5 s for priority citizen pages on defined test device/network profile.
- Offline/poor-network behavior validated for the PWA shell and queued non-authoritative actions.
- Content owner + last-reviewed metadata on every migrated priority content item.

## Rollout after pilot
Phase 2 expands scheme/service coverage, production integrations and content migration statewide. Phase 3 adds consented AgriStack/UFSI interoperability and more assisted/edge channels without changing the citizen-facing service contract.
