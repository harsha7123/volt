/* Small, dependency-free SVG icons. Add new ones here and reference by name. */

export const Bolt = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>
)
export const Check = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" {...p}><path d="M5 13l4 4L19 7"/></svg>
)
export const Map = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 2v20M2 12h20"/></svg>
)
export const Card = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
)
export const Shield = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)
export const Chat = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
)
export const Phone = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)
export const Mail = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
)
export const Pin = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
)
export const Clock = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
)
export const Menu = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>
)
export const Twitter = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18 2h3l-7 8 8 12h-6l-5-7-5 7H1l8-9L1 2h6l4 6 7-6z"/></svg>
)
export const Instagram = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
)
export const LinkedIn = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM2 9h4v12H2zM9 9h4v2c.6-1 2-2 4-2 3 0 4 2 4 5v7h-4v-6c0-1.5-.5-2.5-2-2.5S13 14 13 15.5V21H9z"/></svg>
)
export const BoltIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>
)
export const Plug = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0zM12 17v5"/></svg>
)

/* name -> component map, so data files can reference icons by string */
export const ICONS = {
  map: Map, card: Card, shield: Shield, chat: Chat,
  phone: Phone, mail: Mail, pin: Pin, clock: Clock,
  twitter: Twitter, instagram: Instagram, linkedin: LinkedIn,
  bolt: BoltIcon, plug: Plug,
}
