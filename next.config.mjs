/** Sitio estático Boss.Technology servido desde /public.
 *  Las páginas viven en public/ como HTML; "/" sirve public/index.html. */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
      ],
    };
  },
  async redirects() {
    // las páginas usan rutas relativas: /en y /es deben llevar a su index real
    return [
      { source: "/en", destination: "/en/index.html", permanent: false },
      { source: "/es", destination: "/", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};
export default nextConfig;
