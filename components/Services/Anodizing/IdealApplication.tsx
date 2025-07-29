'use client'
import React from 'react'
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import IdealApplicationImg from '@/assets/Services/Anodizing/Anodized profile 4.1.jpeg'
import IdealApplicationImg2 from '@/assets/Services/Anodizing/Anodized profile 4.1.png'
import { MdCheckCircle } from 'react-icons/md';

const IdealApplication = () => {

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
        <div className='  py-12 px-4 sm:px-6 lg:px-20 mx-auto'>
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-10">



                {/* Text Content */}
                <motion.div
                    className="text-lg md:text-xl space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    <h1 className="text-3xl sm:text-4xl font-semibold">
                        Ideal Applications of Our Aluminium <span className="text-lighter">Surface Finishing Services</span>
                    </h1>
                    <ol className=' flex  flex-col gap-4'>
                        <li className=' flex items-center gap-2 bg-[#FAFAFA] p-4 rounded-xl'> <span className=' text-lighter'><MdCheckCircle /> </span> Building facades, window frames, and curtain wall systems</li>
                        <li className=' flex items-center gap-2 bg-[#FAFAFA] p-4 rounded-xl'> <span className=' text-lighter'><MdCheckCircle /> </span> Interior panels, ceiling systems, and signage</li>
                        <li className=' flex items-center gap-2 bg-[#FAFAFA] p-4 rounded-xl'> <span className=' text-lighter'><MdCheckCircle /> </span> Rail coaches, commercial vehicle trims, and aircraft interiors</li>
                        <li className=' flex items-center gap-2 bg-[#FAFAFA] p-4 rounded-xl'> <span className=' text-lighter'><MdCheckCircle /> </span> Consumer goods and industrial-grade components</li>

                    </ol>

                </motion.div>

                {/* Image */}
                <motion.div
                    className="w-full flex flex-col gap-4"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <Image
                        src={IdealApplicationImg}
                        alt="Ideal Application"
                        className="rounded-t-2xl aspect-[16/6]  object-cover"
                        width={600}
                        height={400}
                        priority
                    />

                    <Image
                        src={IdealApplicationImg2}
                        alt="Ideal Application"
                        className="rounded-b-2xl aspect-[16/6]  object-cover"
                        width={600}
                        height={400}
                        priority
                    />
                </motion.div>


            </div>

            <div className=' text-center mx-auto py-10'>
                <p className=' text-2xl'>
                    We cater to clients looking for anodized aluminium suppliers in India who value quality, customization, and consistency. Our anodizing process ensures that finishes remain colorfast and weather-resistant for years  ideal for both interior and exterior aluminium applications.
                    Savita Synergy is your trusted partner for aluminium anodizing services — offering durable, customizable, and sustainable anodized aluminium finishes built to outperform and impress.
                </p>
            </div>
        </div>
    )
}

export default IdealApplication
