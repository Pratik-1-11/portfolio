/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Base path for GitHub Pages (empty if using custom domain, otherwise '/your-repo-name')
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  
  // Image optimization for static export
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com'],
  },
  
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  
  // Environment variables
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/portfolio' : ''
  }
};

// Note: Custom headers are not supported with 'output: export'
// They have been removed as they are not compatible with static export

module.exports = nextConfig;
