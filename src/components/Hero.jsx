import { hero } from '../data/site'
import { Button } from './primitives'
import Charger3D from './Charger3D'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1>
            {hero.headline.map((line, i) => (
              <span key={i}>
                <span className={line.glow ? 'glow' : undefined}>{line.text}</span>
                {i < hero.headline.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="sub">{hero.sub}</p>
          <div className="hero-actions">
            <Button href={hero.ctaPrimary.href} variant="primary">{hero.ctaPrimary.label}</Button>
            <Button href={hero.ctaGhost.href} variant="ghost">{hero.ctaGhost.label}</Button>
          </div>
          <div className="trust">
            <div className="dots"><span /><span /><span /></div>
            {hero.trust}
          </div>
        </div>

        <Charger3D tariff={hero.tariff} />
      </div>
    </section>
  )
}
