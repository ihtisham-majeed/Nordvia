import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "nordviaexports.store" }],
        destination: "https://www.nordviaexports.store/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
