'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export function MobileMenu({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const details = ref.current
    if (!details) return

    const close = () => {
      details.open = false
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && details.open) {
        close()
        details.querySelector('summary')?.focus()
      }
    }
    const onPointer = (event: PointerEvent) => {
      if (details.open && !details.contains(event.target as Node)) close()
    }
    const onClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('a')) close()
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    details.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      details.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <details ref={ref} className="nav-mobile">
      <summary>Menu</summary>
      {children}
    </details>
  )
}
