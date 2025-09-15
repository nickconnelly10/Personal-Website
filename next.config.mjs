/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nicholasconnelly.box'],
    unoptimized: true,
    qualities: [75, 85, 100] // Fix the Next.js 16 warning
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  // Disable image optimization for static export
  experimental: {
    optimizePackageImports: ['chart.js', 'react-chartjs-2']
  }
};

export default nextConfig;