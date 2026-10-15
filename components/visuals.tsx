export function Arrow({ className = '' }: { className?: string }) {
  return <svg className={`arrow ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
export function Asterisk({ className = '' }: { className?: string }) {
  return <svg className={`asterisk ${className}`} viewBox="0 0 100 100" fill="none" aria-hidden="true"><path d="M50 4v92M4 50h92M17.5 17.5l65 65m-65 0 65-65" stroke="currentColor" strokeWidth="10" /></svg>
}
export function OrbitalSculpture() {
  const paths = Array.from({ length: 40 }, (_, i) => {
    const u = i / 40 * Math.PI * 2
    const points = Array.from({ length: 81 }, (_, j) => {
      const v = j / 80 * Math.PI * 2
      const x = (112 + 48 * Math.cos(v)) * Math.cos(u)
      const y = (112 + 48 * Math.cos(v)) * Math.sin(u)
      const z = 48 * Math.sin(v)
      const ry = y * Math.cos(0.9) - z * Math.sin(0.9)
      const rz = y * Math.sin(0.9) + z * Math.cos(0.9)
      const rx = x * Math.cos(-0.5) + rz * Math.sin(-0.5)
      const px = rx * Math.cos(-0.32) - ry * Math.sin(-0.32)
      const py = rx * Math.sin(-0.32) + ry * Math.cos(-0.32)
      return `${j === 0 ? 'M' : 'L'}${(220 + px).toFixed(1)},${(220 + py).toFixed(1)}`
    }).join(' ')
    return <path key={i} d={points} stroke="currentColor" strokeWidth="1.15" opacity={0.36 + (Math.sin(u) + 1) * 0.25} />
  })
  return <svg className="orbital-sculpture" viewBox="0 0 440 440" fill="none" aria-hidden="true"><circle className="orbit-track" cx="220" cy="220" r="207" stroke="currentColor" opacity=".11" strokeDasharray="2 8" /><g className="sculpture-core">{paths}</g><path d="M220 5v12m0 406v12M5 220h12m406 0h12" stroke="currentColor" opacity=".6" /><circle cx="220" cy="13" r="3" fill="currentColor" /></svg>
}
