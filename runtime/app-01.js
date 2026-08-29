const I={
 home:'⌂',services:'▦',farm:'◈',map:'⌖',analytics:'▥',integrations:'↔',cms:'✎',edge:'◉',shield:'◆',search:'⌕',voice:'●',track:'✓',scheme:'₹',doc:'▤',weather:'☁',market:'↗',help:'?',feedback:'♡'
};
const state={lang:'en',route:location.hash.slice(1)||'home',demo:false,demoStep:0,assistant:false,contrast:false,large:false,eligibleDone:false,auth:true};
const telemetry={events:[]};
function trackEvent(name,meta={}){telemetry.events.push({name,meta,ts:new Date().toISOString()});if(telemetry.events.length>100)telemetry.events.shift()}
function telemetryCount(){return telemetry.events.length}
const districts=[
 ['Jaipur',360,226,'ok','72.8%'],['Jodhpur',245,240,'warn','61.4%'],['Udaipur',300,350,'ok','70.1%'],['Kota',430,335,'ok','74.6%'],['Bikaner',250,135,'warn','59.8%'],['Ajmer',330,260,'ok','68.5%'],['Alwar',430,180,'ok','76.0%'],['Barmer',175,285,'bad','52.9%'],['Jaisalmer',160,180,'warn','57.3%'],['Sikar',350,160,'ok','69.4%'],['Bharatpur',465,215,'ok','73.1%'],['Bhilwara',350,315,'ok','67.5%'],['Nagaur',300,195,'warn','62.2%'],['Churu',325,125,'warn','63.7%'],['Sri Ganganagar',255,75,'ok','71.9%']
];
const schemes=[
 ['Farm Fencing Assistance','Agriculture','Open','Up to notified assistance','Land-linked farmer, eligible holding, scheme conditions'],
 ['Farm Pond / Khet Talai','Agriculture','Open','As per current scheme norms','Eligible farmer + land + technical conditions'],
 ['Drip Irrigation','Horticulture','Open','Component-based assistance','Crop, land and micro-irrigation conditions'],
 ['Sprinkler / Rain-gun','Horticulture','Open','Component-based assistance','Farmer + land + irrigation need'],
 ['Agricultural Implements','Agriculture','Open','Category-based subsidy','Eligible farmer + listed implement'],
 ['Green House / Shade Net','Horticulture','Windowed','Structure-based support','Technical + beneficiary criteria'],
 ['Soil Health Card','Agriculture','Service','Testing / advisory','Farmer or sample-linked request'],
 ['Farmer Registry ID','AgriStack','Service','Digital identity service','Identity + farmland relationship']
];
const integrations=[
 ['RajKisan','Existing transaction backend','PUBLIC REFERENCE','Deep links + adapter contract','ok'],
 ['RajSSO','Citizen / official authentication','CONTRACT READY','OIDC/SAML pattern; production onboarding required','blue'],
 ['Jan Aadhaar 2.0','Consent-based profile attributes','OFFICIAL API SPEC','OTP + signed/encrypted flow via Raj Sewa Dwaar','ok'],
 ['Raj Sewa Dwaar','Rajasthan enterprise service bus','ARCHITECTURE ALIGNED','API gateway / centralized service catalogue','blue'],
 ['Raj eVault / DigiLocker','Verified document reuse','CONTRACT READY','Fetch by consent; upload only when missing','purple'],
 ['Jan Soochna','Scheme info / eligibility / penetration','PUBLIC REFERENCE','Scheme metadata and transparency interoperability','ok'],
 ['RajDharaa','State GIS / OGC infrastructure','PUBLIC REFERENCE','Production geometry via authorised services','ok'],
 ['e-Dharti / Apna Khata','Land & girdawari context','PUBLIC REFERENCE','Read/deep-link; authorized APIs when approved','blue'],
 ['AgriStack / UFSI','Farmer Registry interoperability','ARCHITECTURE ALIGNED','Future service contracts & consent rails','purple'],
 ['BHASHINI','ASR / translation / TTS','ADAPTER READY','Voice access; rules remain authoritative','blue'],
 ['IMD Agromet','Forecast + advisories','PUBLIC / ADAPTER','District/block advisory context','ok'],
 ['AGMARKNET','Mandi price context','PUBLIC DATA','Market cards + freshness metadata','ok'],
 ['Rajasthan Sampark','Escalation / grievance','DEEP LINK','Escalate unresolved service friction','blue'],
 ['e-Mitra','Assisted citizen channel','CHANNEL READY','Same API contracts; assisted mode','purple'],
 ['FarmGraph AI','Crop/field intelligence extension','SYNTHEON PROVEN','Optional governed contextual module','purple'],
 ['SUTRA-ID Edge','Low-connectivity assisted field access','PHYSICAL PROTOTYPE','Selective voice/evidence workflow','purple']
];
const t=(en,hi)=>state.lang==='hi'?hi:en;
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
