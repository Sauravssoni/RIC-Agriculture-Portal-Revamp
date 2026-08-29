# RajKisan One — Target Architecture

## Product boundary
RajKisan One is the **citizen-experience, orchestration and observability layer** for Rajasthan Agriculture. It does not propose replacing RajKisan, RajSSO, Jan Aadhaar, Raj Sewa Dwaar, Raj eVault, RajDharaa, e-Dharti or AgriStack registries.

```text
Citizen Web / PWA      e-Mitra / extension worker      Selective SUTRA-ID Edge
          \                     |                         /
           \____________ Experience & Consent Edge _____/
                              |
           +------------------+-------------------+
           |                  |                   |
     Service Catalogue   Scheme Rule Engine   Krishi Saathi
     Search / CMS        Deterministic         Explain / route
           |                  |                   |
           +------------------+-------------------+
                              |
                 Rajasthan Integration Fabric
                              |
    +----------+----------+----------+-----------+----------+
  RajKisan   RajSSO   Jan Aadhaar  Raj eVault  RajDharaa  Jan Soochna
    |          |           |           |          |          |
    +----------+-----------+-----------+----------+----------+
                              |
              Raj Sewa Dwaar / approved API contracts
                              |
                   Future AgriStack / UFSI
                              |
          IMD Agromet / AGMARKNET / authorised public feeds
```

## Core services
1. **Experience shell** — mobile-first PWA, bilingual, GIGW/WCAG aware, low-bandwidth and installable.
2. **Structured service catalogue** — every scheme/service carries owner, source, version, effective dates, eligibility criteria, required documents, handoff, support and freshness metadata.
3. **Scheme Rule Registry** — deterministic, versioned pre-checks. AI never approves or denies statutory benefits.
4. **Krishi Saathi** — intent routing, official-source retrieval, rule-tool invocation and citizen-language explanation. BHASHINI can provide ASR/NMT/TTS.
5. **Document readiness** — check what is already verified/available through approved systems; ask the citizen to upload only missing items.
6. **My Agriculture** — unified citizen-readable view of applications, Farmer Registry relationship, land context, document readiness and contextual advisories.
7. **Citizen Experience Command Centre** — task completion, funnel drop-off, search intelligence, feedback reasons, content freshness, accessibility readiness and connector health.
8. **GIS & service access** — RajDharaa-aligned official geography/layers in production; nearest support and district-level service friction.
9. **Integration gateway** — every adapter has a truth state and authority boundary.
10. **Audit & consent** — purpose, requested attributes, expiry/revocation where applicable, rule version and decision receipt.

## Rule compilation contract
A scheme is not just a web page. It is a versioned service object:

```json
{
  "scheme_id": "RK-SVC-001",
  "owner": "Department of Agriculture",
  "effective_from": "YYYY-MM-DD",
  "source_document": "official-notification-or-guideline",
  "criteria": [],
  "required_documents": [],
  "handoff": "RajKisan-authoritative-workflow",
  "last_reviewed": "YYYY-MM-DD",
  "language": ["hi", "en"]
}
```

The citizen result always exposes: **result class, reasons, missing data, rule version, source reference, next action, and non-statutory disclaimer**.

## AI authority boundary
AI may translate, explain, retrieve, summarize, classify intent, and suggest the next service. It may not alter Government records, assert that a citizen is legally entitled, sanction a benefit, or bypass an authoritative workflow. This is aligned with Rajasthan's Responsible AI principles around transparency, privacy, human oversight and accountability.

## Optional SUTRA role
SUTRA-ID Edge is not a portal dependency. It is an optional channel for extension workers, camps or low-connectivity environments. It can capture consented voice/evidence locally, retain AI output as a reversible candidate, require human confirmation, and later hand off through the same service contracts. Authority is established only after approved connected validation.
