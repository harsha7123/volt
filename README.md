# Voltway — EV Charging Website (React + Vite)

A single-page EV charging site, built to be **edited and expanded without touching component code**.
Light-blue / glass / water aesthetic with an interactive 3D charging station.

## Run it

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build
```

Deploy the contents of `/dist` to any static host (Netlify, Vercel, Cloudflare Pages, S3, etc.).

## Where to change things

Almost everything lives in **`src/data/site.js`** — one file, plain objects and arrays:

- **Brand name, tagline, copyright** → `brand`
- **Nav links + buttons** → `nav`
- **Hero headline / subtext / CTAs** → `hero`
- **Stat numbers** → `stats`
- **About copy + bullet points** → `about`
- **Charger types** → `chargers.items` (add an object to add a card)
- **Feature tiles** → `features.items`
- **"How it works" steps** → `how.steps` (numbering is automatic)
- **Contact details + form options** → `contact`
- **Footer columns + socials** → `footer`

Adding a charger type is literally adding one object to `chargers.items`. The grid,
3D tilt, badge, and reveal animation all apply automatically.

## Theming

All colors, radius, shadows, and the brand gradient are CSS variables in
**`src/styles/tokens.css`**. Change `--blue` / `--blue-deep` (and the gradients)
to rebrand the entire site in one place.

## Make the contact form actually send

The form works front-end-only by default (shows a success message). To receive real
submissions, create a free form at https://formspree.io, then set the endpoint in
`src/data/site.js`:

```js
export const contact = {
  // ...
  formEndpoint: 'https://formspree.io/f/your-id',
}
```

The form posts JSON to that endpoint and shows the same success state on completion.

## Project structure

```
src/
  data/site.js            # ALL content lives here
  styles/
    tokens.css            # theme variables (colors, radius, shadows)
    global.css            # component styles
  hooks/index.js          # useReveal, useTilt, useChargeMeter, usePrefersReducedMotion
  components/
    icons.jsx             # SVG icon set + name->component map
    primitives.jsx        # Section, Reveal, WaveDivider, TiltCard, Button (reusable)
    Charger3D.jsx         # interactive 3D charging station
    Navbar.jsx
    Hero.jsx
    sections.jsx          # StatsBand, About, Features, HowItWorks
    Chargers.jsx
    Contact.jsx
    Footer.jsx
  App.jsx                 # composes the page
```

## Notes

- Animations respect the OS "reduce motion" setting.
- The 3D charger tilt is a desktop pointer effect; on touch devices it shows a
  pleasant fixed angle instead.
- Brand name, phone, email, address, and all stats are **placeholders** — replace
  them in `src/data/site.js`.
