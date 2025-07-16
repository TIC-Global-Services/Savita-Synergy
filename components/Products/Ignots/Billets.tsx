'use client';

import Image from 'next/image';
import React from 'react';
import BilletsImg from '@/assets/Product/Ignots/Billets.jpg';
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

const Billets = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
            <motion.div
                className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial="hidden"
                animate="visible"
                variants={containerVariants}


            >

                  {/* Image */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl shadow-lg"
                    variants={imageVariants}
                    whileHover="hover"
                >
                    <Image
                        src={BilletsImg}
                        alt="Custom Aluminium Extrusion Dies"
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                        width={600}
                        height={400}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Text Content */}
                <motion.div className="space-y-8" variants={containerVariants}>
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-gray-800"
                        variants={textVariants}
                    >
                        Aluminium Billets
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-gray-600 leading-relaxed"
                        variants={textVariants}
                    >
                        Our aluminium billets are precision-cast for superior extrusion performance. Typically cast in 6000-series alloys, they are extrusion-ready and optimized for mechanical strength, smooth surface finish, and dimensional accuracy.
                    </motion.p>
                   
                </motion.div>

              
            </motion.div>
        </div>
    );
};

export default Billets;