import type { NextConfig } from "next";
import path from "node:path";

// Set NEXT_PUBLIC_BASE_PATH=/AlexanderReinbach when building for the subpath
// deployment under syncmode.io/AlexanderReinbach. Leave unset for root deploys.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export: produces a fully self-contained out/ folder.
  // No Node.js runtime required at the host — nginx can serve it directly.
  output: "export",

  // trailingSlash gives every route its own index.html under that folder,
  // which is what static file servers (nginx) expect.
  trailingSlash: true,

  basePath,
  assetPrefix: basePath || undefined,

  // next/image without the Vercel image-optimizer needs explicit unoptimized
  // mode for static export. We only use raster icons + inline SVGs, no
  // next/image components, but the option must be set for the export to pass.
  images: {
    unoptimized: true,
  },

  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
