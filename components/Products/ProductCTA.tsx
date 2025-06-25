'use client'
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ProductCTABG from '@/assets/Product/ProductCTA-BG.png';
import { ArrowUpRight } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
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

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 10,
    },
  },
};

const ProductCTA: React.FC = () => {

  return (
    <section 
      className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-gray-100 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={ProductCTABG}
          alt="Product CTA Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={85}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-16 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333334] mb-6 sm:mb-8 tracking-tight leading-tight"
          variants={headingVariants}
        >
          Have a question? Enquire now we’re here to help
        </motion.h1>
        <motion.div
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-synergy-dark-100 text-primary  rounded-full text-base sm:text-lg hover:bg-synergy-dark-300 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none "
            aria-label="Contact us for inquiries"
          >
            Enquire Now <ArrowUpRight />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductCTA;