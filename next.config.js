// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // 👈 izinkan semua hostname HTTPS
            },
        ],
    },
};

module.exports = nextConfig;