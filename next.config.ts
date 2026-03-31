import type { NextConfig } from "next";

const repoName = "bujoai_landing";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
    ],
  },
};

export default nextConfig;
