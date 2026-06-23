/* GridX wordmark, rebuilt as SVG so it's crisp at any size.
   To use your real logo file instead, drop it in /public and
   replace the <svg> here with <img src="/your-logo.svg" />. */

export function GridXLogo({ height = 30, dark = true }) {
  const ink = dark ? 'var(--ink)' : '#FFFFFF'
  return (
    <svg height={height} viewBox="0 0 200 56" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="GridX">
      {/* GRID wordmark */}
      <text x="0" y="42" fontFamily="'Inter',sans-serif" fontWeight="800" fontSize="46" letterSpacing="-1" fill={ink}>GRID</text>
      {/* X built from a green up-right arrow with a bolt notch */}
      <g>
        <path d="M150 46 L168 26 L160 26 L178 6"
              stroke="var(--green)" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
        <path d="M150 6 L178 46" stroke="var(--green)" strokeWidth="9" strokeLinecap="round"/>
        {/* arrow head */}
        <path d="M171 6 L185 6 L185 20" stroke="var(--green)" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
      </g>
    </svg>
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
