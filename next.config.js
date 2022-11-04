/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org', 'links.papareact.com', 'jsonkeeper.com'],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoieHplcHAiLCJhIjoiY2xhMGpuODh1MDB1OTNvbDgxZHN3ODQ1MiJ9.0m9KN3Ku0_gefm3ugpyPvQ'
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
