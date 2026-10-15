'use client'

import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [light, setLight] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme') === 'light'
      document.documentElement.classList.toggle('light', saved)
      setLight(saved)
    } catch { /* Dark remains the default when storage is unavailable. */ }
  }, [])

  function toggle() {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle('light', next)
    try { localStorage.setItem('portfolio-theme', next ? 'light' : 'dark') } catch {}
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}>
      <svg className="theme-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>
      <svg className="theme-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z"/></svg>
    </button>
  )
}
