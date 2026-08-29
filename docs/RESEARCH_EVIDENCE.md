# Research & Evidence Ledger — RajKisan One

**Research cut:** 29 Aug 2026  
**Rule:** official Government sources are preferred; prototype metrics are never presented as official observations.

## 1. Challenge and programme
- Rajasthan Innovation Challenge challenge: **Revamp of Department of Agriculture Web Portal — Citizen-Centric Digital Front-End**.
- Programme portal: https://change.rajasthan.gov.in/

## 2. Existing Agriculture web estate
### Agriculture sectoral portal
Official surface: https://agriculture.rajasthan.gov.in/agriculture/

The portal identifies itself as a Rajasthan sectoral portal and uses the WebMyWay publishing stack. Its information architecture is primarily content/category oriented. This supports a phased modernization approach: preserve working publishing/source ownership initially, add a modern structured experience layer, then migrate priority content after parity and owner sign-off.

### RajKisan
Official surface: https://rajkisan.rajasthan.gov.in/

RajKisan already exposes substantial transactional breadth including agriculture/horticulture subsidy services, application status, Farmer Registry links, Soil Health Card status, land/girdawari references, mandi information and citizen/department logins.

**Research conclusion:** the challenge should not be answered by rebuilding RajKisan. The missing opportunity is the public digital front door: discovery, continuity, explanation, document readiness, status readability, feedback, content lifecycle and service observability.

## 3. Rajasthan identity/API/document rails
### Jan Aadhaar 2.0
Integration resources: https://janaadhaar.rajasthan.gov.in/content/raj/janaadhaar/en/performance-dashboard/integration-with-jan-aadhaar.html

Rajasthan publishes integration documentation and upgraded API guidance. RajKisan One therefore models Jan Aadhaar as an approved production identity/profile rail, never as a browser-side data source. Evaluator mode uses synthetic masked attributes and collects no real credentials.

### Raj Sewa Dwaar
Official DoIT&C page: https://doitc.rajasthan.gov.in/ProjectDetails.aspx?ID=1031

DoIT&C describes Raj Sewa Dwaar as an enterprise integration/API service layer. Architectural implication: production adapters should use approved Rajasthan service-bus/API pathways rather than scraping or unmanaged point-to-point credentials.

### Raj eVault / DigiLocker pattern
RajKisan One uses a **reuse-first, upload-second** document-readiness model. Production document operations require approved identity/document APIs and issuer authority.

## 4. Scheme transparency
### Jan Soochna
Official portal: https://jansoochna.rajasthan.gov.in/

Jan Soochna already exposes cross-department scheme information and eligibility/penetration surfaces. RajKisan One should interoperate with existing Rajasthan transparency assets rather than create an isolated eligibility taxonomy.

## 5. GIS and land context
### RajDharaa
Official portal: https://gis.rajasthan.gov.in/

RajDharaa is Rajasthan's statewide GIS gateway. Production basemaps, boundaries and authorised spatial layers should come through RajDharaa/approved OGC services. The MVP map is explicitly stylised and its district KPIs are synthetic.

### Apna Khata / e-Dharti
Official portal: https://apnakhata.rajasthan.gov.in/

Land context remains with the Revenue authority. Displaying or pre-filling land context does not mutate or create a revenue record.

## 6. National agriculture DPI
### AgriStack / UFSI
Official portal: https://agristack.gov.in/

AgriStack defines a federated Farmer Registry, Farmer ID/farmland relationships and UFSI interoperability concepts. RajKisan One's service contracts, minimum-necessary data access and consent/receipt model are intentionally designed to evolve toward approved UFSI integrations rather than form a new master database.

## 7. Government web/accessibility requirements
### GIGW 3.0
Guidance: https://guidelines.india.gov.in/new-features-of-gigw-3-0/

GIGW 3.0 incorporates WCAG 2.1 Level AA and emphasizes accessibility, quality, cybersecurity, lifecycle management and API-level integration. RajKisan One treats these as operating controls, not launch-day checkboxes.

## 8. Privacy and Responsible AI
### Digital Personal Data Protection Rules 2025
MeitY: https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa

### Rajasthan Responsible AI principles
Official Rajasthan AI portal: https://ai.rajasthan.gov.in/Website/AIPrinciplesResponsibleAI

The MVP reflects transparency/explainability, privacy/data governance and human oversight through the rule: **Rules evaluate. AI explains. Government workflows decide.**

## 9. Agriculture context feeds
### IMD / Agromet
Rajasthan Met Centre: https://mausam.imd.gov.in/jaipur/

### AGMARKNET / data.gov.in
Official OGD resource: https://www.data.gov.in/resource/current-daily-price-various-commodities-various-markets-mandi

Context cards should expose source/freshness and never silently present stale weather/market values as current.

## 10. Multilingual access
### BHASHINI
API documentation: https://dibd-bhashini.gitbook.io/bhashini-apis

BHASHINI can provide ASR/NMT/TTS accessibility. Language AI is not an entitlement authority.

## 11. Bounded reuse of Syntheon capability
- SUTRA-ID Edge: https://github.com/Sauravssoni/Sutra-Edge
- FarmGraph Rakshak: https://github.com/Sauravssoni/RIC-FarmGraph-Sentinel
- RAJ-AGRISETU X: https://github.com/Sauravssoni/RIC-Statewide-AgriStack

Reuse is modular:
- **SUTRA** → selective assisted offline voice/evidence channel;
- **FarmGraph** → map-first command-centre, PWA/offline and integration-truth engineering patterns;
- **RAJ-AGRISETU X** → consent/provenance/authority-boundary and AgriStack/UFSI adapter discipline.

## Research conclusion
Rajasthan does not need another isolated agriculture application. It needs a **single citizen experience contract** that composes capabilities it already owns, exposes uncertainty/authority honestly, measures where citizens fail to complete services, and can evolve toward AgriStack/UFSI without forcing a risky backend rewrite.
