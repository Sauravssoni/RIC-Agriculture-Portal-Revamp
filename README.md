<p align="center">
  <strong>RAJASTHAN INNOVATION CHALLENGE 2026 · AGRICULTURE</strong>
</p>

# RajKisan One — Rajasthan Agriculture Digital Front Door

<p align="center"><strong>MVP PROTOTYPE · EVALUATOR BUILD · NOT A PRODUCTION GOVERNMENT SERVICE</strong></p>

<p align="center"><strong>One farmer. One front door. Every agriculture service.</strong></p>

**Challenge:** Revamp of Department of Agriculture Web Portal — Citizen-Centric Digital Front-End  
**Applicant:** Syntheon Tech Private Limited  
**MVP Prototype:** zero-dependency citizen PWA + deterministic evaluator APIs  
**Repository:** https://github.com/Sauravssoni/RIC-Agriculture-Portal-Revamp  
**Deployment target:** Vercel project `ric-agriculture-portal-revamp`  
**Design principle:** modernise the experience, preserve Government source authority

RajKisan One is not another agriculture database and not a cosmetic website redesign. It is a **citizen-experience, orchestration and observability layer** that makes Rajasthan's existing agriculture systems feel like one coherent service to a farmer while giving the Department measurable control over completion, friction, accessibility, content freshness and interoperability.

<p align="center"><img src="screenshots-v4/home.webp" alt="RajKisan One citizen home" width="100%" /></p>

## The thesis

Rajasthan already has an **award-winning RajKisan Saathi transaction backbone** plus RajSSO, Jan Aadhaar, Raj Sewa Dwaar, Jan Soochna, RajDharaa, e-Dharti/Apna Khata, e-Mitra, public agriculture feeds and the emerging AgriStack/UFSI ecosystem. The challenge is the **Department's public front door**: discovery, continuity, explanation, document readiness, status visibility, feedback and operational analytics. RajKisan One is therefore designed to expose and compose existing Government investment, not compete with it.

```text
EXISTING GOVERNMENT SYSTEMS
        ↓
RAJKISAN ONE
citizen experience + consent + rules + orchestration + observability
        ↓
ONE COHERENT SERVICE JOURNEY
        ↓
AUTHORITATIVE HANDOFF / STATUS / RECEIPT
```

## Evaluator entry points

Run:

```bash
python3 -m http.server 3000
```

Open `http://localhost:3000/#home` and click **Evaluator Demo**.

| Surface | Route | Proof |
|---|---|---|
| Citizen front door | `#home` | task-first mobile experience, search, Hindi/English, personalised context |
| Services | `#services` | structured catalogue + explainable deterministic eligibility |
| My Agriculture | `#farm` | application timeline, document readiness, farm/service context |
| GIS & Service Access | `#map` | Rajasthan service map pattern + district experience intelligence |
| Department Insights | `#analytics` | task funnel, friction, feedback, search, content and GIGW health |
| DPI Integrations | `#integrations` | explicit truth/authority state for every connector |
| CMS & GIGW | `#cms` | content lifecycle + phased WebMyWay migration |
| SUTRA Field | `#edge` | optional voice/evidence channel for low-connectivity assisted access |

<p align="center"><img src="screenshots-v4/services.webp" alt="Citizen Service Contract" width="100%" /></p>

<p align="center"><img src="screenshots-v4/analytics.webp" alt="Department Insights command centre" width="100%" /></p>

## MVP status and what is actually implemented

This repository intentionally remains labelled **MVP PROTOTYPE** even where the UI is polished to Government-grade standards. That preserves a clear boundary between an evaluator-ready demonstrator and a Department-configured production service, leaving room for official content, design-system, workflow, security, hosting and integration customisation after a joint pilot.

### Citizen experience
- responsive desktop/mobile government-style interface;
- English/Hindi UI switching;
- accessibility controls, skip link, keyboard-compatible controls and reduced-motion support;
- task-first service cards instead of deep departmental navigation;
- personalised demo workspace + proactive **Action Centre** for deadlines, missing documents and pending status actions;
- functional RajSSO/Jan Aadhaar sandbox sign-in with purpose notice and no real credential collection;
- PWA manifest + offline shell service worker;
- splash/loading states, animated KPI bars, interactive map, toasts and guided evaluator sequence.

### Service intelligence
- structured scheme/service catalogue with a clickable **Citizen Service Contract** for source/version, evidence, next step, authority, channel continuity and escalation;
- deterministic eligibility pre-check with rule-version/decision receipt;
- non-statutory authority boundary visible in the result;
- Krishi Saathi routes the citizen to rules/tools rather than inventing eligibility;
- citizen-readable application status timeline;
- verified-document reuse UX with upload as fallback;
- functional secure-document demo: PDF/JPG/PNG allowlist, 5 MB limit and browser-side SHA-256 with no file transmission in evaluator mode;
- My Service Inbox for cross-channel continuity and a functional privacy-safe **resume receipt** for e-Mitra / extension-worker / authorised field continuation.

### Department operations
- citizen journey funnel;
- largest-friction signal;
- search intelligence and zero-result correction;
- feedback reason radar;
- content freshness/supersession/broken-link health;
- accessibility/GIGW readiness;
- integration health and truth states;
- service-quality action queue turning friction signals into owner + due-date operations;
- privacy-safe evaluator session telemetry and cross-channel resume KPI;
- map-linked district service context.

### Evaluator API contracts
When deployed on Vercel, deterministic sandbox functions are available:

- `GET /api/health`
- `POST /api/eligibility`
- `POST /api/feedback`
- `GET /api/content-health`
- `GET /api/action-centre`
- `GET /api/service-search?q=tarbandi`

They never claim privileged Government credentials and never persist real citizen data.

## Government infrastructure strategy

| Rail | RajKisan One role | Authority stays with |
|---|---|---|
| RajKisan | service transaction/status/deep-link adapter | RajKisan |
| RajSSO | citizen and official authentication | DoIT&C |
| Jan Aadhaar 2.0 | consented minimum-necessary identity/profile attributes | Jan Aadhaar |
| Raj Sewa Dwaar | Rajasthan API/ESB integration plane | DoIT&C/RISL |
| Raj eVault/DigiLocker | verified-document reuse | issuing/document system |
| Jan Soochna | scheme information/eligibility/penetration interoperability | source department |
| RajDharaa | official geography and spatial service layers | RajDharaa/source departments |
| e-Dharti/Apna Khata | approved land/girdawari context | Revenue authority |
| AgriStack/UFSI | future farmer/farmland interoperability | state/central registry authority |
| BHASHINI | ASR/NMT/TTS accessibility | language provider only |
| IMD / AGMARKNET | freshness-labelled advisory/market context | source agencies |
| e-Mitra / Sampark | assisted service and grievance paths | respective authorities |

## Responsible AI boundary

> **Rules evaluate. AI explains. Government workflows decide.**

AI may retrieve, translate, summarize, classify intent and explain a deterministic result. It may not modify Government facts, silently widen consent, or approve/deny a statutory benefit.

## Selective reuse of proven Syntheon capability

**SUTRA-ID Edge** is an optional assisted channel, not a portal dependency. It contributes the pattern `voice/evidence → AI candidate → human confirmation → signed handoff` for low-connectivity field work.  
**FarmGraph Rakshak** contributes map-first operations, offline/PWA and integration-truth patterns; disease AI is not used for statutory eligibility.  
**RAJ-AGRISETU X** contributes consent/provenance and AgriStack/UFSI adapter discipline.

<p align="center"><img src="screenshots-v4/map.webp" alt="RajDharaa-aligned GIS service access concept" width="100%" /></p>

## 90-day implementation envelope

The proposal defines an **indicative ₹48.00 lakh production-core pilot** with seven gates: baseline/governance, citizen foundation, service orchestration, approved Rajasthan DPI adapters, intelligence/access, Department operations, hardening/UAT and go-live blueprint. Statewide rollout is deliberately not overclaimed.

## Documentation

- [`docs/RESEARCH_EVIDENCE.md`](docs/RESEARCH_EVIDENCE.md)
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/INTEGRATION_TRUTH_MATRIX.md`](docs/INTEGRATION_TRUTH_MATRIX.md)
- [`docs/SECURITY_GOVERNANCE.md`](docs/SECURITY_GOVERNANCE.md)
- [`docs/90_DAY_PILOT.md`](docs/90_DAY_PILOT.md)
- [`docs/BUDGET_AND_RESOURCING.md`](docs/BUDGET_AND_RESOURCING.md)
- [`docs/CLAIMS_AND_PROOF.md`](docs/CLAIMS_AND_PROOF.md)
- [`docs/EVALUATOR_RUNBOOK.md`](docs/EVALUATOR_RUNBOOK.md)
- [`docs/RAJKISAN_CONTINUITY_STRATEGY.md`](docs/RAJKISAN_CONTINUITY_STRATEGY.md)
- [`docs/EVALUATOR_DIFFERENTIATION.md`](docs/EVALUATOR_DIFFERENTIATION.md)
- [`docs/REQUIREMENTS_TRACEABILITY.md`](docs/REQUIREMENTS_TRACEABILITY.md)
- [`docs/SERVICE_OBSERVABILITY_MODEL.md`](docs/SERVICE_OBSERVABILITY_MODEL.md)
- [`docs/FUTURE_VISION_BUSINESS_MODEL.md`](docs/FUTURE_VISION_BUSINESS_MODEL.md)
- [`docs/JOINT_PILOT_ACCEPTANCE_SCORECARD.md`](docs/JOINT_PILOT_ACCEPTANCE_SCORECARD.md)
- [`submission/STRICT_JUDGE_REVIEW.md`](submission/STRICT_JUDGE_REVIEW.md)
- [`docs/FORM_ANSWERS_FINAL.md`](docs/FORM_ANSWERS_FINAL.md)
- [`submission/FINAL_RELEASE_GATE.md`](submission/FINAL_RELEASE_GATE.md)

## Quality gates

```bash
npm run release-check
```

Final browser QA includes desktop and 390px-mobile render review of the citizen home plus visual review of My Agriculture, GIS and Department Insights.

## MVP prototype integrity

All citizen identities, application numbers, district completion rates, funnel metrics, content-health metrics and service outcomes shown in the evaluator UI are **synthetic demonstration data** unless explicitly labelled as a dated official aggregate. The map is a stylised Rajasthan proof surface, not authoritative geometry. Production use requires Department-approved content and API onboarding, current official geography, credential/security review, VAPT/UAT, GIGW/STQC process as applicable, and approved hosting.
