import { useState } from 'react'
import { products } from '../data/site'
import { Reveal, Img } from './primitives'
import { Check } from './icons'

export default function Products() {
  const [active, setActive] = useState(0)
  const p = products.items[active]

  return (
    <section className="section" id="products">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">{products.eyebrow}</span>
          <h2 className="section-title">{products.title}</h2>
          <p className="section-lead">{products.lead}</p>
        </Reveal>

        {/* product selector tabs */}
        <div className="product-tabs" role="tablist">
          {products.items.map((it, i) => (
            <button
              key={it.id}
              role="tab"
              aria-selected={i === active}
              className={`product-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="pt-name">{it.name}</span>
              <span className="pt-power">{it.power}<small> {it.unit}</small></span>
            </button>
          ))}
        </div>

        {/* active product detail */}
        <div className="product-detail glass" key={p.id}>
          <div className="pd-media">
            <Img src={p.img} alt={`${p.name} charger`} ratio="4 / 5" className="pd-img" />
            {p.showLogoOverlay && (
              <div className="pd-logo-overlay">
                <img src="/gridx-logo.png" alt="GridX" />
              </div>
            )}
          </div>

          <div className="pd-body">
            <h3>{p.name}</h3>
            <div className="pd-power">{p.power}<span> {p.unit}</span></div>
            <p className="pd-summary">{p.summary}</p>

            <div className="pd-highlights">
              {p.highlights.map((h) => (
                <span className="pd-pill" key={h}><Check width="15" height="15" /> {h}</span>
              ))}
            </div>

            <div className="pd-specs">
              {Object.entries(p.specs).map(([k, v]) => (
                <div className="pd-spec" key={k}>
                  <span className="pd-k">{k}</span>
                  <span className="pd-v">{v}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary" style={{ marginTop: 8 }}>Enquire about {p.name}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
