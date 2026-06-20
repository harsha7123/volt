import { useReveal } from '../hooks'

/* A page section with the standard horizontal container. */
export function Section({ id, className = '', style, children, inner = true }) {
  return (
    <section id={id} className={`section ${className}`} style={style}>
      {inner ? <div className="wrap">{children}</div> : children}
    </section>
  )
}

/* Wraps children so they fade/slide in on scroll. `as` picks the tag. */
export function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
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
import { useTilt } from '../hooks'
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
