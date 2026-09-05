import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.14"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "betonhouse.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;