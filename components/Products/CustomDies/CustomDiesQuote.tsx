'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CustomDiesQuoteImg from '@/assets/Product/CustomDies/CustomDiesQuote.jpg';
import { motion, type Variants } from 'framer-motion';

const CustomDiesQuote = () => {
  // Animation variants for text and button
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  // Animation variants for image
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' } },
  };

  // Animation variants for button
  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4, ease: 'easeOut' } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-20 bg-gray-50 mx-auto">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div
          className="text-lg md:text-xl space-y-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <p>
            At Savita Synergy, we design and manufacture custom aluminium extrusion dies tailored to meet the exact specifications of our clients. As part of our comprehensive aluminium solutions, our in-house die development capabilities ensure precision, consistency, and flexibility in the production of complex aluminium extrusion profiles.
          </p>
          <p>
            Whether it’s a standard shape or a highly intricate industrial profile, our custom dies are built using high-grade tools to achieve tight tolerances and extended die life, enabling smooth, accurate, and repeatable extrusion.
          </p>
          <div className="flex justify-start">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
            >
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-lighter text-white text-lg font-semibold rounded-full hover:bg-primary transition-colors duration-300"
              >
                Get Quotation
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <Image
            src={CustomDiesQuoteImg}
            alt="Custom Aluminium Extrusion Dies"
            className="rounded-2xl w-full h-auto object-cover"
            width={600}
            height={400}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CustomDiesQuote;