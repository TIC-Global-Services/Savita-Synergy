'use client';

import Image from 'next/image';
import React from 'react';
import WeightAccuracy from '@/assets/Product/Scraps/weight-accuracy.jpg';
import Purity from '@/assets/Product/Scraps/purity.jpg';
import ZeroMess from '@/assets/Product/Scraps/zero-mess.jpg';
import { motion, type Variants } from 'framer-motion';

// Animation variants for container with staggered children
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

// Animation variants for text elements
const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

// Animation variants for images with hover effect
const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.4,
        },
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

// Animation variants for overlay text
const overlayTextVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
            delay: 0.2,
        },
    },
};

const Sourcing = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {/* Text Content */}
                <motion.div className="space-y-6 lg:pr-12" variants={containerVariants}>
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 tracking-tight"
                        variants={textVariants}
                    >
                        Sustainable Sourcing for Smarter Aluminium Manufacturing
                    </motion.h2>
                    <motion.p
                        className="text-base md:text-lg text-gray-600 leading-relaxed"
                        variants={textVariants}
                    >
                        At Savita Synergy, we source and supply high-quality aluminium scrap that supports eco-friendly and cost-effective aluminium production. Our scrap materials are carefully selected, sorted, and processed to meet the needs of industrial remelting, recycling, and secondary manufacturing. As part of our commitment to sustainable aluminium solutions, our aluminium scrap plays a critical role in creating recycled aluminium ingots, billets, and extrusion profiles without compromising on quality or performance.
                    </motion.p>
                </motion.div>

                {/* Image Gallery */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    variants={containerVariants}
                >
                    {[
                        { src: WeightAccuracy, alt: "Weight Accuracy Extrusion Dies", highlight: '99%', content: 'Metal Weight Accuracy' },
                        { src: Purity, alt: "High Purity Aluminium Scrap", highlight: 'Guaranteed', content: 'Purity' },
                        { src: ZeroMess, alt: "Zero Mess Processing", highlight: 'Zero Mess', content: 'Zero Moisture' },
                    ].map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-2xl shadow-lg group"
                            variants={imageVariants}
                            whileHover="hover"
                            role="img"
                            aria-label={image.alt}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-[70dvh] object-cover transition-transform duration-500"
                                width={600}
                                height={400}
                                priority={index === 0}
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 flex flex-col items-start justify-end p-4 z-50"
                                initial="hidden"
                                animate="visible" // Explicitly trigger the visible state
                                variants={overlayTextVariants}
                            >
                                <div className=' bg-white w-full flex flex-col  p-6 rounded-2xl'>
                                    <motion.span
                                        className="text-lg font-bold text-lighter drop-shadow-md"
                                        variants={overlayTextVariants}
                                    >
                                        {image.highlight}
                                    </motion.span>
                                    <motion.span
                                        className="text-lg font-medium text-black drop-shadow-md"
                                        variants={overlayTextVariants}
                                    >
                                        {image.content}
                                    </motion.span>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Sourcing;