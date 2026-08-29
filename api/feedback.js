module.exports = (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
  const allowed = ['useful','not_useful','document_issue','login_issue','could_not_find_scheme','other'];
  const category = allowed.includes(req.body?.category) ? req.body.category : 'other';
  res.status(201).json({ accepted: true, receipt: `RKO-FB-${Date.now().toString(36).toUpperCase()}`, category, prototype_truth: 'DETERMINISTIC_SANDBOX', message: 'Demo feedback receipt created. No personal data is persisted by this evaluator endpoint.' });
};
