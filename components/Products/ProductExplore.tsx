'use client';

import React from 'react';
import Aluminium from '@/assets/Product/aluminum-scrap.png';
import Extrusion from '@/assets/Product/extrusion-profiles.png';
import CustomDies from '@/assets/Product/custom-dies.png';
import Ignots from '@/assets/Product/Ignots.png';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const ProductExplore = () => {
  const Products = [
    {
      name: 'Extrusions & Profiles',
      slug: 'extrusions-and-profiles',
      img: Extrusion,
    },
    {
      name: 'Ingots & Billets',
      slug: 'ingots-and-billets',
      img: Ignots,
    },
    {
      name: 'Aluminum Scrap',
      slug: 'aluminum-scrap',
      img: Aluminium,
    },
    {
      name: 'Custom Dies',
      slug: 'custom-dies',
      img: CustomDies,
    },
  ];

  // Animation variants for the product cards
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="px-4 md:px-16 lg:px-20 py-8 sm:py-20 ">
      <div className="text-center mb-10">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Aluminium Product Manufacturer and Supplier
        </motion.h1>
        <motion.div
          className="text-lg max-w-5xl mx-auto py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>
            Savita Synergy is a leading aluminium product manufacturer in India, serving diverse industries with excellence for over a decade. As a trusted aluminium supplier, we offer a wide range of precision-engineered solutions, crafted to meet the highest quality standards. Our offerings include custom aluminium extrusion, aluminium profiles, and components, such as bars, rods, pipes, tubes, and sheets — all designed for durability and performance in both structural and decorative applications.
          </p>
          <p className="mt-4">
            With a strong focus on reliability and innovation, Savita Synergy is committed to delivering corrosion-resistant aluminium solutions that are also eco-friendly and built for long-term use. Whether for industrial, architectural, or commercial needs, we are your trusted partner for sustainable aluminium products in India.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {Products.map((product, index) => (
          <motion.div
            key={index}
            data-index={index}
            className="relative overflow-hidden rounded-2xl"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            custom={index}
          >
            {/* Product Card */}
            <Link href={`/products/${product.slug}`} className="block w-full h-full bg-synergy-dark-300 rounded-2xl p-4">
              <Image
                src={product.img}
                alt={`${product.name} product image`}
                className="object-cover aspect-square w-full rounded-xl"
                priority={index === 0}
              />
              <div className="flex items-center gap-2 mt-4 text-primary">
                <h2 className=" text-xl font-semibold">{product.name}</h2>
                <ArrowRightIcon className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductExplore;