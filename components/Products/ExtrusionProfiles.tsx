'use client'
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Structural from '@/assets/Product/Extrusions/structural.jpg';
import Architectural from '@/assets/Product/Extrusions/architectural.jpg';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';


// Animation variants for the product cards
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.2,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

const ExtrusionProfiles: React.FC = () => {


    const Profiles = [
        {
            name: 'Structural Aluminium Profiles',
            slug: '/extrusions-and-profiles/structural',
            img: Structural,
        },
        {
            name: 'Architectural Aluminium Profile',
            slug: '/extrusions-and-profiles/architectural',
            img: Architectural,
        },
    ];

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-20 bg-gray-50">
            <div className="mx-auto space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    {Profiles.map((product, index) => (
                        <motion.div
                            key={index}
                            data-index={index}
                            className="relative overflow-hidden rounded-2xl"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            custom={index}
                        >
                            {/* Product Card */}
                            <Link href={`/products/${product.slug}`} className="block w-full h-full bg-synergy-dark-300 rounded-2xl p-4">
                                <Image
                                    src={product.img}
                                    alt={`${product.name} product image`}
                                    className="object-cover aspect-video w-full rounded-xl"
                                    priority={index === 0}
                                />
                                <div className="flex items-center gap-2 mt-4 text-secondary font-bold">
                                    <h2 className="text-xl sm:text-2xl">{product.name}</h2>
                                    <ArrowRightIcon  />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className='text-lg md:text-2xl max-w-7xl mx-auto py-6 space-y-4 text-center'>
                    <p> Savita Synergy is a leading provider of aluminium extrusion profiles in India, known for delivering precision and quality across a wide range of applications. We offer an extensive selection of aluminium profiles for architectural design and structural use, available in both anodized and powder-coated finishes.</p>

                    <p>Our aluminium profiles are manufactured using high-grade raw and recycled materials, making them strong, durable, and environmentally responsible. With a wide variety of custom aluminium sections in different shapes, sizes, and finishes, we cater to the unique needs of architects, builders, and industrial clients across the country.</p>

                    <p>Whether you&apos;re designing modern facades or durable framing systems, Savita Synergy delivers performance-driven, versatile solutions tailored to your project.Looking for a reliable aluminium Extrusion profile supplier in India? Choose Savita Synergy for purity, performance, and production-ready material.</p>
                </div>

                <div className='flex justify-center items-center'>
                    <Link href={'/contact'} className='px-4 py-2 bg-lighter text-lg text-white rounded-full hover:bg-primary transition-colors'>Get Quotation</Link>
                </div>
            </div>
        </section>
    );
};

export default ExtrusionProfiles;