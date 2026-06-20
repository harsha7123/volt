import { useEffect, useState } from 'react'
import { brand, nav } from '../data/site'
import { Bolt, Menu } from './icons'
import { Button } from './primitives'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="logo">
          <span className="bolt"><Bolt /></span>
          {brand.name}
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-cta">
          <Button href={nav.ctaGhost.href} variant="ghost">{nav.ctaGhost.label}</Button>
          <Button href={nav.ctaPrimary.href} variant="primary">{nav.ctaPrimary.label}</Button>
          <button className="menu-toggle" aria-label="Open menu" onClick={() => setOpen((o) => !o)}>
            <Menu width="26" height="26" />
          </button>
        </div>
      </div>
    </header>
  )
}
