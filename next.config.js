/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'firebasestorage.googleapis.com', // Allow Firebase Storage images
      'lh3.googleusercontent.com',      // Allow Google user profile images
      'alwarmart.com'                   // Allow your domain images
    ],
    // Optional: Configure image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Other Next.js config options...
};

module.exports = nextConfig; 