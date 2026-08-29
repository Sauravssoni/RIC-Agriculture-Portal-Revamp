const SERVICES = [
  { id:'RK-SVC-001', title:'Farm Fencing Assistance', aliases:['fencing','tarbandi','तारबंदी'], department:'Agriculture', handoff:'RAJKISAN' },
  { id:'RK-SVC-002', title:'Farm Pond / Khet Talai', aliases:['farm pond','khet talai','खेत तलाई'], department:'Agriculture', handoff:'RAJKISAN' },
  { id:'RK-SVC-003', title:'Drip Irrigation', aliases:['drip','micro irrigation','ड्रिप'], department:'Horticulture', handoff:'RAJKISAN' },
  { id:'RK-SVC-004', title:'Soil Health Card', aliases:['soil test','shc','मृदा'], department:'Agriculture', handoff:'RAJKISAN' },
  { id:'RK-SVC-005', title:'Farmer Registry ID', aliases:['farmer id','registry','फार्मर आईडी'], department:'AgriStack', handoff:'OFFICIAL_DEEP_LINK' }
];

module.exports = (req, res) => {
  const requestUrl = new URL(req.url || '/api/service-search', 'https://rajkisan-one.invalid');
  const q = String(requestUrl.searchParams.get('q') || '').trim().toLowerCase();
  const results = !q
    ? SERVICES
    : SERVICES.filter(s => [s.title, s.department, ...s.aliases].join(' ').toLowerCase().includes(q));

  res.status(200).json({
    prototype_truth: 'DETERMINISTIC_PUBLIC_SERVICE_FIXTURE',
    query: q,
    results,
    zeroResult: results.length === 0,
    suggestion: results.length
      ? null
      : 'Route unmatched query to analytics + content-owner queue; do not silently hallucinate a service.'
  });
};
