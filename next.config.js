/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Enable static export for Vercel
  output: 'standalone',
  
  // Image optimization with Vercel's Image Optimization
  images: {
    domains: ['images.unsplash.com', 'vercel.com'], // Add your image domains here
    formats: ['image/avif', 'image/webp'],
  },
  
  // Enable Webpack 5
  webpack5: true,
  
  // Add custom webpack config to handle static assets
  webpack: (config, { isServer }) => {
    // This ensures that public assets are correctly referenced
    if (!isServer) {
      config.output.publicPath = basePath ? `${basePath}/_next/` : '/_next/';
    }
    
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
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath || '',
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
