import { chargers } from '../data/site'
import { Reveal, TiltCard } from './primitives'
import { Check } from './icons'

export default function Chargers() {
  return (
    <section className="section" id="chargers" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">{chargers.eyebrow}</span>
          <h2 className="section-title">{chargers.title}</h2>
          <p className="section-lead">{chargers.lead}</p>
        </Reveal>

        <div className="cards">
          {chargers.items.map((c, i) => (
            <Reveal key={i}>
              <TiltCard>
                {c.badge && <span className="badge">{c.badge}</span>}
                <span className="tier">{c.tier}</span>
                <h3>{c.name}</h3>
                <div className="power">{c.power}<span>{c.unit}</span></div>
                <p className="desc">{c.desc}</p>
                <ul>
                  {c.features.map((f, j) => (
                    <li key={j}><span className="ic"><Check width="18" height="18" /></span> {f}</li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
