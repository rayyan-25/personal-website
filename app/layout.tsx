import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Newsreader } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const newsreader = Newsreader({ subsets: ['latin'], variable: '--font-newsreader' })

export const metadata: Metadata = {
  title: 'Rayyan Sharief — Software Engineer & Data Systems',
  description: 'Personal portfolio of Rayyan Sharief, a software engineer and data analytics student at The Ohio State University.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#050505' }, { media: '(prefers-color-scheme: light)', color: '#f2f2ed' }],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${newsreader.variable}`}><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
