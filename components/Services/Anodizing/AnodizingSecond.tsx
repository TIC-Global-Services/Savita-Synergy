'use client';

import Image from 'next/image';
import React from 'react';
import CustomDiesQuoteImg from '@/assets/Product/CustomDies/CustomDiesQuote.jpg';
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

const AnodizingSecond = () => {
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
                        Premium Anodized Aluminium Services
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-gray-600 leading-relaxed"
                        variants={textVariants}
                    >
                       At Savita Synergy, we specialize in high-quality anodized aluminium surface finishes that combine durability, design flexibility, and long-term value. As a leading anodized aluminium manufacturer in India, we serve industries with reliable, performance-driven finishes for architectural and industrial applications.
                       Through an advanced aluminium anodizing process, we create a hard, protective layer formed from the aluminium itself. This results in a surface that won’t chip, peel, rust, or fade — offering one of the most durable aluminium surface treatments available today.
                    </motion.p>
                   
                </motion.div>

                {/* Image */}
                <motion.div
                    className="relative overflow-hidden rounded-2xl shadow-lg"
                    variants={imageVariants}
                    whileHover="hover"
                >
                    <Image
                        src={CustomDiesQuoteImg}
                        alt="Custom Aluminium Extrusion Dies"
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
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

export default AnodizingSecond;