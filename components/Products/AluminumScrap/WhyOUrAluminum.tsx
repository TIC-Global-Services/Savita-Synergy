'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';

// Import icon images
import Icon1 from '@/assets/Product/Scraps/Icons/verified-networks.svg';
import Icon2 from '@/assets/Product/Scraps/Icons/99.svg';
import Icon3 from '@/assets/Product/Scraps/Icons/mdi_recycle.svg';
import Icon4 from '@/assets/Product/Scraps/Icons/Product packeging.svg';
import Icon5 from '@/assets/Product/Scraps/Icons/ph_truck.svg';
import Icon6 from '@/assets/Product/Scraps/Icons/Recycle.svg';

const WhyOUrAluminum = () => {
  const DieContent = [
    {
      icon: Icon1,
      title: 'Sourced from reliable, verified networks',
      alt: 'Icon representing reliable sourcing networks',
    },
    {
      icon: Icon2,
      title: 'Clean Scrap. Accurate Weight. No Dust. No Moisture. No Oil.',
      alt: 'Icon representing clean and accurate aluminium scrap',
    },
    {
      icon: Icon3,
      title: 'Ready for remelting, refining, or alloying',
      alt: 'Icon representing remelting-ready aluminium scrap',
    },
    {
      icon: Icon4,
      title: 'Available in bulk and custom quantities',
      alt: 'Icon representing bulk aluminium quantities',
    },
    {
      icon: Icon5,
      title: 'Enables cost savings and lower carbon footprint',
      alt: 'Icon representing cost savings and eco-friendliness',
    },
    {
      icon: Icon6,
      title: 'Supports green manufacturing and circular economy goals',
      alt: 'Icon representing green manufacturing',
    },
  ];

  // Animation variants for the title
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Animation variants for the capability cards
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2, ease: 'easeOut' },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-20 bg-white">
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}
      >
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          Why Choose Our Aluminium{' '}
          <span className="text-lighter">Scrap Supply?</span>
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {DieContent.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start text-start gap-4 p-6 bg-[#F2F8F4]  rounded-2xl "
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
            custom={index}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.alt}
                className="object-contain w-full h-full"
                width={32}
                height={32}
                priority={index === 0}
              />
            </div>
            <p className="text-base font-medium text-gray-700">{item.title}</p>
          </motion.div>
        ))}
      </div>
      <div>
        <p className=' text-lg max-w-7xl mx-auto text-center my-10'>Our aluminium scrap supply service supports manufacturers, remelters, foundries, and recyclers looking for dependable raw material input. With a deep understanding of the aluminium lifecycle, Savita Synergy helps close the loop  turning scrap into strength.</p>
      </div>
    </section>
  );
};

export default WhyOUrAluminum;