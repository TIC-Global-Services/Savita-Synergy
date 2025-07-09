'use client';

import React from 'react';
import Die1 from '@/assets/Product/CustomDies/Icons/die1.png';
import Die2 from '@/assets/Product/CustomDies/Icons/die2.png';
import Die3 from '@/assets/Product/CustomDies/Icons/die3.png';
import Die4 from '@/assets/Product/CustomDies/Icons/die4.png';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const ApplicationOfBillets = () => {
  const DieContent = [
    {
      icon: Die1,
      title: 'Custom aluminium extrusion profiles',
    },
    {
      icon: Die2,
      title: 'Seamless pipes and tubes',
    },
    {
      icon: Die3,
      title: 'Industrial and automotive forgings',
    },
    {
      icon: Die4,
      title: 'Machinery and engineering components',
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
    visible: (index) => ({
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
    <div className="py-12 px-4 sm:px-6 lg:px-20">
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Applications of  <span className="text-lighter">Aluminum Billets</span>
        </h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {DieContent.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start text-start gap-6 p-4 border border-gray-200 rounded-2xl hover:bg-[#00501E40]"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            custom={index}
          >
            <div className="bg-synergy-dark-300 rounded-full p-3 mb-4 w-16 h-16 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.title}
                className="object-contain w-full h-full"
                width={40}
                height={40}
              />
            </div>
            <p className="text-lg font-medium text-gray-800">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationOfBillets;