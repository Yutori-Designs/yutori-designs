import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
  return [
    { source: "/events", destination: "/", permanent: true },
    { source: "/team-members", destination: "/our-team", permanent: true },
  ];
},
  /* config options here */
};

export default nextConfig;
