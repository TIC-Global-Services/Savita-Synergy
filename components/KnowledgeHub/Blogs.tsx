'use client'
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Aluminum from '@/assets/KnowledgeHub/Blogs/aluminum.png';
import Company from '@/assets/KnowledgeHub/Blogs/company.png';
import Market from '@/assets/KnowledgeHub/Blogs/market.png';
import Expert from '@/assets/KnowledgeHub/Blogs/expert.png';
import blogData from '@/data/BlogData';

interface BlogItem {
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

const Blogs: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

 

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className=" mx-auto">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-8 "
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Blog & Insights
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
            Explore insights, expertise, and updates from our industry experts.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          {/* 1-Column Large Blog Item */}
          <motion.div
            variants={itemVariants}
            className="  overflow-hidden cursor-pointer"
            onHoverStart={() => setHoveredId(blogData[0].id)}
            onHoverEnd={() => setHoveredId(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Link href={`blogs/${blogData[0].slug}`} className="block">
              <div className="relative h-64 sm:h-80 ">
                <Image
                  src={blogData[0].blogImage}
                  alt={blogData[0].title}
                  fill
                  className="object-cover transition-all duration-300 rounded-2xl "
                  sizes="100vw"
                  quality={80}
                  priority
                />
                <div
                  className="absolute inset-0 bg-black/0 hover:bg-black/20 rounded-2xl  transition-opacity duration-300"
                  aria-hidden="true"
                />
              </div>
              <div className=' py-2'>
                <h2 className="text-gray-900 text-sm sm:text-lg">
                  {blogData[0].title}
                </h2>
              </div>
            </Link>
          </motion.div>

          {/* 3-Column Smaller Blog Items */}
          <div className="grid grid-cols-3 gap-4">
            {blogData.slice(1).map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className=" overflow-hidden cursor-pointer"
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Link href={`blogs/${item.slug}`} className="block">
                  <div className="relative h-36 sm:h-48">
                    <Image
                      src={item.blogImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-300 rounded-2xl"
                      sizes="(max-width: 640px) 33vw, 33vw"
                      quality={80}
                    />
                    <div
                      className="absolute inset-0 bg-black/0 rounded-2xl hover:bg-black/20 transition-opacity duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="py-2">
                    <h2 className="text-gray-900 text-xs sm:text-base">
                      {item.title}
                    </h2>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;