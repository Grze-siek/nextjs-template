/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io', 'images.unsplash.com', 'plus.unsplash.com'],
  },
};
