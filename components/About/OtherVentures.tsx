'use client'
import Link from 'next/link';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const OtherVentures = () => {
  const VentureLinks = [
    { title: 'Tours & Travels', href: '#' },
    { title: 'Karigari By Savita', href: '#' },
    { title: 'Travel Planning', href: '#' },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        duration: 0.7,
      },
    },
  };

  const linkHoverVariants: Variants = {
    hover: {
      scale: 1.05,
      y: -6,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 20,
      },
    },
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-20 ">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="max-w-5xl mx-auto"
        aria-labelledby="ventures-heading"
      >
        <motion.h1
          id="ventures-heading"
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12 text-center tracking-tight"
        >
          Other Ventures
        </motion.h1>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 "
        >
          {VentureLinks.map((btn) => (
            <motion.div
              key={btn.title}
              variants={itemVariants}
              whileHover="hover"
              className="flex"
            >
              <Link
                href={btn.href}
                className="flex-1 bg-lighter text-white font-semibold text-lg sm:text-xl py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center flex items-center justify-center"
                aria-label={`Explore ${btn.title}`}
              >
                <motion.span variants={linkHoverVariants}>{btn.title}</motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default OtherVentures;