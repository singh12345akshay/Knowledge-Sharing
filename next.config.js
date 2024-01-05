/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.pixelstalk.net',
            port: '',
            // pathname: '/account123/**',
          },
        ],
      },
}

module.exports = nextConfig
