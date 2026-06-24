/* GridX wordmark, rebuilt as SVG so it's crisp at any size.
   To use your real logo file instead, drop it in /public and
   replace the <svg> here with <img src="/your-logo.svg" />. */

export function GridXLogo({ height = 30 }) {
  return (
    <img
      src="/gridx-logo.png"
      alt="GridX"
      style={{ height: `${height}px`, width: 'auto', display: 'block' }}
    />
  )
}

/* Compact mark (just the green X arrow-bolt) for tight spaces / favicons. */
export function GridXMark({ size = 30 }) {
  return (
    <span
      style={{
        width: size, height: size, borderRadius: 9, display: 'grid', placeItems: 'center',
        background: 'var(--grad-deep)', boxShadow: '0 6px 16px -6px var(--green)',
      }}
    >
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
        <path d="M5 5 L14 14 M14 5 L7 12 L11 12 L4 19" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 5 L16 5 L16 10" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}
