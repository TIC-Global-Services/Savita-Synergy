'use client'
import React from 'react'
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AppPC from '@/assets/Services/PowderCoating/application-of-pc.jpg'
import { MdCheckCircle } from 'react-icons/md';

const ApplicationOfPC = () => {

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
                    Applications of Our Aluminium <span className="text-lighter">Powder Coating Services</span>
                    </h1>
                    <ol className=' flex  flex-col gap-4'>
                        <li className=' flex items-center gap-2 bg-[#FAFAFA] p-4 rounded-xl'> <span className=' text-lighter'><MdCheckCircle /> </span> Building exteriors, windows, doors, and curtain walls</li>
                        <li className=' flex items-center gap-2 bg-[#FAFAFA] p-4 rounded-xl'> <span className=' text-lighter'><MdCheckCircle /> </span> Interior aluminium panels, partitions, and display systems</li>
                        <li className=' flex items-center gap-2 bg-[#FAFAFA] p-4 rounded-xl'> <span className=' text-lighter'><MdCheckCircle /> </span> Industrial enclosures, machinery casings, and retail fixtures</li>
                        <li className=' flex items-center gap-2 bg-[#FAFAFA] p-4 rounded-xl'> <span className=' text-lighter'><MdCheckCircle /> </span> Transportation, rail, and automotive aluminium components</li>

                    </ol>

                </motion.div>

                {/* Image */}
                <motion.div
                    className="w-full"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <Image
                        src={AppPC}
                        alt="Application of PC"
                        className="rounded-2xl w-full  object-cover"
                        width={600}
                        height={400}
                        priority
                    />
                </motion.div>


            </div>

            <div className=' text-center mx-auto py-10'>
                <p className=' text-2xl'>
                Whether you’re searching for durable aluminium finishes, custom powder coating services, or a certified powder coated aluminium supplier in India, Savita Synergy delivers the reliability, color flexibility, and surface strength your projects demand.
                Trust Savita Synergy — where innovation meets industry standards in powder coated aluminium finishing
                </p>
            </div>
        </div>
    )
}

export default ApplicationOfPC
