const RULE = {
  schemeId: 'RK-SVC-001',
  title: 'Farm Fencing Assistance',
  ruleVersion: 'demo-2026.08.29',
  authority: 'DEMONSTRATION_RULE_ONLY',
  sourceState: 'PUBLIC_REFERENCE_PLUS_SYNTHETIC_RULE_FIXTURE'
};
module.exports = (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
  const body = req.body || {};
  const district = typeof body.district === 'string' ? body.district : '';
  const landholdingHa = typeof body.landholdingHa === 'number' ? body.landholdingHa : NaN;
  const farmerRegistryLinked = body.farmerRegistryLinked === true;
  const schemeId = typeof body.schemeId === 'string' ? body.schemeId : RULE.schemeId;
  if (schemeId !== RULE.schemeId) return res.status(200).json({ ...RULE, schemeId, result: 'NEEDS_REVIEW', checks: [{ id: 'rule_available', passed: false }], statutoryDecision: false, receipt: `RKO-DEMO-${Date.now().toString(36).toUpperCase()}`, message: 'No configured demonstration rule for this service. Verify official criteria.' });
  const checks = [
    ['rajasthan_context', ['Jaipur','Jodhpur','Udaipur','Barmer','Banswara'].includes(district)],
    ['eligible_district_demo_rule', ['Jaipur','Jodhpur','Udaipur'].includes(district)],
    ['landholding_demo_rule', Number.isFinite(landholdingHa) && landholdingHa > 0 && landholdingHa <= 10],
    ['farmer_registry_linked', farmerRegistryLinked],
    ['service_window_demo_rule', true],
    ['minimum_required_attributes_present', Boolean(district) && Number.isFinite(landholdingHa) && typeof body.farmerRegistryLinked === 'boolean']
  ].map(([id, passed]) => ({ id, passed }));
  const potentiallyEligible = checks.every(x => x.passed);
  const receipt = `RKO-DEMO-${Date.now().toString(36).toUpperCase()}`;
  res.status(200).json({ ...RULE, result: potentiallyEligible ? 'POTENTIALLY_ELIGIBLE' : 'NEEDS_REVIEW', statutoryDecision: false, checks, receipt, message: 'Final eligibility, sanction and payment remain with the authoritative Department workflow.' });
};
