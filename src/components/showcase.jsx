import {  gallery } from '../data/site'
import { Reveal, Img } from './primitives'



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
