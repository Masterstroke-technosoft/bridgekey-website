import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: 'standalone',
  // Keeps server.js at the top of .next/standalone. Without this, Next picks up the
  // lockfile in the parent folder and nests the output under bridgekey/.
  outputFileTracingRoot: __dirname,
  // Dev server only: lets the site load from this machine's network IP as well as localhost.
  allowedDevOrigins: ['192.168.0.17'],
};

export default nextConfig;
