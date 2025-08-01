import { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://www.yourdomain.com', 
  generateRobotsTxt: true, // Automatically generate robots.txt
  sitemapSize: 7000, // Max URLs per sitemap file
  changefreq: 'daily',
  priority: 0.7, 
  exclude: ['/private/*', '/admin/*'],

  // Robots.txt additional rules
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/private/*', '/admin/*'] },
    ],
  },

  transform: async (config, path) => {
    return {
      loc: path, 
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(), 
    };
  },
};

export default config;