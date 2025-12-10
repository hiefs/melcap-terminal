import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "data.melcap.cc",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    staleTimes: {
      dynamic: 43200, // 12 hours
    },
  },
};

export default nextConfig;
