'use client';

import Image from 'next/image';
import React from 'react';
import CustomDiesQuoteImg from '@/assets/Product/CustomDies/CustomDiesQuote.jpg';
import { motion, type Variants } from 'framer-motion';

const IgnotsSecond = () => {
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


    return (
        <div className="py-12 px-4 sm:px-6 lg:px-20 bg-gray-50 mx-auto">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <motion.div
                    className="text-lg md:text-2xl space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <p>
                        At Savita Synergy, we offer high-quality aluminium ingots and billets that form the foundation of a wide range of aluminium products. As an integrated aluminium manufacturer, we ensure that each ingot and billet is produced with strict quality control, consistent composition, and industrial-grade performance making them ideal for extrusion, casting, rolling, and forging processes.Our aluminium casting capabilities are aligned with international standards ensuring both purity and process stability in every batch.
                    </p>
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

export default IgnotsSecond;