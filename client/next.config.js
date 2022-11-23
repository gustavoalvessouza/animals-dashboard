/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.petz.com.br"],
  },
};

module.exports = nextConfig;
