/* =========================================================
   SITE CONTENT — single source of truth.
   To expand the site, edit the arrays/objects below.
   No component code needs to change.
   ========================================================= */

export const brand = {
  name: 'Voltway',
  tagline: 'A fast, reliable EV charging network built for everyday drivers and the businesses that power them.',
  copyright: '© 2026 Voltway Energy Pvt. Ltd. All rights reserved.',
  footerNote: 'Made for a cleaner commute.',
}

export const nav = {
  links: [
    { label: 'Network', href: '#network' },
    { label: 'Chargers', href: '#chargers' },
    { label: 'How it works', href: '#how' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaPrimary: { label: 'Find a charger', href: '#contact' },
  ctaGhost: { label: 'Install at your site', href: '#contact' },
}

export const hero = {
  eyebrow: 'EV charging network · Hyderabad, India',
  // each line renders on its own row; mark the highlighted line with glow:true
  headline: [
    { text: 'Charge fast.' },
    { text: 'Drive further.' },
    { text: 'Flow forward.', glow: true },
  ],
  sub: 'Voltway runs a network of reliable AC and DC fast chargers across the city — with live availability, transparent pricing, and no surprise fees. Plug in, tap to start, and get back on the road.',
  ctaPrimary: { label: 'See charger types →', href: '#chargers' },
  ctaGhost: { label: 'How it works', href: '#how' },
  trust: 'Trusted by 12,000+ drivers across the city',
  // values shown on the floating glass chip; tariff is static, rest is animated
  tariff: '₹19.5',
}

export const stats = [
  { value: '150', unit: 'kW', label: 'Peak charge speed' },
  { value: '40+', label: 'Stations live' },
  { value: '99.7%', label: 'Network uptime' },
  { value: '~18', unit: 'min', label: 'Avg 10→80%' },
]

export const about = {
  eyebrow: 'Why Voltway',
  title: 'Charging that just works, every single time.',
  paragraphs: [
    "Range anxiety isn't about the battery — it's about not knowing if the charger will be free, fast, or even working when you arrive. Voltway was built to remove that doubt.",
    'We own and maintain every charger on our network, so you get the same dependable experience at each location: real-time availability, honest pricing, and support that actually answers.',
  ],
  points: [
    { title: 'Live availability', text: 'Check which bays are free before you leave — no wasted trips.' },
    { title: 'One price, no fuss', text: 'Pay per kWh. No connection charges, no idle penalties hidden in the fine print.' },
    { title: 'Maintained in-house', text: 'Every charger is monitored 24/7, so faults are fixed before you notice them.' },
  ],
}

export const chargers = {
  eyebrow: 'Charger types',
  title: 'Pick the speed that fits your stop.',
  lead: "Whether you're topping up over a coffee or grabbing a full charge on a road trip, there's a Voltway connector built for it.",
  items: [
    {
      tier: 'Everyday', name: 'AC Charging', power: '7.4–22', unit: ' kW',
      desc: "Ideal for workplaces, malls, and overnight top-ups where you're parked a while.",
      features: ['Type 2 connector', 'Full charge in 4–6 hrs', 'Gentle on battery health'],
    },
    {
      tier: 'Quick stop', name: 'DC Fast', power: '60', unit: ' kW', badge: 'Popular',
      desc: 'The sweet spot for a fast top-up while you grab a bite or run an errand.',
      features: ['CCS2 & CHAdeMO', '10→80% in ~35 min', 'Tap-to-start, no app needed'],
    },
    {
      tier: 'Road trip', name: 'Hyper DC', power: '150', unit: ' kW',
      desc: 'Our fastest chargers, on highway corridors — back to full before your coffee cools.',
      features: ['Liquid-cooled CCS2', '10→80% in ~18 min', 'Power-sharing across bays'],
    },
  ],
}

export const features = {
  eyebrow: 'What you get',
  title: 'More than a plug in the wall.',
  items: [
    { icon: 'map', title: 'Live map & availability', text: 'See open bays, charger speeds, and pricing in real time — right from your phone.' },
    { icon: 'card', title: 'Tap to pay, anywhere', text: 'UPI, cards, or wallet — start a session in seconds with no membership required.' },
    { icon: 'shield', title: 'Safety built in', text: 'Surge protection, auto cut-off, and weatherproof units rated for Indian summers and monsoons.' },
    { icon: 'chat', title: 'Support that responds', text: 'A real person on call 24/7 if anything goes wrong mid-charge — not a chatbot loop.' },
  ],
}

export const how = {
  eyebrow: 'How it works',
  title: 'From parked to charged in five steps.',
  steps: [
    { title: 'Find a station', text: 'Open the live map, filter by charger speed, and see which bays are free near you.', time: '~1 min' },
    { title: 'Plug in', text: 'Pull up, connect the right cable to your car — CCS2, CHAdeMO, or Type 2.', time: '~30 sec' },
    { title: 'Tap to start', text: 'Scan the QR or tap your card. Pick how much to charge, confirm the rate, and go.', time: '~20 sec' },
    { title: 'Charge & relax', text: "Track progress live on your phone. We'll ping you when you hit your target.", time: '18–45 min' },
    { title: 'Unplug & drive', text: 'Session ends automatically, receipt lands in your inbox. No queues, no cash.', time: 'instant' },
  ],
}

export const contact = {
  eyebrow: 'Get in touch',
  title: 'Ready to charge — or to host a charger?',
  lead: 'Tell us what you need. Drivers, fleet owners, and businesses looking to install chargers all start right here.',
  details: [
    { icon: 'phone', key: 'Call us', value: '+91 90000 00000' },
    { icon: 'mail', key: 'Email', value: 'hello@voltway.in' },
    { icon: 'pin', key: 'Head office', value: 'Hi-Tech City, Hyderabad 500081' },
    { icon: 'clock', key: 'Support hours', value: '24 / 7 · every day' },
  ],
  interests: [
    'Finding a charger near me',
    'Installing a charger at my site',
    'Fleet / business charging',
    'Something else',
  ],
  // Set this to your Formspree endpoint (https://formspree.io) to receive real submissions.
  // Leave empty ('') to use the built-in demo success message.
  formEndpoint: '',
}

export const footer = {
  columns: [
    {
      title: 'Network',
      links: [
        { label: 'Why Voltway', href: '#network' },
        { label: 'Charger types', href: '#chargers' },
        { label: 'How it works', href: '#how' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Refunds', href: '#' },
      ],
    },
  ],
  socials: [
    { icon: 'twitter', href: '#', label: 'Twitter' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
  ],
}
