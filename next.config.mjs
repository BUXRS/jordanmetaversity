/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // The following are commented out as they're not compatible with static export
    // rewrites: async () => { ... },
    // redirects: async () => { ... },
};

export default nextConfig;