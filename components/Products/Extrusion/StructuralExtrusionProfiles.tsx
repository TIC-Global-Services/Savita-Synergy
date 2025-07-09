'use client'
import Image, { StaticImageData } from 'next/image';
import React from 'react'
import Bars from '@/assets/Product/Extrusions/Structural/bars.png';
import Tubes from '@/assets/Product/Extrusions/Structural/tubes.png';
import Channels from '@/assets/Product/Extrusions/Structural/channels.png';
import Angles from '@/assets/Product/Extrusions/Structural/angles.png';
import Tees from '@/assets/Product/Extrusions/Structural/tees.png';
import DoorSections from '@/assets/Product/Extrusions/Structural/door.png';
import { motion, type Variants } from 'framer-motion';
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

const StructuralExtrusionProfiles = () => {

    const Structural: Profile[] = [
        { title: 'Bars and Rods', img: Bars, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Tubes', img: Tubes, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Channels', img: Channels, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Angles', img: Angles, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Tees', img: Tees, pdfLink: '/catelogues/extrusion.pdf' },
        { title: 'Door Sections', img: DoorSections, pdfLink: '/catelogues/extrusion.pdf' },
    ];

    return (
        <div className='py-12 px-4 sm:px-6 lg:px-20 bg-gray-50 mx-auto'>

            <div className=' text-center space-y-4 text-2xl py-10'>
                <p>Savita Synergy is a top aluminium profile manufacturer in India, specializing in high-strength structural aluminium profiles for industrial and infrastructure use. Ideal for frameworks, support structures, and fabrication assemblies, our profiles withstand harsh conditions.We offer standard and custom sections in various shapes, with anodized or powder-coated finishes. Made from high-grade raw and recycled aluminium and ingots, our profiles ensure superior strength-to-weight ratio, corrosion resistance, and long-term performance.</p>

                <div className='flex justify-center items-center'>
                    <Link href={'/contact'} className='px-4 py-2 bg-lighter text-lg text-white rounded-full hover:bg-primary transition-colors'>Get Quotation</Link>
                </div>
            </div>
            {/* Structural Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="mb-16"
            >
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-20"
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

export default StructuralExtrusionProfiles
