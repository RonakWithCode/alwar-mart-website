/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'alwarmart.in'
      }
    ],
  },
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

// Use CommonJS export
module.exports = nextConfig;