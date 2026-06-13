/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

// When deploying to a project page (repo name != username.github.io),
// set NEXT_PUBLIC_BASE_PATH to the repo name, e.g. "pavan-joshi-dev".
// When deploying to a user page (repo renamed to username.github.io),
// leave it unset — basePath stays empty and the site lives at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH}`
  : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",          // static HTML export required for GitHub Pages
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,       // Next/image optimization needs a server; Pages is static
  },
};

export default nextConfig;
