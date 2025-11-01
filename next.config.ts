import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allow both apex and www subdomain in production
    remotePatterns: [
      {
        protocol: "https",
        hostname: "littlemanman.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.littlemanman.com",
        pathname: "/**",
      },
    ],
    // Optional: also list domains for compatibility across Next versions
    domains: ["littlemanman.com", "www.littlemanman.com"],
  },
};

export default nextConfig;
