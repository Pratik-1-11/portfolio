/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  distDir: 'docs',  // export folder for GitHub Pages

  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? '/portfolio/'
      : '',

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
