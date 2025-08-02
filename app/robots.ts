// app/robots.ts
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/about', '/products', '/products/*', '/services', '/services/*', '/by-industry', '/knowledge-hub', '/blogs/*', '/contact'],
      disallow: ['/admin', '/private/*'], // Block sensitive areas
    },
    sitemap: 'https://www.savitasynergy.com/sitemap.xml',
  };
}