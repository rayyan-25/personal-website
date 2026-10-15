/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Each route becomes <route>/index.html so any static host serves it directly.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
