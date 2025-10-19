/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nickconnelly.com'],
    unoptimized: true,
    qualities: [75, 85, 100] // Fix the Next.js 16 warning
  },
  trailingSlash: true,
  experimental: {}
};

export default nextConfig;