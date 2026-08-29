# Challenge Requirements Traceability Matrix

| Challenge requirement | Implemented evaluator proof | Production path |
|---|---|---|
| Modern mobile-first portal | `#home`, responsive mobile layout, PWA shell | GIGW/STQC/VAPT/UAT gates |
| Hindi / English | global language switch + HTML `lang` update | Department-approved translation workflow and parity SLA |
| Modern CMS | `#cms` structured lifecycle, Rule Studio, editorial queue | phased WebMyWay adapter → dual publishing → modern CMS |
| Rules-based AI chatbot | Krishi Saathi grounded assistant | BHASHINI + approved retrieval/tool adapter; no statutory decision by AI |
| API-driven eligibility | `POST /api/eligibility` + versioned rule receipt | authoritative scheme rules + Department approval + RajKisan handoff |
| Secure document upload | MIME/size checks + browser SHA-256 | malware scan, encrypted storage, signed access, retention, eVault/DigiLocker reuse |
| SSO Rajasthan / Jan Aadhaar | sandbox sign-in + purpose notice | DoIT&C-approved RajSSO/Jan Aadhaar onboarding |
| Application/status tracking | `#farm` citizen-readable timeline | RajKisan status API/approved contract |
| Usage analytics | `#analytics` completion funnel + privacy-safe telemetry | first-party event pipeline |
| Feedback monitoring | feedback UI + `POST /api/feedback` + action queue | service-owner closure and Sampark escalation where required |
| DPI framework | `#integrations` truth matrix + Raj Sewa Dwaar/UFSI alignment | approved adapters and schemas |
| Future interoperability | shared service contracts across portal/e-Mitra/SUTRA/UFSI | governed API catalogue + conformance tests |
| Accessibility | skip link, keyboard controls, reduced motion, contrast/text size | WCAG 2.1 AA / GIGW 3.0 evidence |
| GIS / citizen support | `#map` RajDharaa-aligned pattern | authorised OGC layers + official centre directories |
| Low-connectivity access | PWA/offline shell + selective `#edge` | service-specific offline queue and assisted pilots |
| Citizen-centred simplification | `#services` → **Details** | structured Citizen Service Contract |
| Assisted-channel continuity | `#farm` → **Create resume receipt** | approved token/session broker |

## No-hidden-requirement rule
A feature is not considered covered merely because it appears in the proposal. The evaluator should be able to **click or inspect a visible proof** for every explicit expected outcome.
