import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { useTilt, usePrefersReducedMotion } from '../hooks'

/* A page section with the standard horizontal container. */
export function Section({ id, className = '', style, children, inner = true }) {
  return (
    <section id={id} className={`section ${className}`} style={style}>
      {inner ? <div className="wrap">{children}</div> : children}
    </section>
  )
}

/* Scroll-reveal powered by Motion's whileInView (respects scroll position,
   no IntersectionObserver boilerplate). `as` picks the element/tag. */
export function Reveal({ as = 'div', className = '', children, ...rest }) {
  const reduce = usePrefersReducedMotion()
  const M = motion[as] ?? motion.div
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </M>
  )
}

/* The decorative SVG wave between sections. `flip` mirrors it. */
export function WaveDivider({ flip = false, color = '#FFFFFF' }) {
  return (
    <div className="wave-divider" style={flip ? { transform: 'rotate(180deg)' } : undefined}>
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
        <path fill={color} d="M0,40 C240,75 480,5 720,30 C960,55 1200,75 1440,35 L1440,70 L0,70 Z" />
      </svg>
    </div>
  )
}

/* A glass card that tilts in 3D toward the cursor. Reusable anywhere. */
export function TiltCard({ className = '', children, max, lift }) {
  const { wrapperProps, transform } = useTilt({ max, lift })
  return (
    <div className="tilt" {...wrapperProps}>
      <div className={`glass card ${className}`} style={{ transform }}>
        {children}
      </div>
    </div>
  )
}

/* Pill button rendered as an anchor. variant: 'primary' | 'ghost'. */
export function Button({ href = '#', variant = 'primary', children, style, onClick }) {
  return (
    <a href={href} className={`btn btn-${variant}`} style={style} onClick={onClick}>
      {children}
    </a>
  )
}

/* Image with a graceful branded placeholder when no src is provided.
   Drop real photos in /public/images and pass src from site.js. */
export function Img({ src, alt = '', className = '', ratio }) {
  const style = ratio ? { aspectRatio: ratio } : undefined
  if (!src) {
    return (
      <div className={`img-placeholder ${className}`} style={style} role="img" aria-label={alt || 'Photo placeholder'}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="m3 17 5-4 4 3 3-2 6 5" />
        </svg>
        {alt && <span>{alt}</span>}
      </div>
    )
  }
  return <img src={src} alt={alt} className={`img-real ${className}`} style={style} loading="lazy" />
}

/* Counts a numeric value up from zero when it scrolls into view.
   Keeps any non-numeric prefix/suffix (e.g. "~", "%", "+"). */
export function AnimatedNumber({ text, duration = 1200 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })
  const reduce = usePrefersReducedMotion()
  const [display, setDisplay] = useState(String(text))

  useEffect(() => {
    if (!inView) return
    const m = String(text).match(/^([^0-9]*)([0-9]*\.?[0-9]+)(.*)$/)
    if (!m || reduce) { setDisplay(String(text)); return }
    const [, pre, num, suf] = m
    const target = parseFloat(num)
    const decimals = (num.split('.')[1] || '').length
    const start = performance.now()
    let raf
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(pre + (target * eased).toFixed(decimals) + suf)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, text, duration, reduce])

  return <span ref={ref}>{display}</span>
}
