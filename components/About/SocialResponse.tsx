'use client'
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import DogIcon from '@/assets/SVGIcons/Dog.svg';
import GirlIcon from '@/assets/SVGIcons/Girl.svg';

const SocialResponse = () => {
    const ResponsibilityContent = [
        {
            icon: DogIcon,
            title: 'Feeding Stray Dogs',
            desc: 'Every day, our team actively participates in feeding stray dogs around our office locations. This initiative reflects our belief in compassion for all living beings and a cleaner, safer community for both animals and people.',
        },
        {
            icon: GirlIcon,
            title: 'Empowering the Girl Child',
            desc: 'Inspired by the strength of Savita Bansal, the woman behind our name, we are initiating programs focused on girl-child welfare — starting with sponsoring education for underprivileged girls. We believe education empowers futures and uplifts generations.',
        },
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
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                duration: 0.8,
            },
        },
    };

    const cardHoverVariants: Variants = {
        hover: {
            scale: 1.03,
            y: -8,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
            },
        },
    };

    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Header Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={containerVariants}
                className="mb-16 max-w-4xl mx-auto text-center"
                aria-labelledby="csr-heading"
            >
                <motion.h1
                    id="csr-heading"
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
                >
                    Corporate Social Responsibility
                </motion.h1>
                <motion.div variants={itemVariants} className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                        Our Commitment Beyond Business
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        At Savita Synergy, we believe that true growth is not just measured by numbers — but by
                        impact. Guided by our core value of Service First, we are committed to contributing to
                        causes that make a difference in the lives of those who need it most.
                    </p>
                </motion.div>
            </motion.section>

            {/* Responsibility Cards */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={containerVariants}
                className="max-w-7xl mx-auto space-y-8"
                aria-labelledby="initiatives-heading"
            >
                <motion.h2
                    id="initiatives-heading"
                    variants={itemVariants}
                    className="sr-only"
                >
                    Our Initiatives
                </motion.h2>
                <div className=' md:shadow-2xl px-4 md:p-10 space-y-10 rounded-2xl'>
                    {ResponsibilityContent.map((content, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={content.title}
                                variants={itemVariants}
                                whileHover="hover"
                                className="flex flex-col md:flex-row items-center gap-6 lg:gap-12 p-8 bg-white/80 backdrop-blur-lg rounded-2xl  border border-primary transition-all duration-300"
                                role="article"
                                aria-label={`Initiative: ${content.title}`}
                            >
                                {/* Icon */}
                                <motion.div
                                    variants={cardHoverVariants}
                                    className={`relative w-20 h-20 flex-shrink-0 ${isEven ? 'md:order-2' : 'md:order-1'}`}
                                >
                                    <Image
                                        src={content.icon}
                                        alt={`${content.title} Icon`}
                                        width={80}
                                        height={80}
                                        className="object-contain"
                                        sizes="80px"
                                    />
                                </motion.div>
                                {/* Content */}
                                <div className={`flex-1 ${isEven ? 'md:order-1' : 'md:order-2'} text-center md:text-left`}>
                                    <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">{content.title}</h3>
                                    <p className="text-gray-600 text-base leading-relaxed">{content.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.section>
        </div>
    );
};

export default SocialResponse;