/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio' : '';

const nextConfig = {
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  
  // Disable image optimization since we're using static export
  images: {
    unoptimized: true,
    path: basePath ? `${basePath}/_next/image` : '/_next/image',
  },
  
  // Ensure static files are properly linked
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  reactStrictMode: true,
  
  // Add custom webpack config to handle static assets
  webpack: (config) => {
    // This ensures that public assets are correctly referenced
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]',
        publicPath: basePath ? `${basePath}/_next/` : '/_next/'
      }
    });
    
    return config;
  },
  
  // Add custom headers for GitHub Pages
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
