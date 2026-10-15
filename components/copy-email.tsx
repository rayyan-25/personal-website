'use client'

import { useState } from 'react'

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setStatus('copied')
    } catch {
      setStatus('failed')
    }
    window.setTimeout(() => setStatus('idle'), 2200)
  }

  return (
    <div className="copy-email">
      <button type="button" className="button button-secondary" onClick={copy}>
        Copy email address
      </button>
      <span role="status" aria-live="polite" className="copy-status">
        {status === 'copied' && 'Email address copied.'}
        {status === 'failed' && `Copy failed. Email is ${email}.`}
      </span>
    </div>
  )
}
