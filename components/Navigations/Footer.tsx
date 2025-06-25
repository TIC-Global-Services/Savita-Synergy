'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import FooterBG from '@/assets/Footer/FooterBG.jpg';
import { FaFacebook as FaceBookIcon, FaInstagram as InstaIcon } from 'react-icons/fa';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const socials = [
        { title: 'Facebook', link: 'https://facebook.com/savitasynergy', icon: FaceBookIcon },
        { title: 'Instagram', link: 'https://instagram.com/savitasynergy', icon: InstaIcon },
    ];

    const quickAction = [
        { title: 'About us', link: '/about' },
        { title: 'Products', link: '/products' },
        { title: 'Services', link: '/services' },
        { title: 'By Industry', link: '/by-industry' },
        { title: 'Knowledge Hub', link: '/knowledge-hub' },
        { title: 'Careers', link: '/careers' },
        { title: 'Contact us', link: '/contact' },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setEmailError('');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError('Email is required');
            setIsSubmitting(false);
            return;
        }
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email');
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log('Subscribed email:', email); // Replace with actual API call
            setEmail('');
            // Optionally show success message (e.g., via toast or state)
        } catch (error) {
            setEmailError('Subscription failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 120,
                damping: 15,
                duration: 0.6,
            },
        },
    };

    const hoverVariants: Variants = {
        hover: {
            scale: 1.05,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 20,
            },
        },
    };

    return (
        <footer className="relative w-full bg-gray-900 text-white z-50">
            {/* Background Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
            >
                <Image
                    src={FooterBG}
                    alt="Footer Background"
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                    priority
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/40"
            />

            {/* Content */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={containerVariants}
                className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-16  mx-auto"
                aria-labelledby="footer-heading"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 place-items-center md:place-items-start">
                    {/* Intro with Socials */}
                    <motion.div variants={itemVariants} className="space-y-6 flex flex-col items-center text-center md:items-start md:text-start">
                        <Image
                            src="/logo.png"
                            alt="Savita Synergy Logo"
                            width={150}
                            height={150}
                            className="object-contain"
                        />
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm">
                            Savita Synergy delivers excellence in the aluminum industry with innovative products
                            and services, driven by integrity and sustainability.
                        </p>
                        <div className="flex gap-4">
                            {socials.map((social) => (
                                <motion.div key={social.title} variants={hoverVariants} whileHover="hover">
                                    <Link
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Follow us on ${social.title}`}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        <social.icon size={24} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Actions */}
                    <motion.div variants={itemVariants} className="space-y-6 text-center md:text-start">
                        <h2 className="text-xl sm:text-2xl font-semibold text-white">Quick Actions</h2>
                        <ul className="grid grid-cols-1 gap-2">
                            {quickAction.map((item) => (
                                <motion.li key={item.title} variants={hoverVariants} whileHover="hover">
                                    <Link
                                        href={item.link}
                                        className="text-gray-300 text-sm sm:text-base hover:text-white transition-colors duration-200"
                                    >
                                        {item.title}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants} className="space-y-6 text-center md:text-start">
                        <h2 className="text-xl sm:text-2xl font-semibold text-white">Contact</h2>
                        <div className="space-y-2 text-sm sm:text-base">
                            <p>
                                Email:{' '}
                                <Link
                                    href="mailto:info@savitasynergy.com"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    info@savitasynergy.com
                                </Link>
                            </p>
                            <p>
                                Phone:{' '}
                                <Link
                                    href="tel:+1234567890"
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    +1 (234) 567-890
                                </Link>
                            </p>
                        </div>
                    </motion.div>

                    {/* Subscribe */}
                    <motion.div variants={itemVariants} className="space-y-6 text-center md:text-start">
                        <h2 className="text-xl sm:text-2xl font-semibold text-white">Explore More</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                            role="form"
                            aria-label="Newsletter subscription"
                        >
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setEmailError('');
                                    }}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2.5 rounded-2xl bg-white border border-gray-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                    aria-describedby={emailError ? 'email-error' : undefined}
                                    disabled={isSubmitting}
                                />
                                {emailError && (
                                    <p id="email-error" className="text-red-400 text-xs mt-1">
                                        {emailError}
                                    </p>
                                )}
                            </div>
                            <motion.button
                                type="submit"
                                variants={hoverVariants}
                                whileHover="hover"
                                disabled={isSubmitting}
                                className=" px-4 bg-lighter text-white font-semibold py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Copyright & Privacy */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 pt-8 border-t border-gray-700/30 text-center space-y-3 flex flex-col md:flex-row justify-between"
                >
                    <p className="text-gray-400 text-xs sm:text-sm">
                        © {new Date().getFullYear()} Savita Synergy. All rights reserved.
                    </p>
                    <motion.div variants={hoverVariants} whileHover="hover " className=' space-x-6'>
                        <Link
                            href="/privacy"
                            className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors duration-200"
                        >
                            Terms & Conditions
                        </Link>
                        <Link
                            href="/privacy"
                            className="text-gray-300 text-xs sm:text-sm hover:text-white transition-colors duration-200"
                        >
                            Privacy Policy
                        </Link>
                    </motion.div>

                    <div >
                        <h1 className=' flex items-center text-gray-300 justify-center gap-2  text-xs sm:text-sm'>
                            Designed & Developed By
                            <Link
                                href="https://theinternetcompany.one/"
                                className="text-lighter text-xs sm:text-sm hover:text-primary transition-colors duration-200"
                            >
                                TIC.
                            </Link>
                        </h1>
                    </div>

                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;