/* =========================================================
   GRIDX SITE CONTENT — single source of truth.
   Edit anything here without touching component code.

   IMAGES: put your real photos in /public/images and set the
   `img` paths below (e.g. img: '/images/hero.jpg'). Empty
   strings render a branded placeholder so the layout still works.
   ========================================================= */

export const brand = {
  name: 'GridX',
  tagline: 'Charge Smarter. Drive Further.',
  blurb: 'GridX builds and operates reliable EV charging infrastructure across Hyderabad — from compact home units to highway-grade ultra-fast chargers.',
  copyright: '© 2026 GridX EV. All rights reserved.',
  footerNote: 'Charge Smarter. Drive Further.',
}

export const nav = {
  links: [
    { label: 'Products', href: '#products' },
    { label: 'Why GridX', href: '#network' },
    { label: 'How it works', href: '#how' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaPrimary: { label: 'Get a charger', href: '#contact' },
  ctaGhost: { label: 'Talk to us', href: '#contact' },
}

export const hero = {
  eyebrow: 'EV charging network · Hyderabad, India',
  headline: [
    { text: 'Charge smarter.' },
    { text: 'Drive further.' },
    { text: 'Power forward.', glow: true },
  ],
  sub: 'GridX installs and runs dependable AC and DC fast chargers for homes, businesses, and highways — with live availability, transparent pricing, and round-the-clock support.',
  ctaPrimary: { label: 'Explore chargers', href: '#products' },
  ctaGhost: { label: 'How it works', href: '#how' },
  trust: 'Trusted by homes & businesses across Hyderabad',
  tariff: '₹18',
  img: '/images/gridx-hero-charging.jpg',
}

export const stats = [
  { value: '240', unit: 'kW', label: 'Peak charge speed' },
  { value: '>97%', label: 'Charger uptime' },
  { value: 'CCS2', label: 'Universal connector' },
  { value: '24/7', label: 'Support & monitoring' },
]

export const about = {
  eyebrow: 'Why GridX',
  title: 'Charging that just works, every single time.',
  paragraphs: [
    "Range anxiety isn't about the battery — it's about not knowing if the charger will be free, fast, or even working when you arrive. GridX exists to remove that doubt.",
    'We supply, install, and maintain every charger end-to-end, so you get the same dependable experience at each site: real-time availability, honest per-unit pricing, and support that actually answers.',
  ],
  points: [
    { title: 'End-to-end installation', text: 'Free site assessment, wiring, mounting, testing, and branding — handled by our certified team.' },
    { title: 'Transparent pricing', text: 'Pay per kWh. No connection charges or hidden idle penalties.' },
    { title: 'Monitored 24/7', text: 'Every charger is remotely monitored over OCPP, so faults are caught and fixed fast.' },
  ],
  img: '',
}

export const products = {
  eyebrow: 'Our products',
  title: 'A charger for every site.',
  lead: 'From overnight home charging to highway-grade ultra-fast hubs — all CCS2-ready, OCPP-compliant, and built for Indian conditions.',
  items: [
    {
      id: 'ac',
      name: 'GridX AC',
      tag: 'Home & workplace',
      power: '7.4–22',
      unit: 'kW',
      summary: 'Wall-mounted AC charging for overnight and dwell-time top-ups. Gentle on the battery, easy to install.',
      img: '/images/gridx-ac.jpg',
      highlights: ['Type 2 connector', '4 wheeler: 3–5 hrs', 'IP56, indoor/outdoor'],
      specs: {
        'Output power': '7.4 kW (1-phase), 11 / 22 kW (3-phase)',
        'Connector': 'Type 2',
        'Connectivity': 'WiFi, 4G',
        'IP rating': 'IP56',
        'Charging time (4W)': '3–5 hours',
        'Ideal use': 'Residences, workplaces, captive/overnight charging',
      },
    },
    {
      id: 'dc22',
      name: 'GridX DC 22',
      tag: 'Compact DC',
      power: '22',
      unit: 'kW',
      summary: 'Ultra-compact wall-mount DC fast charger. True plug & play for residential and small commercial sites.',
      img: '/images/gridx-dc22.jpg',
      highlights: ['CCS2 · 73 A', 'Single module, wall-mount', '>97% uptime, IP55'],
      specs: {
        'Output power': '22 kW DC, single outlet',
        'Output voltage': '150–1000 V',
        'Output current': 'CCS2: 73 A',
        'AC input': '415 VAC 3-phase (280–530 VAC range)',
        'Efficiency': 'Up to 96%',
        'Connector': 'CCS2, 7.5 m cable',
        'Authentication': 'RFID, Autocharge, Plug & Charge, App',
        'OCPP': '1.6J & 2.0.1',
        'IP rating': 'IP55, indoor & outdoor',
        'Form factor': '700 × 400 × 180 mm · ~50 kg · wall-mount',
      },
    },
    {
      id: 'dc60',
      name: 'GridX DC 60',
      tag: 'Quick stop',
      power: '60',
      unit: 'kW',
      showLogoOverlay: true, 
      summary: 'The sweet spot for retail, malls, and fleet depots — a fast top-up while you run an errand.',
      img: '/images/gridx-dc60.jpg',
      highlights: ['CCS2 dual-gun option', '10→80% in ~35 min', 'WiFi + 4G, OCPP'],
      specs: {
        'Output power': '60 kW DC (30 kW single-gun option)',
        'Output voltage': '200–1000 V',
        'Connector': 'CCS2 (single or dual gun)',
        'Connectivity': 'WiFi, 4G',
        'IP rating': 'IP54',
        'Charging time (4W)': '~45 min – 3 hrs',
        'Ideal use': 'Retail, malls, workplaces, delivery fleets',
      },
    },
    {
      id: 'ultra',
      name: 'GridX UltraFast',
      tag: 'Highway & hubs',
      power: '60–240',
      unit: 'kW',
      showLogoOverlay: true, 
      summary: 'Floor-standing ultra-fast charger, upgradable in modules to 240 kW with dynamic power sharing and a 10" HD touchscreen.',
      img: '/images/gridx-ultrafast.jpg',
      highlights: ['Up to 240 kW · dual CCS2', '10" HD touchscreen', 'Dynamic power sharing'],
      specs: {
        'Output power': 'Upgradable 60 / 80 / 90 / 120 / 160 / 180 / 240 kW',
        'Power sharing': 'Dynamic, 30–40 kW granularity (max 375 A)',
        'Output voltage': '150–1000 V',
        'Output current': 'CCS2 peak 400 A (boost), 350 A constant',
        'Outlets': 'Dual outlet',
        'Display': '10" HD anti-glare touchscreen, 1000 nits',
        'Authentication': 'RFID, Autocharge, Plug & Charge, App',
        'OCPP': '1.6J & 2.0.1',
        'IP rating': 'IP55, indoor & outdoor',
        'Form factor': '2000 × 750 × 650 mm · ~540 kg · floor-mount',
      },
    },
  ],
}

export const features = {
  eyebrow: 'What you get',
  title: 'More than a plug in the wall.',
  items: [
    { icon: 'map', title: 'Live map & availability', text: 'See open bays, charger speeds, and pricing in real time from your phone.' },
    { icon: 'card', title: 'Tap to pay, anywhere', text: 'UPI, cards, or wallet — start a session in seconds, no membership needed.' },
    { icon: 'shield', title: 'Safety built in', text: 'Surge protection, auto cut-off, and weatherproof units rated for Indian summers and monsoons.' },
    { icon: 'chat', title: 'Support that responds', text: 'A real person on call 24/7 if anything goes wrong mid-charge — not a chatbot loop.' },
    { icon: 'bolt', title: 'OCPP & future-ready', text: 'Open Charge Point Protocol 1.6J / 2.0.1 — manage and scale every charger from one dashboard.' },
    { icon: 'plug', title: 'Universal compatibility', text: 'CCS2, Type 2, and 2/3-wheeler connectors — GridX charges every kind of EV.' },
  ],
}

export const how = {
  eyebrow: 'How it works',
  title: 'From enquiry to charging in five steps.',
  steps: [
    { title: 'Free site assessment', text: 'We survey your location, power supply, and layout to recommend the right charger mix.', time: 'Day 1' },
    { title: 'Plan & pricing', text: 'A clear proposal with hardware, installation, and per-unit pricing — no surprises.', time: 'Day 2–3' },
    { title: 'Install & test', text: 'Certified technicians mount, wire, and safety-test every charger, with GridX branding.', time: '~1 week' },
    { title: 'Onboard & activate', text: 'We connect your chargers to the network and app, and walk you through the dashboard.', time: 'Go-live' },
    { title: 'Service & support', text: 'Remote monitoring, proactive maintenance, and 24/7 support keep everything running.', time: 'Ongoing' },
  ],
}

export const gallery = {
  eyebrow: 'Our work',
  title: 'Chargers, installed and running.',
  lead: 'Add your real installation photos in /public/images and list them below.',
  items: [
    { caption: 'Residential complex · Hyderabad', img: '/images/install-residential.jpg' },
    { caption: 'Workplace parking · Manikonda', img: '/images/install-manikonda.jpg' },
    { caption: 'Retail / mall bay', img: '/images/install-retail.jpg' },
    { caption: 'Highway fast-charging hub', img: '/images/install-highway.jpg' },
  ],
}

export const team = {
  eyebrow: 'The team',
  title: 'The people behind GridX.',
  lead: 'A founding team building Hyderabad’s most dependable charging network.',
  members: [
    { name: 'Ujwalsrujith', role: 'Founder', img: '' },
    { name: 'Karthik Reddy', role: 'Co-Founder', img: '' },
    { name: 'Rahul Thej', role: 'Co-Founder', img: '' },
  ],
}

export const contact = {
  eyebrow: 'Get in touch',
  title: 'Ready to charge — or to host a charger?',
  lead: 'Homes, businesses, and fleet owners looking to install GridX chargers all start right here.',
  details: [
    { icon: 'phone', key: 'Call us', value: '+91 903222 0051 · 903222 0052 · 903222 0053' },
    { icon: 'mail', key: 'Email', value: 'gridx.ev@outlook.com' },
    { icon: 'pin', key: 'Office', value: '347 OU Colony, Manikonda, Hyderabad – 08' },
    { icon: 'clock', key: 'Support hours', value: '24 / 7 · every day' },
  ],
  interests: [
    'Charger for my home',
    'Charger for my business / society',
    'Fleet / highway charging',
    'Become a charging host / partner',
    'Something else',
  ],
  formEndpoint: '',
}

export const footer = {
  columns: [
    {
      title: 'Products',
      links: [
        { label: 'GridX AC', href: '#products' },
        { label: 'GridX DC 22', href: '#products' },
        { label: 'GridX DC 60', href: '#products' },
        { label: 'GridX UltraFast', href: '#products' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Why GridX', href: '#network' },
        { label: 'How it works', href: '#how' },
        { label: 'Team', href: '#team' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
      ],
    },
  ],
  socials: [
    { icon: 'twitter', href: '#', label: 'Twitter' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
  ],
}
