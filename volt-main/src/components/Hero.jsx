import { motion } from 'motion/react'
import { hero } from '../data/site'
import { usePrefersReducedMotion } from '../hooks'
import { Button } from './primitives'
import Hero3D from './Hero3D'

export default function Hero() {
  const reduce = usePrefersReducedMotion()
  // staggered entrance for the headline + supporting copy
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  }
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span className="eyebrow" variants={item}>{hero.eyebrow}</motion.span>
          <h1>
            {hero.headline.map((line, i) => (
              <motion.span key={i} variants={item} style={{ display: 'block' }}>
                <span className={line.glow ? 'glow' : undefined}>{line.text}</span>
              </motion.span>
            ))}
          </h1>
          <motion.p className="sub" variants={item}>{hero.sub}</motion.p>
          <motion.div className="hero-actions" variants={item}>
            <Button href={hero.ctaPrimary.href} variant="primary">{hero.ctaPrimary.label}</Button>
            <Button href={hero.ctaGhost.href} variant="ghost">{hero.ctaGhost.label}</Button>
          </motion.div>
          <motion.div className="trust" variants={item}>
            <div className="dots"><span /><span /><span /></div>
            {hero.trust}
          </motion.div>
        </motion.div>

        <Hero3D tariff={hero.tariff} img={hero.img} />
      </div>
    </section>
  )
}
