'use client'
import React from 'react'
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import WhyPC from '@/assets/Services/PowderCoating/why-pc.jpg'
import { MdCheckCircle } from 'react-icons/md';
import Link from 'next/link';

const WhyCustomFab = () => {

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
                >
                    <Image
                        src={WhyPC}
                        alt="Why Powder Coating"
                        className="  w-full h-dvh object-cover"
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
                        Why Choose Our <span className="text-lighter">Fabrication Services? </span>
                    </h1>
                    <p>
                        We serve a wide range of industries including construction, electrical, signage, solar, industrial enclosures, and consumer products, offering flexible aluminium fabrication for simple to complex parts.
                    </p>
                    <ol className=' space-y-6'>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle /> </span> Enables end-to-end customization of aluminium products</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle /> </span> Reduces turnaround time by eliminating third-party processes</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle /> </span> Reduces material waste and improves production efficiency</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle /> </span> Ensures dimensional accuracy and product consistency</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle /> </span> Supports low-to-high volume production</li>
                        <li className=' flex items-center gap-2'> <span className=' text-lighter'><MdCheckCircle /> </span> Seamlessly integrates with our extrusion and surface finishing lines</li>
                    </ol>

                </motion.div>

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


            </div>
        </div>
    )
}

export default WhyCustomFab
