import { team, gallery } from '../data/site'
import { Reveal, Img } from './primitives'

export function Team() {
  return (
    <section className="section" id="team">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">{team.eyebrow}</span>
          <h2 className="section-title">{team.title}</h2>
          <p className="section-lead">{team.lead}</p>
        </Reveal>
        <div className="team-grid">
          {team.members.map((m, i) => (
            <Reveal className="team-card glass" key={i}>
              <Img src={m.img} alt={m.name} ratio="1 / 1" className="team-photo" />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Gallery() {
  return (
    <section className="section how-band" style={{ paddingTop: 0 }} id="gallery">
      <div className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{gallery.eyebrow}</span>
            <h2 className="section-title">{gallery.title}</h2>
          </Reveal>
          <div className="gallery-grid">
            {gallery.items.map((g, i) => (
              <Reveal className="gallery-item" key={i}>
                <Img src={g.img} alt={g.caption} ratio="4 / 3" />
                <span className="gallery-cap">{g.caption}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
