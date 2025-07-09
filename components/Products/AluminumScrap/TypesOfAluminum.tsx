'use client'
import React from 'react'
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import WhyCustomDiesImg from '@/assets/Product/CustomDies/WhyCustomDies.jpg'
import { MdCheckCircle } from 'react-icons/md';

const TypesOfAluminum = () => {

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
                        className="rounded-2xl w-full h-[90dvh] object-cover"
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
                        Types of Aluminium Scrap  <span className="text-lighter">We Handle</span>
                    </h1>
                    <ol className=' flex  flex-col gap-4'>
                        <li className=' flex items-center gap-2 bg-[#FAFAFA] p-4 rounded-xl'> <span className=' text-lighter'><MdCheckCircle/> </span> Taint Tabor (clean mixed sheet scrap)</li>
                        <li className=' flex items-center gap-2 bg-[#FAFAFA] p-4 rounded-xl'> <span className=' text-lighter'><MdCheckCircle/> </span> Tense (cast aluminium scrap)</li>
                        <li className=' flex items-center gap-2 bg-[#FAFAFA] p-4 rounded-xl'> <span className=' text-lighter'><MdCheckCircle/> </span> Troma (aluminium extrusion scrap)</li>
                        <li className=' flex items-center gap-2 bg-[#FAFAFA] p-4 rounded-xl'> <span className=' text-lighter'><MdCheckCircle/> </span> Talon (clean aluminium wire and cable)</li>
                        <li className=' flex items-center gap-2 bg-[#FAFAFA] p-4 rounded-xl'> <span className=' text-lighter'><MdCheckCircle/> </span> Other industrial aluminium scrap grades as per requirement</li>
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

export default TypesOfAluminum
