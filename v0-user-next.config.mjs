/** @type {import('next').NextConfig} */
const nextConfig = {
  // We're not using static export for Vercel deployment
  // output: 'export',
  images: {
    domains: ['placeholder.com', 'via.placeholder.com'],
    // Only needed for static export
    // unoptimized: true,
  },
};

export default nextConfig;

