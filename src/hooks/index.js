import { useEffect, useRef, useState } from 'react'

/* Respects the OS "reduce motion" setting. */
export function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduce(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return reduce
}

/* Adds an "in" class when the element scrolls into view (one-shot). */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return ref
}

/* Pointer-driven 3D tilt. Returns props to spread on the wrapper plus the
   transform string to apply to the tilting child. */
export function useTilt({ max = 9, lift = 6 } = {}) {
  const reduce = usePrefersReducedMotion()
  const [transform, setTransform] = useState('')
  const onMouseMove = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setTransform(`rotateY(${px * max}deg) rotateX(${-py * max}deg) translateY(-${lift}px)`)
  }
  const onMouseLeave = () => setTransform('')
  return { wrapperProps: { onMouseMove, onMouseLeave }, transform }
}

/* Simulates a live charging session. Returns the readouts the UI displays. */
export function useChargeMeter() {
  const reduce = usePrefersReducedMotion()
  const [state, setState] = useState({ pct: 0, kwh: '0.0', rate: 0, eta: '--' })

  useEffect(() => {
    if (reduce) {
      setState({ pct: 72, kwh: '28.4', rate: 120, eta: '6 min' })
      return
    }
    let p = 8
    const tick = () => {
      p += Math.random() * 3 + 0.6
      if (p > 100) p = 8
      const rate = p < 75 ? 145 - p * 0.4 : Math.max(20, 145 - (p - 50))
      const kwh = (p * 0.42).toFixed(1)
      const mins = p < 80 ? Math.max(1, Math.round((80 - p) / 4)) : 0
      setState({
        pct: Math.round(p),
        kwh,
        rate: Math.round(rate),
        eta: mins > 0 ? `${mins} min` : 'done',
      })
    }
    tick()
    const id = setInterval(tick, 900)
    return () => clearInterval(id)
  }, [reduce])

  return state
}
