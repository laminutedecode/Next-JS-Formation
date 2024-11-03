import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:"images.unsplash.com",
        pathname: "**"
      }
    ],
    // deviceSizes: [320, 420, 768, 1024, 1200],
    // imageSizes: [16, 32, 48, 64, 96],
    // formats: ["image/webp","image/avif"],
    // minimumCacheTTL: 60,
    // disableStaticImages: false,
  }
};

export default nextConfig;
