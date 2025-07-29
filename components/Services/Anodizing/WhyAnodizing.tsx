'use client'
import React from 'react'
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import WhyAnodizingImg from '@/assets/Services/Anodizing/Anodized profile 3.1.png'
import WhyAnodizingImg2 from '@/assets/Services/Anodizing/Anodized profile 3.2.png'
import WhyAnodizingImg3 from '@/assets/Services/Anodizing/Anodized profile 3.3.png'
import { MdCheckCircle } from 'react-icons/md';

const WhyAnodizing = () => {

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

                {/* Image */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                    className=' flex flex-col gap-4'
                >
                    <Image
                        src={WhyAnodizingImg}
                        alt="Why Anodizing"
                        className="  aspect-[16/6] rounded-t-2xl object-cover"
                        width={600}
                        height={400}
                        priority
                    />
                    <Image
                        src={WhyAnodizingImg2}
                        alt="Why Anodizing"
                        className="  aspect-[16/6] object-cover"
                        width={600}
                        height={400}
                        priority
                    />
                    <Image
                        src={WhyAnodizingImg3}
                        alt="Why Anodizing"
                        className="  aspect-[16/6] rounded-b-2xl object-cover"
                        width={600}
                        height={400}
                        priority
                    />
                </motion.div>


                {/* Text Content */}
                <motion.div
                    className="text-lg md:text-xl space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <h1 className="text-3xl sm:text-4xl font-semibold">
                        Why Choose <span className="text-lighter">Our Anodized Aluminium?</span>
                    </h1>
                    <p>
                        Whether you need architectural aluminium finishes or custom anodized aluminium for product design, we deliver tailored solutions that meet both technical and aesthetic demands.
                    </p>
                    <ol className=' space-y-6'>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle /> </span> 3× harder than raw aluminium</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle /> </span> 60% lighter than stainless steel, brass, or copper</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle /> </span> Resistant to UV damage, corrosion, and wear</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle /> </span> Available in custom anodized aluminium finishes, including matte, brushed, pebble textures</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle /> </span> Matches Pantone colours, metallic tones (bronze, stainless steel, copper, etc.)</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle /> </span> A lightweight, cost-effective alternative to other metal finishes</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle /> </span> Eco-friendly, low maintenance, and fully recyclable</li>
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


            </div>
        </div>
    )
}

export default WhyAnodizing
