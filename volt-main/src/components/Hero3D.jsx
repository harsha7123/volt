import { useChargeMeter } from '../hooks'

export default function Hero3D({ tariff = '₹19.5', img }) {
  const { pct, kwh, rate, eta } = useChargeMeter()

  return (
    <div className="scene scene-3d">
      <img
        src={img}
        alt="EV charging at a GridX charging station"
        className="hero-photo"
        loading="eager"
      />

      <div className="glass chip chip-pct">
        <div className="pct-big">{pct}<span>%</span></div>
        <div className="pct-sub">{kwh} kWh · Bay 04</div>
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
