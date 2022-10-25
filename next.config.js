/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['a.thumbs.redditmedia.com', 'b.thumbs.redditmedia.com']
  }
}

module.exports = nextConfig
