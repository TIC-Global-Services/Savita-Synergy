'use client'
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import MarketInsights from '@/assets/KnowledgeHub/IndustryNews/Market.png';
import CompanyNews from '@/assets/KnowledgeHub/IndustryNews/CompanyNews.png';
import Policy from '@/assets/KnowledgeHub/IndustryNews/Policy.png';

interface NewsItem {
  id: string;
  title: string;
  img: StaticImageData;
  link: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const HubIndustryNews: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const industryNews: NewsItem[] = [
    {
      id: 'market-insights',
      title: 'Market Insights & Pricing Trends',
      img: MarketInsights,
      link: '/knowledge-hub/market-insights',
    },
    {
      id: 'company-news',
      title: 'Company News & Milestones',
      img: CompanyNews,
      link: '/knowledge-hub/company-news',
    },
    {
      id: 'policy-updates',
      title: 'Policy & Sustainability Updates',
      img: Policy,
      link: '/knowledge-hub/policy-updates',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-8 "
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Industry News
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
            Updates on market trends, industry shifts, and company-specific news.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-3 gap-4"
        >
          {industryNews.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className=" overflow-hidden cursor-pointer"
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Link href={item.link} className="block">
                <div className="relative h-48 sm:h-64">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-300 rounded-2xl"
                    sizes="(max-width: 640px) 33vw, 33vw"
                    quality={80}
                    priority={item.id === 'market-insights'}
                  />
                  <div
                    className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-opacity rounded-2xl duration-300"
                    aria-hidden="true"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-gray-900 text-xs sm:text-lg  text-center">
                    {item.title}
                  </h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HubIndustryNews;