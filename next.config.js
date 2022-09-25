/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source',
    });

    return config;
  },
  distDir: 'build',
  target: 'serverless',
};

module.exports = nextConfig;
