import type { Metadata, Viewport } from 'next'
import { Inter, Newsreader } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { profile } from '@/lib/portfolio-data'

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://rayyans.vercel.app').replace(/\/$/, '')
const allowIndexing = process.env.NEXT_PUBLIC_ROBOTS_INDEX !== 'false'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const serif = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
})

const description =
  'Rayyan Sharief is a software engineer and product builder in Columbus, Ohio. He works on backend systems, fintech, data, and AI, and builds Grub and Seed. He is a Data Analytics student at The Ohio State University.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Rayyan Sharief | Software Engineer and Product Builder',
    template: '%s | Rayyan Sharief',
  },
  description,
  alternates: { canonical: '/' },
  robots: allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  openGraph: {
    type: 'website',
    siteName: 'Rayyan Sharief',
    title: 'Rayyan Sharief | Software Engineer and Product Builder',
    description,
    url: '/',
    images: [
      {
        url: '/rayyan-share-image.png',
        width: 1200,
        height: 630,
        alt: 'Rayyan Sharief, software engineer and product builder',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rayyan Sharief | Software Engineer and Product Builder',
    description,
    images: ['/rayyan-share-image.png'],
  },
  icons: {
    icon: '/rayyan-rs-icon.png',
    apple: '/rayyan-rs-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f1e8',
  width: 'device-width',
  initialScale: 1,
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: siteUrl,
  email: profile.email,
  jobTitle: 'Software Engineer',
  description,
  address: { '@type': 'PostalAddress', addressLocality: 'Columbus', addressRegion: 'OH', addressCountry: 'US' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'The Ohio State University' },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ['Backend systems', 'Financial technology', 'Data analytics', 'Artificial intelligence', 'Enterprise automation'],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <div className="container footer-inner">
            <p>
              © {new Date().getFullYear()} Rayyan Sharief. Columbus, Ohio.
            </p>
            <p>
              <a href={profile.resumePath}>Resume (PDF)</a>
              <span aria-hidden="true"> · </span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  )
}
