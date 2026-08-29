module.exports = (req, res) => {
  res.status(200).json({ prototype_truth: 'SYNTHETIC_ACTION_FIXTURE', generatedAt: new Date().toISOString(), farmerRef: 'MASKED-DEMO-4219', actions: [
    { id: 'ACT-001', type: 'APPLICATION', priority: 'HIGH', title: 'Physical verification scheduled', service: 'Farm Fencing Assistance', dueInDays: 3, authoritativeSystem: 'RajKisan' },
    { id: 'ACT-002', type: 'DOCUMENT', priority: 'HIGH', title: 'Bank proof missing', service: 'Farm Fencing Assistance', resolution: ['Raj eVault', 'DigiLocker', 'Secure upload'] },
    { id: 'ACT-003', type: 'DEADLINE', priority: 'MEDIUM', title: 'Saved scheme window closes soon', dueInDays: 6, notificationOptInRequired: true }
  ], note: 'Production actions are composed from Department-approved status, content and consented profile APIs. This endpoint is a deterministic evaluator fixture.' });
};
