/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["image.tmdb.org", "localhost"],
  },
};
