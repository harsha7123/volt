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
  img: '/images/gridx-about.png',
}

export const products = {
  eyebrow: 'Our products',
  title: 'A charger for every site.',
  lead: 'From light electric two- and three-wheelers to highway-grade ultra-fast hubs — OCPP-compliant chargers built for Indian conditions, spanning every standard from Type 6/7 to Type 2 and CCS2.',
  items: [
    {
      id: 'lev',
      name: 'GridX DC 3-12',
      tag: 'Two & three wheelers',
      power: '3-12',
      unit: 'kW',
      summary: 'Compact DC fast charging built for electric scooters, bikes, and e-autos. A single unit supports both the Type 6 and Type 7 light-EV standards — delivering up to about 1% charge per minute.',
      img: '/images/gridx-dc22.jpg',
      highlights: ['Type 6 & Type 7 ports', '2 & 3 wheelers', 'Up to ~1% charge / min'],
      specs: {
        'Output power': '3 / 6 / 12 kW DC (variant-based)',
        'Connectors': 'Type 6 (IS 17017-2-6 / LEVDC) & Type 7 (LECCS)',
        'Output voltage': 'Up to 120 V DC',
        'Output current': 'Up to 120 A (Type 6) · CAN-bus handshake',
        'AC input': '230 V 1-phase (3 kW) / 400 V 3-phase (12 kW), 16 A',
        'Compatibility': 'Ather, Ola, Hero Vida, TVS, Bajaj, Matter, e-rickshaws',
        'Connectivity': 'WiFi, 4G · OCPP',
        'IP rating': 'IP54, indoor & outdoor',
        'Ideal use': 'Homes, RWAs, fleet depots, public 2W/3W charging',
      },
    },
    {
      id: 'ac',
      name: 'GridX AC',
      tag: 'Home & workplace',
      power: '3-11',
      unit: 'kW',
      summary: 'Wall-mounted Type 2 AC charging for cars — gentle on the battery and ideal for overnight or workplace top-ups. Works with every modern four-wheeler EV sold in India.',
      img: '/images/gridx-ac.jpg',
      highlights: ['Type 2 connector', '4-wheelers', 'WiFi · 4G · OCPP'],
      specs: {
        'Output power': '3.3 kW / 7.4 kW (1-phase) · 11 kW (3-phase)',
        'Connector': 'Type 2 (Mennekes), up to 32 A',
        'Compatibility': 'All modern 4-wheeler EVs in India',
        'Connectivity': 'WiFi, 4G · OCPP',
        'IP rating': 'IP56, indoor & outdoor',
        'Charging time (4W)': '4–8 hours (battery & rating dependent)',
        'Ideal use': 'Residences, workplaces, societies, overnight charging',
      },
    },
    {
      id: 'dc',
      name: 'GridX DC 60-120',
      tag: 'Quick stop',
      power: '60-120',
      unit: 'kW',
      showLogoOverlay: true,
      summary: 'The sweet spot for retail, malls, and fleet depots — a fast top-up while you run an errand. Configurable from 60 to 120 kW with a dual-gun option.',
      img: '/images/gridx-dc60.jpg',
      highlights: ['CCS2 · dual-gun option', '10→80% in ~35–45 min', 'Configurable 30 kW steps'],
      specs: {
        'Output power': '60–120 kW DC, configurable in 30 kW steps',
        'Output voltage': '150–1000 V DC',
        'Output current': 'CCS2: up to 250 A per outlet',
        'Connector': 'CCS2 (single or dual gun)',
        'Outlets': 'Single or dual outlet',
        'Authentication': 'RFID, App, UPI / card',
        'OCPP': '1.6J',
        'IP rating': 'IP54, indoor & outdoor',
        'Ideal use': 'Retail, malls, fleet depots, workplaces, societies',
        'Form factor': '~1850 × 650 × 630 mm · floor-mount',
      },
    },
    {
      id: 'ultra',
      name: 'GridX UltraFast',
      tag: 'Highway & hubs',
      power: '180-240',
      unit: 'kW',
      showLogoOverlay: true,
      summary: 'Floor-standing ultra-fast charger, upgradable in modules to 240 kW with dynamic power sharing and a 10" HD touchscreen.',
      img: '/images/gridx-ultrafast.jpg',
      highlights: ['Up to 240 kW · dual CCS2', '10" HD touchscreen', 'Dynamic power sharing'],
      specs: {
        'Output power': 'Upgradable 180 / 200 / 240 kW (modular)',
        'Output voltage': '150–1000 V DC',
        'Output current': 'CCS2: up to 400 A per outlet',
        'Connector': 'Dual CCS2',
        'Outlets': 'Dual outlet · dynamic power sharing',
        'Authentication': 'RFID, Autocharge, Plug & Charge, App',
        'OCPP': '1.6J & 2.0.1',
        'IP rating': 'IP55, indoor & outdoor',
        'Ideal use': 'Highways, charging hubs, fleet & bus depots',
        'Form factor': '~2000 × 750 × 650 mm · ~540 kg · floor-mount',
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
    { caption: 'Upcoming · NH44 Hyderabad–Bangalore, Beechupally', img: '/images/upcoming-beechupally.jpeg' },
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
  formEndpoint: 'https://script.google.com/macros/s/AKfycby7KxdSicShGVtX6O9tuBqitaPQ2eH0vsUvZFsApC5oHnWfssFYk_AkJ0DuqwKrS0D_Qg/exec',
}

export const footer = {
  columns: [
    {
      title: 'Products',
      links: [
        { label: 'GridX DC 3-12kW', href: '#products' },
        { label: 'GridX AC 3-11kW', href: '#products' },
        { label: 'GridX DC 60-120kW', href: '#products' },
        { label: 'GridX DC 180-240kW', href: '#products' },
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
    { icon: 'twitter', href: 'https://x.com/Gridx_ev_charge', label: 'Twitter' },
    { icon: 'instagram', href: 'https://www.instagram.com/gridx.evcharge', label: 'Instagram' },
    { icon: 'linkedin', href: 'https://www.linkedin.com/in/gridx-evcharge-530753419/', label: 'LinkedIn' },
  ],
}