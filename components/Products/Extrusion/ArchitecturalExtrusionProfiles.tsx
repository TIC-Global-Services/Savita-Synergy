'use client'
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import SlidingWindow from '@/assets/Product/Extrusions/Architectural/Sliding Window Sections.jpg';
import HandleSections from '@/assets/Product/Extrusions/Architectural/Handle Section.jpg';
import Skirtings from '@/assets/Product/Extrusions/Architectural/Skirting.jpg';
import KitchenProfiles from '@/assets/Product/Extrusions/Architectural/Kitchen Profile.jpg';
import WindowSeries from '@/assets/Product/Extrusions/Architectural/2054.jpg';
import Slidings from '@/assets/Product/Extrusions/Architectural/50-mm-Sliding.jpg';
import CasementSections from '@/assets/Product/Extrusions/Architectural/casement-sections.jpg';
import SingleGlass from '@/assets/Product/Extrusions/Architectural/30-X60mm.jpg';
import TrackCapSystem from '@/assets/Product/Extrusions/Architectural/30-MM.jpg';
import Link from 'next/link';

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

const ArchitecturalExtrusionProfiles = () => {

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
        <div className='py-12 px-4 sm:px-6 lg:px-20 bg-gray-50 mx-auto'>

            <div className=' text-center space-y-4 text-2xl py-10'>
                <p>Savita Synergy is a trusted aluminium profile manufacturer in India, offering premium architectural profiles for residential and commercial construction. Used in windows, doors, sliding systems, casement series, railings, and fencing, our profiles ensure strength, corrosion resistance, and all-weather durability. Available with anodized or powder-coated finishes, each profile is fully customizable for perfect architectural fit.</p>

                <div className='flex justify-center items-center'>
                    <Link href={'/contact'} className='px-4 py-2 bg-lighter text-lg text-white rounded-full hover:bg-primary transition-colors'>Get Quotation</Link>
                </div>
            </div>
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
                                    {content.title}.pdf
                                </h3>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ArchitecturalExtrusionProfiles
