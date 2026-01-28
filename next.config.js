/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/wisdom-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/wisdom-portfolio' : '',
}

module.exports = nextConfig
