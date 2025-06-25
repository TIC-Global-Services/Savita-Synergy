'use client'
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Anodizing from '@/assets/Services/Anodizing.png';
import PowerCoating from '@/assets/Services/PowerCoating.png';
import CustomFabrication from '@/assets/Services/CustomFabrication.png';

interface Service {
    title: string;
    desc: string;
    img: StaticImageData;
    link: string;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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

const textVariants: Variants = {
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

const ServicesExplore: React.FC = () => {
    const services: Service[] = [
        {
            title: 'Anodizing',
            desc: 'Our in-house capabilities include precision cutting, machining, and finishing services, enabling end-to-end customization of aluminum products.',
            img: Anodizing,
            link: '/services/anodizing',
        },
        {
            title: 'Powder Coating',
            desc: 'We provide premium powder coating solutions with a variety of textures and colors, offering superior finish quality, durability, and weather resistance.',
            img: PowerCoating,
            link: '/services/powder-coating',
        },
        {
            title: 'Custom Fabrication',
            desc: 'Our in-house capabilities include precision cutting, machining, and finishing services, enabling end-to-end customization of aluminum products.',
            img: CustomFabrication,
            link: '/services/custom-fabrication',
        },
    ];

    return (
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-20 bg-gray-50">
            <div className=" mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className=" md:space-y-12"
                >
                    {services.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={cardVariants}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:gap-8 overflow-hidden py-10 ${index !== services.length - 1 ? 'border-b' : ''}`}
                            whileHover={{ y: -5 }}
                        >

                            <div className="md:w-1/2 aspect-video relative ">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover rounded-2xl"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={80}
                                    priority={index === 0}
                                />
                            </div>
                            <div className="md:w-1/2 py-6 md:py-0 flex flex-col justify-between">
                                <motion.div variants={textVariants} className="flex flex-col h-full justify-between">
                                    {/* Title at the top */}
                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                        {item.title}
                                    </h2>

                                    {/* Description + Button at the bottom */}
                                    <div className="mt-auto">
                                        <p className="text-gray-600 mb-6 text-base sm:text-lg">
                                            {item.desc}
                                        </p>
                                        <Link
                                            href={item.link}
                                            className="inline-flex items-center px-6 py-3 bg-lighter text-white rounded-full font-semibold text-base hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none"
                                            aria-label={`Explore ${item.title} services`}
                                        >
                                            Explore More
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesExplore;