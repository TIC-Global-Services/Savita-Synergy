
'use client'
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Bars from '@/assets/Product/Extrusions/Structural/bars.png';
import Tubes from '@/assets/Product/Extrusions/Structural/tubes.png';
import Channels from '@/assets/Product/Extrusions/Structural/channels.png';
import Angles from '@/assets/Product/Extrusions/Structural/angles.png';
import Tees from '@/assets/Product/Extrusions/Structural/tees.png';
import DoorSections from '@/assets/Product/Extrusions/Structural/door.png';
import SlidingWindow from '@/assets/Product/Extrusions/Architectural/angles.png';
import HandleSections from '@/assets/Product/Extrusions/Architectural/angles.png';
import Skirtings from '@/assets/Product/Extrusions/Architectural/angles.png';
import KitchenProfiles from '@/assets/Product/Extrusions/Architectural/angles.png';
import WindowSeries from '@/assets/Product/Extrusions/Architectural/angles.png';
import Slidings from '@/assets/Product/Extrusions/Architectural/angles.png';
import CasementSections from '@/assets/Product/Extrusions/Architectural/angles.png';
import SingleGlass from '@/assets/Product/Extrusions/Architectural/angles.png';
import TrackCapSystem from '@/assets/Product/Extrusions/Architectural/angles.png';

interface Profile {
    title: string;
    img: StaticImageData;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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

const headerVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 15,
        },
    },
};

const ExtrusionProfiles: React.FC = () => {
    const Structural: Profile[] = [
        { title: 'Bars and Rods', img: Bars },
        { title: 'Tubes', img: Tubes },
        { title: 'Channels', img: Channels },
        { title: 'Angles', img: Angles },
        { title: 'Tees', img: Tees },
        { title: 'Door Sections', img: DoorSections },
    ];

    const Architectural: Profile[] = [
        { title: 'Sliding Window Sections', img: SlidingWindow },
        { title: 'Handle Sections', img: HandleSections },
        { title: 'Skirtings', img: Skirtings },
        { title: 'Kitchen Profiles', img: KitchenProfiles },
        { title: '20x54 Window Series', img: WindowSeries },
        { title: '50mm Slidings', img: Slidings },
        { title: 'Casement Sections', img: CasementSections },
        { title: '30*65 Single Glass', img: SingleGlass },
        { title: '30mm Sliding Track Cap System', img: TrackCapSystem },
    ];

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-20 bg-gray-50">
            <div className=" mx-auto">
                {/* Structural Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="mb-16"
                >
                    <motion.h2
                        variants={headerVariants}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
                    >
                        Structural Profiles
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {Structural.map((content) => (
                            <motion.div
                                key={content.title}
                                variants={itemVariants}
                                className=" overflow-hidden"
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative aspect-video rounded-xl overflow-hidden">
                                    <Image
                                        src={content.img}
                                        alt={content.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={75}
                                    />
                                </div>

                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 text-center">
                                        {content.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Architectural Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <motion.h2
                        variants={headerVariants}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
                    >
                        Architectural Profiles
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {Architectural.map((content) => (
                            <motion.div
                                key={content.title}
                                variants={itemVariants}
                                className=" overflow-hidden"
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative aspect-video rounded-xl overflow-hidden">
                                    <Image
                                        src={content.img}
                                        alt={content.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        quality={75}
                                    />
                                </div>

                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 text-center">
                                        {content.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExtrusionProfiles;