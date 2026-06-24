import { useState } from 'react'
import { useChargeMeter, usePrefersReducedMotion } from '../hooks'

const WaveSurface = () => (
  <div className="surface">
    <svg viewBox="0 0 120 18" preserveAspectRatio="none" fill="#5E97D6">
      <path d="M0 9 C 20 1, 40 17, 60 9 S 100 1, 120 9 V18 H0 Z" />
    </svg>
    <svg viewBox="0 0 120 18" preserveAspectRatio="none" fill="#5E97D6">
      <path d="M0 9 C 20 1, 40 17, 60 9 S 100 1, 120 9 V18 H0 Z" />
    </svg>
  </div>
)

/* Self-contained 3D charger: floats, tilts to the cursor, and shows a live
   charge readout on its screen. Pass `tariff` for the price chip. */
export default function Charger3D({ tariff = '₹19.5' }) {
  const reduce = usePrefersReducedMotion()
  const { pct, kwh, rate, eta } = useChargeMeter()
  const [tilt, setTilt] = useState({ rx: 9, ry: -26 })

  const onMove = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setTilt({ rx: 9 - py * 16, ry: -26 + px * 24 })
  }
  const onLeave = () => setTilt({ rx: 9, ry: -26 })

  return (
    <div className="scene" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="ground-shadow" />
      <div className="stage" style={{ '--rx': `${tilt.rx}deg`, '--ry': `${tilt.ry}deg` }}>
        <div className="cuboid">
          <div className="face f-back" />
          <div className="face f-left" />
          <div className="face f-right" />
          <div className="face f-top" />
          <div className="face f-front" />
          <div className="holster" />
          <div className="screen">
            <div className="scr-top">
              <span className="bay">Bay 04 · DC</span>
              <span className="dot" />
            </div>
            <div className="water" style={{ height: `${Math.max(8, pct)}%` }}>
              <WaveSurface />
            </div>
            <div className="scr-read">
              <div className="pct">{pct}<span>%</span></div>
              <div className="kwh">{kwh} kWh</div>
            </div>
          </div>
          <div className="base" />
        </div>
      </div>

      <div className="glass chip">
        <div className="row">
          <div className="b"><div className="v">{rate} kW</div><div className="k">Rate</div></div>
          <div className="b"><div className="v">{eta}</div><div className="k">To 80%</div></div>
          <div className="b"><div className="v">{tariff}</div><div className="k">/ kWh</div></div>
        </div>
      </div>
    </div>
  )
}
