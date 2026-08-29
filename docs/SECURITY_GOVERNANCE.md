# Security, Privacy, Accessibility & Responsible AI

## Security-by-design
- Rajasthan Government hosting/security controls to be followed in production.
- TLS everywhere; HSTS after production-domain validation.
- CSP, anti-clickjacking, MIME protection and strict referrer/permissions policies.
- Server-side session handling for authenticated journeys; no raw Aadhaar/Jan Aadhaar identifiers in browser persistence.
- Minimum-necessary API payloads and masked display values.
- File type/MIME validation, size limits, malware scanning, checksum, encrypted storage and time-bound access for citizen uploads.
- RBAC for citizen, content editor, scheme owner, analyst, helpdesk and administrator roles.
- Audit events for content publication, rule changes, consented data access, decision receipts and privileged actions.
- Secret management outside code/repository; no Government credentials in frontend bundles.
- Dependency/SAST/DAST/VAPT gates before production.
- Fail closed for identity, document and statutory service actions.

## Privacy / DPDP-aware pattern
The portal requests only attributes needed for a specific service. Consent notices state purpose, data scope, recipient/system, duration where applicable and next action. A consent receipt is retained where required. The interface should allow revocation/withdrawal where the underlying integration semantics support it. Production implementation will follow the DPDP Act/Rules and Department legal/security directions.

## Accessibility / GIGW
- WCAG 2.1 AA target for citizen journeys.
- semantic headings/landmarks; keyboard-only completion; visible focus; skip links.
- no colour-only states; accessible error and success messages.
- 200% zoom/reflow, touch targets, text resize, reduced motion support.
- Hindi/English parity and accessible PDFs/media remediation workflow.
- content-owner dashboard for alt text, broken links, stale documents and missing language versions.

## Responsible AI
Rajasthan's AI/ML Policy 2026 explicitly highlights trustworthiness, safety, transparency/explainability, privacy/data governance, fairness/inclusivity, human oversight and accountability. RajKisan One therefore enforces:

**AI may**: detect intent, retrieve official content, translate, summarize, read aloud and explain deterministic rule results.

**AI may not**: modify Government facts, invent scheme conditions, approve/deny benefits, silently widen consent, or present uncertain generated text as authoritative.

Every AI-assisted answer that affects a service journey should carry source/version metadata and a deterministic next-action tool when applicable.
