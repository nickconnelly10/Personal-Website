/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nicholasconnelly.box'],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'dist'
};

export default nextConfig;
