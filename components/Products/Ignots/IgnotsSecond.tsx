'use client';

import Image from 'next/image';
import React from 'react';
import IgnotsImg from '@/assets/Product/Ignots/Ingots.jpg';
import { motion, type Variants } from 'framer-motion';

// Animation variants for text with staggered children
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Animation variants for image with scale effect
const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: 'easeOut', delay: 0.4 },
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.3, ease: 'easeInOut' },
    },
};

const IgnotsSecond = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Text Content */}
                <motion.div className="space-y-8" variants={containerVariants}>
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-800"
                        variants={textVariants}
                    >
                        Premium Aluminium Ingots & Billets
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-gray-600 leading-relaxed"
                        variants={textVariants}
                    >
                        At Savita Synergy, we deliver high-quality aluminium ingots and billets, crafted with precision to serve as the foundation for diverse aluminium products. As an integrated manufacturer, we uphold stringent quality control, ensuring consistent composition and industrial-grade performance. Our products are optimized for extrusion, casting, rolling, and forging, meeting international standards for purity and process stability in every batch.
                    </motion.p>
                   
                </motion.div>

                {/* Image */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl shadow-lg"
                    variants={imageVariants}
                    whileHover="hover"
                >
                    <Image
                        src={IgnotsImg}
                        alt="Ignots Dies"
                        className="w-full aspect-[16/12] h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                        width={600}
                        height={400}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default IgnotsSecond;