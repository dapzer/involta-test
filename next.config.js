/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/1',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['www.mos.ru', "icdn.lenta.ru"]
  },
}

module.exports = nextConfig
