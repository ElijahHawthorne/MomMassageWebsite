/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // static site, deployable on any free static host
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
