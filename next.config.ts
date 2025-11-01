import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "littlemanman.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "your-cloudflare-bucket.example.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
