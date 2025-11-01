import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allow both apex and www subdomain in production
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.littlemanman.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.assets.littlemanman.com",
        pathname: "/**",
      },
    ],
    // Optional: also list domains for compatibility across Next versions
    domains: ["assets.littlemanman.com", "www.assets.littlemanman.com"],
  },
};

export default nextConfig;
