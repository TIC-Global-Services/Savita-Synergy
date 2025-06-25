'use client';
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import NewsLetterIcon from '@/assets/KnowledgeHub/newletter-icon.png';
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15,
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

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailError('');
    setSuccessMessage('');

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
      const response = await fetch('https://script.google.com/macros/s/AKfycbyiC9P9maWE0zN-c-byBRmDY0ZQp-EEBZDjWucgFH9-VQSl_ugp7P2ZThxDnacKxkgoBg/exec', { // Replace with your deployed Web App URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
        mode: 'no-cors', // Required for Google Apps Script
        cache: 'no-cache',
      });

      setEmail('')
      toast.custom((t) => <CustomToast message="You Great! Got Subscribed to our Letters" t={t} type="success" />, {
        duration: 3000,
    });
      setSuccessMessage('Thank you for subscribing!');
      return true;
    } catch (error) {
      setEmailError('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl mx-auto bg-[#F4F5F7] rounded-3xl border border-gray-200 px-4 md:px-10 py-14 relative"
      >
        <motion.div
          variants={itemVariants}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2"
        >
          <Image
            src={NewsLetterIcon}
            alt="Newsletter Icon"
            width={80}
            height={80}
            className="object-contain"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Newsletter Signup
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto">
            Be the first to know. Stay connected with our latest updates.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
            role="form"
            aria-label="Newsletter subscription"
          >
            <div className="w-full sm:w-auto flex-1">
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
                  setSuccessMessage('');
                }}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-full border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lighter transition-all duration-200"
                aria-describedby={emailError ? 'email-error' : undefined}
                disabled={isSubmitting}
              />
              {emailError && (
                <p id="email-error" className="text-red-500 text-sm mt-1 text-left">
                  {emailError}
                </p>
              )}
              {successMessage && (
                <p id="success-message" className="text-green-500 text-sm mt-1 text-left">
                  {successMessage}
                </p>
              )}
            </div>
            <motion.button
              type="submit"
              variants={hoverVariants}
              whileHover="hover"
              disabled={isSubmitting}
              className="px-6 py-3 bg-lighter text-white font-semibold rounded-full shadow-md cursor-pointer hover:bg-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewsletterSignup;