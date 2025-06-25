'use client'
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import TeamMember from '@/assets/About/TeamMem.jpg';

const OurTeam = () => {
    const TeamMembers = [
        { image: TeamMember, name: 'Neha', role: 'Developer' },
        { image: TeamMember, name: 'Archana', role: 'Developer' },
        { image: TeamMember, name: 'Sundar', role: 'Developer' },
        { image: TeamMember, name: 'Mithun', role: 'Developer' },
    ];

    // Enhanced animation variants with spring physics
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
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                duration: 0.8,
            },
        },
    };

    const cardHoverVariants: Variants = {
        hover: {
            scale: 1.03,
            y: -10,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 25,
            },
        },
    };

    return (
        <div className="px-4 sm:px-6 md:px-8 lg:px-20 py-16 bg-gradient-to-b from-gray-50 to-white">
            {/* Leadership Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={containerVariants}
                className="mb-20 mx-auto"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-10 text-center lg:text-left tracking-tight"
                >
                    Leadership
                </motion.h1>
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
                >
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src={TeamMember}
                            alt="Mayank Bansal"
                            className="object-cover aspect-[3/4]"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                    <div className="flex-1 text-center lg:text-left space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Mayank Bansal</h2>
                        <h3 className="text-base sm:text-lg text-gray-600 font-medium">
                            Entrepreneur | Aluminum Industry Expert
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                            Driven by a passion for innovation and integrity, Mayank Bansal has been at the helm of
                            Savita Synergy’s leadership since founding the company in 2017. As Director, he brings
                            sharp insight and deep experience in the aluminum industry in India, transforming Savita
                            Synergy into a trusted name in aluminum distribution, products, and scrap trading.
                        </p>
                    </div>
                </motion.div>
            </motion.section>

            {/* Our Team Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={containerVariants}
                className=" "
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-10 text-center lg:text-left tracking-tight"
                >
                    Our Team
                </motion.h1>
                <motion.div
                    variants={containerVariants}
                    className="flex w-full px-4 md:px-0 pb-4 overflow-x-auto md:overflow-x-hidden gap-6 sm:gap-8"
                >
                    {TeamMembers.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={itemVariants}
                            whileHover="hover"
                            className="relative flex flex-col items-start w-full  bg-white "
                        >
                            <motion.div variants={cardHoverVariants} className="relative  mb-4">
                                <div className='w-54 h-70 '>
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        className="rounded-lg object-cover aspect-[3/4]"
                                    />

                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg" />
                            </motion.div>
                            <h2 className="text-xl font-semibold text-gray-900">{member.name}</h2>
                            <p className="text-sm text-gray-500 font-medium">{member.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    );
};

export default OurTeam;