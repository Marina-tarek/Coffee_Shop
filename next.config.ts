import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // أي دومين
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
