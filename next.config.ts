import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: 'standalone',
  // Dev server only: lets the site load from this machine's network IP as well as localhost.
  allowedDevOrigins: ['192.168.0.17'],
};

export default nextConfig;
