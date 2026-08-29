# Citizen Service Observability Model

## Why page views are insufficient
The Department needs to know whether a citizen **completed a task**, where they failed, why they failed and which team can fix the problem.

## Privacy-safe event vocabulary

```text
portal_loaded
language_changed
service_searched
search_zero_result
service_opened
eligibility_started
eligibility_completed
consent_prompted
consent_granted
verified_document_reuse_selected
document_local_validation_passed
application_handoff_started
status_viewed
feedback_submitted
sampark_escalation_started
```

Do not place Aadhaar, Jan Aadhaar, Farmer ID, bank information, names or raw document data in analytics payloads.

## Outcome metrics
- service discovery success rate;
- zero-result search rate;
- eligibility completion rate;
- document-readiness completion;
- application handoff success;
- status self-service rate;
- cross-channel resume rate;
- median task completion time;
- citizen satisfaction;
- negative-feedback reason share;
- integration failure rate;
- bilingual parity SLA;
- accessibility defect count;
- content freshness SLA.

## Operational closed loop

```text
OBSERVE
citizen journey signal
      ↓
DIAGNOSE
search / form / document / identity / integration / content
      ↓
ASSIGN
service owner + SLA
      ↓
FIX
content / rule / UX / adapter
      ↓
VERIFY
did completion improve?
      ↓
AUDIT
receipt + before/after metric
```

This converts the challenge's “analytics dashboard for usage and feedback monitoring” into a continuous digital-service improvement system.
