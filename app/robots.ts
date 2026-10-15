import type { MetadataRoute } from 'next'

// Static export: this file is written to out/robots.txt at build time.
export const dynamic = 'force-static'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rayyans.vercel.app'
const allowIndexing = process.env.NEXT_PUBLIC_ROBOTS_INDEX !== 'false'

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
