import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com']
  }
};

export default nextConfig;
