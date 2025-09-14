/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nicholasconnelly.box'],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  // Disable image optimization for static export
  experimental: {
    optimizePackageImports: ['chart.js', 'react-chartjs-2']
  }
};

export default nextConfig;