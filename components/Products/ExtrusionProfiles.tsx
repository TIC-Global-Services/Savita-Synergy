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
    pdfLink: string; // Added pdfLink to the Profile interface
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
        { title: 'Bars and Rods', img: Bars, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Tubes', img: Tubes, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Channels', img: Channels, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Angles', img: Angles, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Tees', img: Tees, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Door Sections', img: DoorSections, pdfLink: '/catelogues/extrusion.pdf' },
    ];

    const Architectural: Profile[] = [
        { title: 'Sliding Window Sections', img: SlidingWindow, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Handle Sections', img: HandleSections, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Skirtings', img: Skirtings, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Kitchen Profiles', img: KitchenProfiles, pdfLink: '/catelogues/extrusion.pdf' },
        { title: '20x54 Window Series', img: WindowSeries, pdfLink: '/catelogues/extrusion.pdf' },
        { title: '50mm Slidings', img: Slidings, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Casement Sections', img: CasementSections, pdfLink: '/catelogues/extrusion.pdf' },
        { title: '30*65 Single Glass', img: SingleGlass, pdfLink: '/catelogues/extrusion.pdf' },
        { title: '30mm Sliding Track Cap System', img: TrackCapSystem, pdfLink: '/catelogues/extrusion.pdf' },
    ];

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-20 bg-gray-50">
            <div className="mx-auto">
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
                            <motion.a
                                key={content.title}
                                href={content.pdfLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                className="block overflow-hidden cursor-pointer"
                                whileHover={{ y: -5 }}
                                aria-label={`View PDF for ${content.title}`}
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
                            </motion.a>
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
                            <motion.a
                                key={content.title}
                                href={content.pdfLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={itemVariants}
                                className="block overflow-hidden cursor-pointer"
                                whileHover={{ y: -5 }}
                                aria-label={`View PDF for ${content.title}`}
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
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExtrusionProfiles;