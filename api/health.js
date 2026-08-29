module.exports = (req, res) => {
  res.status(200).json({
    service: 'rajkisan-one-evaluator-api',
    status: 'ok',
    version: '0.9.0-mvp',
    prototype_truth: 'DETERMINISTIC_SANDBOX',
    authoritative_government_connection: false,
    timestamp: new Date().toISOString()
  });
};
