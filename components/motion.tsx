'use client'
import { useEffect } from 'react'
export function Motion() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches) return
    const animations = new Set<Animation>()
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const animation = entry.target.animate(
          [{ transform: 'translateY(24px)', opacity: 0.4 }, { transform: 'translateY(0)', opacity: 1 }],
          { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)' },
        )
        animations.add(animation)
        animation.onfinish = () => animations.delete(animation)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.08 })
    document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element))
    const art = document.querySelector<HTMLElement>('[data-tilt]')
    const fine = window.matchMedia('(pointer: fine)')
    const move = (event: PointerEvent) => {
      if (!art || reduced.matches || !fine.matches) return
      const rect = art.getBoundingClientRect()
      art.style.setProperty('--tilt-x', `${((event.clientY - rect.top) / rect.height - 0.5) * -12}deg`)
      art.style.setProperty('--tilt-y', `${((event.clientX - rect.left) / rect.width - 0.5) * 12}deg`)
    }
    const reset = () => {
      art?.style.setProperty('--tilt-x', '0deg')
      art?.style.setProperty('--tilt-y', '0deg')
    }
    const stop = () => {
      if (!reduced.matches) return
      observer.disconnect()
      animations.forEach(animation => animation.cancel())
      reset()
    }
    art?.addEventListener('pointermove', move)
    art?.addEventListener('pointerleave', reset)
    reduced.addEventListener('change', stop)
    return () => {
      observer.disconnect()
      animations.forEach(animation => animation.cancel())
      art?.removeEventListener('pointermove', move)
      art?.removeEventListener('pointerleave', reset)
      reduced.removeEventListener('change', stop)
    }
  }, [])
  return null
}
