import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // iOS fetches this file (no extension) to learn that joinonby.com/open links belong to the app;
  // it has to be served as JSON.
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
