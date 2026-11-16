import type { NextConfig } from "next";
import { ROUTES } from "./lib/routes";

const nextConfig: NextConfig = {
  experimental: { globalNotFound: true },
  // The site used to be served as static .html files: keep those URLs working.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/es", destination: "/", permanent: false },
      { source: "/es/index.html", destination: "/", permanent: true },
      ...ROUTES.filter((r) => r !== "/").map((r) => ({ source: `${r}.html`, destination: r, permanent: true })),
      { source: "/en/index.html", destination: "/en", permanent: true },
    ];
  },
};

export default nextConfig;
