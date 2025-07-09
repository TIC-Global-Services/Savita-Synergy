'use client'
import React from 'react'
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import WhyCustomDiesImg from '@/assets/Product/CustomDies/WhyCustomDies.jpg'
import { MdCheckCircle } from 'react-icons/md';

const WhyIgnotsBillets = () => {

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

    // Animation variants for button
    const buttonVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.4, ease: 'easeOut' } },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
    };

    return (
        <div className=' bg-[#F2F8F4] py-12 px-4 sm:px-6 lg:px-20 mx-auto'>
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <motion.div
                    className="text-lg md:text-xl space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <h1 className="text-3xl sm:text-4xl font-semibold">
                    Why Choose Savita Synergy for <span className="text-lighter">Ingots & Billets?</span>
                    </h1>
                    <p>
                    Whether you need raw aluminium materials or fully extruded aluminium profiles, Savita Synergy delivers end-to-end solutions from ingot casting to precision extrusion with speed, quality, and consistency.
                    </p>
                    <ol>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle/> </span> In-house production of extrusion-grade billets and ingots</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle/> </span> Compatible with die casting, extrusion, rolling, and forging</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle/> </span> Available in custom sizes and alloys based on application</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle/> </span> High strength-to-weight ratio and excellent corrosion resistance</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle/> </span> Sustainable, recyclable, and compliant with global quality benchmarks</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle/> </span> Direct integration with our aluminium extrusion manufacturing line</li>
                    </ol>
                    <div className="flex justify-start">
                        <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            <Link
                                href="/contact"
                                className="inline-block px-6 py-3 bg-lighter text-white text-lg font-semibold rounded-full hover:bg-primary transition-colors duration-300"
                            >
                                Get Quotation
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    className="w-full"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <Image
                        src={WhyCustomDiesImg}
                        alt="Why Custom Dies"
                        className="rounded-2xl w-full h-auto object-cover"
                        width={600}
                        height={400}
                        priority
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default WhyIgnotsBillets
