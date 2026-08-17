// Central content store — edit text/numbers here without touching components.

export const CONTACT = {
  phone: '97545 50107',
  phoneHref: '+919754550107',
  altPhone: '75091 97509',
  altPhoneHref: '+917509197509',
  whatsapp: 'https://wa.me/919754550107',
  email: 'vikasbhalekar01@gmail.com',
  address: 'No. 2768, Near Gopur Square, Sector-E, Sudama Nagar, Indore – 452009, Madhya Pradesh',
  addressShort: 'No. 2768, Near Gopur Square, Sector-E, Sudama Nagar, Indore, MP 452009',
  hours: 'Mon – Sun, 9:00 AM – 10:00 PM',
};

export const WEB3FORMS_ACCESS_KEY = 'ff175e40-a982-4330-9272-12035dd878de';

export const SERVICES = [
  {
    id: 'cctv',
    cat: 'cctv',
    title: 'CCTV Solutions',
    desc: 'Complete surveillance systems for homes, shops and factories, from a single door camera to a 64-channel commercial setup.',
    features: ['Installation & site survey', 'AMC & scheduled maintenance', 'Camera & DVR/NVR repair', 'Remote mobile monitoring', 'DVR/NVR setup & configuration'],
    icon: 'cctv',
  },
  {
    id: 'wiring',
    cat: 'wiring',
    title: 'Electrical Wiring',
    desc: 'Safe, code-compliant wiring for new builds and renovations, with clean concealed runs and load-balanced panels.',
    features: ['Home & apartment wiring', 'Commercial & office wiring', 'Concealed wiring', 'Industrial wiring', 'Cable management'],
    icon: 'wiring',
  },
  {
    id: 'lighting',
    cat: 'lighting',
    title: 'Lighting Solutions',
    desc: 'Energy-efficient lighting design that makes spaces feel bigger, safer and more premium — indoors and out.',
    features: ['Indoor & outdoor lighting', 'Decorative & garden lighting', 'Commercial lighting', 'LED retrofits', 'Facade & landscape lighting'],
    icon: 'lighting',
  },
  {
    id: 'maintenance',
    cat: 'maintenance',
    title: 'Electrical Maintenance',
    desc: 'Fast, safe fault-finding and repair for existing installations — from a tripping MCB to a full panel upgrade.',
    features: ['Electrical repair', 'Fault finding', 'Panel installation', 'Power distribution', 'Emergency call-outs'],
    icon: 'maintenance',
  },
];

export const SERVICE_FILTERS = [
  { key: 'all', label: 'All Services' },
  { key: 'cctv', label: 'CCTV' },
  { key: 'wiring', label: 'Wiring' },
  { key: 'lighting', label: 'Lighting' },
  { key: 'maintenance', label: 'Maintenance' },
];

export const WHY_US = [
  'Experienced Technicians',
  'Genuine Products',
  'Affordable Pricing',
  'Fast Installation',
  'Warranty Support',
  'Professional Service',
  'Clean Wiring',
  'Emergency Support',
];

export const PROCESS_STEPS = [
  { num: '01', title: 'Book Service', desc: 'Call, WhatsApp or fill the online form.' },
  { num: '02', title: 'Site Visit', desc: 'Our technician inspects the site, free of cost.' },
  { num: '03', title: 'Quotation', desc: 'You receive a clear, itemised quote in writing.' },
  { num: '04', title: 'Installation', desc: 'Work is carried out cleanly, on the agreed date.' },
  { num: '05', title: 'Testing', desc: 'Every point and camera is tested before we leave.' },
  { num: '06', title: 'Support', desc: 'Warranty and AMC support after installation.' },
];

export const PORTFOLIO_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'cctv', label: 'CCTV' },
  { key: 'lighting', label: 'Lighting' },
  { key: 'wiring', label: 'Wiring' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'residential', label: 'Residential' },
];

export const PORTFOLIO_ITEMS = [
  { cats: ['cctv', 'residential'], icon: 'cctv', tag: 'CCTV · Residential', title: 'Home Security Setup, Sudama Nagar' },
  { cats: ['lighting', 'commercial'], icon: 'lighting', tag: 'Lighting · Commercial', title: 'Showroom Facade Lighting' },
  { cats: ['wiring', 'commercial'], icon: 'wiring', tag: 'Wiring · Commercial', title: 'Office Concealed Wiring, Vijay Nagar' },
  { cats: ['cctv', 'commercial'], icon: 'cctv', tag: 'CCTV · Commercial', title: '32-Camera Warehouse Setup' },
  { cats: ['lighting', 'residential'], icon: 'lighting', tag: 'Lighting · Residential', title: 'Garden & Patio Lighting' },
  { cats: ['wiring', 'residential'], icon: 'wiring', tag: 'Wiring · Residential', title: 'Full Home Rewiring, E Sector' },
];

export const TESTIMONIALS = [
  { text: "Rudra Electronics rewired our entire shop and set up 8 CCTV cameras in under three days. Everything was tested in front of us before they left.", name: 'Rajesh Patidar', role: 'Shop Owner, Sarafa Bazaar' },
  { text: "Called them for an emergency panel fault at 9pm and someone was at our factory within the hour. Genuinely reliable people.", name: 'Sunita Rathore', role: 'Facility Manager, Industrial Area' },
  { text: "The outdoor lighting they designed for our society completely changed how the compound feels at night. Clean cabling, no mess left behind.", name: 'Amit Joshi', role: 'Secretary, Apartment Society' },
  { text: "We've used their AMC for our office CCTV for two years now. Every visit is on schedule and they explain exactly what was checked.", name: 'Priya Deshmukh', role: 'Office Admin, Vijay Nagar' },
];

export const FAQS = [
  { q: 'How much does CCTV installation cost in Indore?', a: "Cost depends on camera type (analog vs IP), resolution, cabling distance and number of channels. Most homes start from a 4-camera setup; use our quotation tool above for an instant estimate, or book a free site visit for an exact price." },
  { q: 'Do you provide AMC (Annual Maintenance Contract) for CCTV?', a: 'Yes. Our CCTV AMC covers scheduled cleaning, cable checks, DVR/NVR health checks and priority repair support throughout the contract period.' },
  { q: "What's the difference between a DVR and an NVR?", a: "A DVR (Digital Video Recorder) works with analog cameras over coaxial cable, while an NVR (Network Video Recorder) works with IP cameras over Ethernet and generally supports higher resolutions. We'll recommend the right one based on your site." },
  { q: 'Can I view my CCTV cameras remotely on my phone?', a: 'Yes, every system we install is configured with a mobile app for remote viewing, so you can check your cameras from anywhere with an internet connection.' },
  { q: 'How long does a typical CCTV installation take?', a: 'A standard 4–8 camera home or shop setup is usually completed in a single day. Larger commercial or industrial installations may take 2–5 days depending on scope.' },
  { q: 'Do you repair CCTV systems installed by other companies?', a: 'Yes, we repair and service CCTV systems and DVR/NVR units regardless of who originally installed them.' },
  { q: 'Is concealed wiring safe for older buildings?', a: 'Concealed wiring is safe when installed with proper conduit, correctly rated cable and circuit breakers. We inspect existing load capacity before any concealed wiring project to make sure it\u2019s suitable for your building.' },
  { q: 'Do you handle commercial and industrial wiring projects?', a: 'Yes, we handle wiring for offices, warehouses, factories, hospitals and event venues, including load calculation, panel design and power distribution.' },
  { q: 'How do I know if my building needs a wiring upgrade?', a: 'Frequent tripping, flickering lights, warm switchboards, or a building over 15–20 years old are common signs. We offer a free electrical inspection to assess this.' },
  { q: 'What lighting options do you install?', a: 'We install indoor, outdoor, decorative, garden and commercial LED lighting, including facade lighting and energy-efficient retrofits for existing fixtures.' },
  { q: 'Do you offer same-day electrical repair?', a: 'Yes, we offer emergency electrical repair support for urgent faults, including after standard hours where possible.' },
  { q: 'What warranty do you provide on installations?', a: "All installation work carries a service warranty, and hardware (cameras, DVRs, switches) is covered by the respective manufacturer's warranty, which we help you claim if needed." },
  { q: 'Is the initial site visit really free?', a: 'Yes. Our technician visits your site, understands the requirement and shares a written quotation at no cost and no obligation to proceed.' },
  { q: 'Do you provide services outside Indore city?', a: 'We primarily serve Indore and surrounding areas. For nearby towns, contact us to confirm service availability and any travel charges.' },
  { q: 'How do I pay for the service?', a: 'We accept cash, UPI and bank transfer. Payment is typically split between an advance to book materials and a balance on completion, as agreed in your written quotation.' },
];
