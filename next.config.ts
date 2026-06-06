import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/eldercare-templates",
  assetPrefix: "/eldercare-templates/",
};

export default nextConfig;
