import type { MetadataRoute } from 'next'

// Static export: this file is written to out/sitemap.xml at build time.
export const dynamic = 'force-static'

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://rayyans.vercel.app').replace(/\/$/, '')

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/work/grub/', '/work/seed/']
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
