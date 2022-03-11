/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com", "images.unsplash.com", "cdn.shopify.com"],
  },
};

module.exports = nextConfig;
