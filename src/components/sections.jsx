import { stats, about, features, how } from '../data/site'
import { Reveal, WaveDivider, AnimatedNumber,Img } from './primitives'
import { Bolt, Check, ICONS } from './icons'

export function StatsBand() {
  return (
    <div className="stats-band">
      <WaveDivider />
      <div className="wrap">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="num"><AnimatedNumber text={s.value} />{s.unit && <small>{s.unit}</small>}</div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <WaveDivider flip />
    </div>
  )
}

export function About() {
  return (
    <section className="section" id="network">
      <div className="wrap about-grid">
        <Reveal className="about-copy">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="section-title">{about.title}</h2>
          {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="about-points">
            {about.points.map((pt, i) => (
              <div className="row" key={i}>
                <span className="ic"><Check width="18" height="18" /></span>
                <div><strong>{pt.title}</strong><p>{pt.text}</p></div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="about-visual">
          <Img src={about.img} alt="EV charging at a GridX station" ratio="4 / 3" className="about-img" />
        </Reveal>
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">{features.eyebrow}</span>
          <h2 className="section-title">{features.title}</h2>
        </Reveal>
        <div className="why-grid">
          {features.items.map((f, i) => {
            const Icon = ICONS[f.icon]
            return (
              <Reveal className="glass feature" key={i}>
                <span className="ic">{Icon && <Icon width="22" height="22" />}</span>
                <div><h3>{f.title}</h3><p>{f.text}</p></div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section className="how-band" id="how">
      <WaveDivider />
      <div className="section" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{how.eyebrow}</span>
            <h2 className="section-title">{how.title}</h2>
          </Reveal>
          <div className="steps">
            {how.steps.map((s, i) => (
              <Reveal className="step" key={i}>
                <div className="n">{String(i + 1).padStart(2, '0')}</div>
                <div className="body"><h3>{s.title}</h3><p>{s.text}</p></div>
                <div className="time">{s.time}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <WaveDivider flip />
    </section>
  )
}
