/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['a.thumbs.redditmedia.com', 'b.thumbs.redditmedia.com']
  }
}

module.exports = nextConfig
