'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';
import { TextReveal } from '../Reusable/TextScrollReveal';


// OurStory Component
const OurStory: FC = () => {
    return (
        <section className=" relative w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="text-center  "
                >
                    <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 ">
                        Our Story
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="text-base sm:text-lg md:text-2xl  pt-4 font-medium"
                    >
                        Rooted in reliability. Growing with synergy.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="text-base sm:text-lg md:text-2xl  pt-4 font-medium"
                    >
                       From Humble Beginnings 
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <TextReveal>
                        {`Savita Synergy was founded as Savita Metal in Kolkata in 2017 by Mayank Bansal, who named the company after his mother, Savita — a courageous single parent and his biggest supporter. Her strength, resilience, and values inspire our culture and fuel our commitment to service and empowerment, especially for women.`}
                    </TextReveal>

                </motion.div>
            </div>
        </section>
    );
};

export default OurStory;