import { brand, footer } from '../data/site'
import { Bolt, ICONS } from './icons'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <span className="bolt"><Bolt /></span>
              {brand.name}
            </a>
            <p>{brand.tagline}</p>
            <div className="socials">
              {footer.socials.map((s) => {
                const Icon = ICONS[s.icon]
                return (
                  <a key={s.label} href={s.href} aria-label={s.label}>
                    {Icon && <Icon width="18" height="18" />}
                  </a>
                )
              })}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>{brand.copyright}</span>
          <span>{brand.footerNote}</span>
        </div>
      </div>
    </footer>
  )
}
