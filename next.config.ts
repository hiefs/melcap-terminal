import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["supabase.owlbear.cc"],
  },
  experimental: {
    staleTimes: {
      dynamic: 43200, // 12 hours
    },
  },
};

export default nextConfig;
