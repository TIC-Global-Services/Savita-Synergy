'use client';
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaPhone as Phone } from "react-icons/fa6";
import { IoIosMail as Mail } from "react-icons/io";
import { FaMapLocationDot as Address } from "react-icons/fa6";
import { FaChevronDown as ChevronDown } from "react-icons/fa6";
import toast from 'react-hot-toast';
import { CustomToast } from '../Reusable/CustomToast';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        product: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        product: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const productOptions = [
        { value: '', label: 'Select a product' },
        { value: 'aluminum', label: 'Aluminum' },
        { value: 'ingots-billets', label: 'Ingots & Billets' },
        { value: 'extrusions-profiles', label: 'Extrusions & Profiles' },
        { value: 'custom-dies', label: 'Custom Dies' },
    ];

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
        setSubmitStatus('idle');
    };

    const validateForm = () => {
        const newErrors = { name: '', email: '', phone: '', product: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        }
        if (!formData.product) {
            newErrors.product = 'Please select a product';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const getCurrentTimestamp = () => {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'Asia/Kolkata',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return now.toLocaleString('en-IN', options);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        if (!validateForm()) {
            setIsSubmitting(false);
            return;
        }

        try {
            const timestamp = getCurrentTimestamp();
            const submissionData = {
                ...formData,
                timestamp: timestamp,
            };

            // Replace with your Google Apps Script Web App URL
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzvy7oEqt2sSfa_8JQujrEqHMqaDjGXEUndqzywCbMTgCxB4dMypfoCEu6UydjECQSL/exec';

            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData)
            });

            // console.log('Contact form submitted:', submissionData);
            setSubmitStatus('success');
            toast.custom((t) => <CustomToast message="Message sent successfully!" t={t} type="success" />, {
                duration: 3000,
            });
            setFormData({ name: '', email: '', phone: '', product: '', message: '' });
        } catch (error) {
            toast.custom((t) => <CustomToast message="Failed to send message. Try again." t={t} type="error" />, {
                duration: 3000,
            });
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-20 bg-gray-50">
            <motion.div variants={itemVariants} className="text-center mb-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                    Let&apos;s Connect
                </h1>
                <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
                    Have a question, need a quote, or want to learn more about our aluminum products and
                    services? We&apos;re here to help.
                </p>
            </motion.div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className=" bg-[#F4F5F7] max-w-3xl mx-auto rounded-xl border border-gray-200 pt-10 md:py-10 px-8 md:px-10"
            >
                {/* Contact Form */}
                <motion.div variants={itemVariants} className="">
                    <motion.form
                        variants={containerVariants}
                        onSubmit={handleSubmit}
                        className="space-y-8"
                        role="form"
                        aria-label="Contact form"
                    >
                        {/* Name */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="name"
                                className="block text-sm sm:text-base font-medium text-gray-900 mb-2"
                            >
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                                aria-describedby={errors.name ? 'name-error' : undefined}
                                disabled={isSubmitting}
                            />
                            {errors.name && (
                                <p id="name-error" className="text-red-500 text-sm mt-2">
                                    {errors.name}
                                </p>
                            )}
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="email"
                                className="block text-sm sm:text-base font-medium text-gray-900 mb-2"
                            >
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                                aria-describedby={errors.email ? 'email-error' : undefined}
                                disabled={isSubmitting}
                            />
                            {errors.email && (
                                <p id="email-error" className="text-red-500 text-sm mt-2">
                                    {errors.email}
                                </p>
                            )}
                        </motion.div>

                        {/* Phone */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="phone"
                                className="block text-sm sm:text-base font-medium text-gray-900 mb-2"
                            >
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                                aria-describedby={errors.phone ? 'phone-error' : undefined}
                                disabled={isSubmitting}
                            />
                            {errors.phone && (
                                <p id="phone-error" className="text-red-500 text-sm mt-2">
                                    {errors.phone}
                                </p>
                            )}
                        </motion.div>

                        {/* Product Selection */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="product"
                                className="block text-sm sm:text-base font-medium text-gray-900 mb-2"
                            >
                                Product Interest <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    id="product"
                                    name="product"
                                    required
                                    value={formData.product}
                                    onChange={handleInputChange}
                                    className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 appearance-none cursor-pointer "
                                    aria-describedby={errors.product ? 'product-error' : undefined}
                                    disabled={isSubmitting}
                                >
                                    {productOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                            {errors.product && (
                                <p id="product-error" className="text-red-500 text-sm mt-2">
                                    {errors.product}
                                </p>
                            )}
                        </motion.div>

                        {/* Message */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="message"
                                className="block text-sm sm:text-base font-medium text-gray-900 mb-2"
                            >
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your message"
                                className="w-full px-5 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                                rows={5}
                                disabled={isSubmitting}
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div variants={itemVariants} className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-3 bg-lighter text-white font-semibold rounded-full hover:bg-primary transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </motion.div>

                        {/* Submission Status */}
                        {submitStatus === 'success' && (
                            <motion.p
                                variants={itemVariants}
                                className="text-green-600 text-sm sm:text-base text-center mt-4"
                            >
                                Message sent successfully! We'll get back to you soon.
                            </motion.p>
                        )}
                        {submitStatus === 'error' && (
                            <motion.p
                                variants={itemVariants}
                                className="text-red-500 text-sm sm:text-base text-center mt-4"
                            >
                                Failed to send message. Please try again.
                            </motion.p>
                        )}
                    </motion.form>
                </motion.div>
            </motion.div>
            {/* Contact Details Section */}
            <motion.div
                variants={itemVariants}
            >
                <div className="space-y-6 flex flex-col md:flex-row text-center md:text-start items-center w-full justify-center md:justify-between max-w-4xl mx-auto my-10">
                    <div>
                        <p className="text-gray-600 text-lg leading-relaxed flex items-start justify-start gap-4"> <Phone size={22} /> +91 98765 43210</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-lg leading-relaxed flex items-start justify-start gap-4"><Mail size={22} /> contact@aluminex.com</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-lg leading-relaxed flex items-start justify-start gap-4">
                            <Address size={22} />
                            Chennai, India
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ContactForm;