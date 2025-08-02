import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output configuration for static site generation
  output: 'export',

  // Image optimization configuration
  images: {

    unoptimized: true,

    // Optimize images for specific device sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Common breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Thumbnail sizes

    // Minimum cache duration for optimized images (in seconds)
    minimumCacheTTL: 60 * 60 * 24, // Cache for 24 hours

    // Disable static image imports for dynamic blog images
    disableStaticImages: false, // Keep enabled unless you face issues
  },

  // Optional: Enable trailing slashes for SEO-friendly URLs
  trailingSlash: true,

  // Optional: Configure base path if deploying to a subdirectory
  // basePath: "/subpath",

  // Optional: Enable compression for smaller asset sizes
  compress: true,

  
};

export default nextConfig;