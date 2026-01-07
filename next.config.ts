import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.littlemanman.com",  // 添加这个
                pathname: "/**",
            },
            // 保留原有
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
            {
                protocol: "https",
                hostname: "storage.rxresu.me",
                pathname: "/**",
            },
        ],
        domains: ["assets.littlemanman.com", "littlemanman.com", "www.littlemanman.com", "storage.rxresu.me"],
    },
};

export default nextConfig;
