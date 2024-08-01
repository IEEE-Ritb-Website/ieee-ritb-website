/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'site.ieee.org',
      'avatars.githubusercontent.com',
      'preview.ibb.co',
      'image.ibb.co',
      'i.ibb.co',
      'github.com',
      'raw.githubusercontent.com',
      'drive.google.com',
    ],
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    }
    return config
  },
}

module.exports = nextConfig
