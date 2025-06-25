'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { useParams } from 'next/navigation';
import { jobOpenings, JobOpening } from '@/data/JobOpenings';

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

const ApplyForm: React.FC = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState<JobOpening | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null as File | null,
        coverLetter: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        resume: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Find job details based on jobId
    useEffect(() => {
        const foundJob = jobOpenings
            .flatMap((category) => category.openings)
            .find((opening) => opening.id === jobId);
        setJob(foundJob || null);
    }, [jobId]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
        setSubmitStatus('idle');
    };

    const handleFileChange = (file: File | null) => {
        if (file && file.type !== 'application/pdf') {
            setErrors((prev) => ({ ...prev, resume: 'Please upload a PDF file' }));
            return;
        }
        setFormData((prev) => ({ ...prev, resume: file }));
        setErrors((prev) => ({ ...prev, resume: '' }));
        setSubmitStatus('idle');
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        handleFileChange(file);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0] || null;
        handleFileChange(file);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const validateForm = () => {
        const newErrors = { name: '', email: '', phone: '', resume: '' };
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
        if (!formData.resume) {
            newErrors.resume = 'Resume is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
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
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log('Form submitted:', { ...formData, jobId }); // Replace with actual API call
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', resume: null, coverLetter: '' });
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-10 md:py-30 px-4 sm:px-6 lg:px-20 bg-gray-50">
            <motion.div variants={itemVariants} className="text-center mb-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                    Apply for {job ? job.title : 'Job'}
                </h1>
                <p className="text-gray-600 text-base sm:text-lg">
                    {job
                        ? `Submit your application for the ${job.title} position.`
                        : 'Job not found. Please check the job ID.'}
                </p>
            </motion.div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-2xl mx-auto bg-[#F4F5F7] rounded-xl border border-gray-200 p-6 sm:p-8"
            >


                {job ? (
                    <motion.form
                        variants={containerVariants}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        role="form"
                        aria-label="Job application form"
                    >
                        {/* Name */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="name"
                                className="block text-sm sm:text-base font-semibold text-gray-900 mb-1"
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 rounded-full border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                                aria-describedby={errors.name ? 'name-error' : undefined}
                                disabled={isSubmitting}
                            />
                            {errors.name && (
                                <p id="name-error" className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </motion.div>

                        {/* Email */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="email"
                                className="block text-sm sm:text-base font-semibold text-gray-900 mb-1"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-full border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                                aria-describedby={errors.email ? 'email-error' : undefined}
                                disabled={isSubmitting}
                            />
                            {errors.email && (
                                <p id="email-error" className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </motion.div>

                        {/* Phone */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="phone"
                                className="block text-sm sm:text-base font-semibold text-gray-900 mb-1"
                            >
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-3 rounded-full border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                                aria-describedby={errors.phone ? 'phone-error' : undefined}
                                disabled={isSubmitting}
                            />
                            {errors.phone && (
                                <p id="phone-error" className="text-red-500 text-sm mt-1">
                                    {errors.phone}
                                </p>
                            )}
                        </motion.div>

                        {/* Resume Upload */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="resume"
                                className="block text-sm sm:text-base font-semibold text-gray-900 mb-1"
                            >
                                Resume (PDF)
                            </label>
                            <div
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                className={`w-full p-6 border-2 border-dashed border-gray-300 rounded-xl text-center transition-all duration-200 ${isDragging ? 'bg-gray-100 border-indigo-500' : 'bg-white'
                                    }`}
                                role="region"
                                aria-label="Drag and drop resume upload"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        fileInputRef.current?.click();
                                    }
                                }}
                            >
                                <input
                                    id="resume"
                                    name="resume"
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileInputChange}
                                    className="hidden"
                                    ref={fileInputRef}
                                    disabled={isSubmitting}
                                    aria-describedby={errors.resume ? 'resume-error' : undefined}
                                />
                                <p className="text-gray-600 text-sm sm:text-base">
                                    {formData.resume
                                        ? `Selected: ${formData.resume.name}`
                                        : 'Drag and drop your PDF resume here or click to select'}
                                </p>
                                {!formData.resume && (
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="mt-2 px-4 py-2 bg-gray-100 text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        Select File
                                    </button>
                                )}
                            </div>
                            {errors.resume && (
                                <p id="resume-error" className="text-red-500 text-sm mt-1">
                                    {errors.resume}
                                </p>
                            )}
                        </motion.div>

                        {/* Cover Letter */}
                        <motion.div variants={itemVariants}>
                            <label
                                htmlFor="coverLetter"
                                className="block text-sm sm:text-base font-semibold text-gray-900 mb-1"
                            >
                                Cover Letter (Optional)
                            </label>
                            <textarea
                                id="coverLetter"
                                name="coverLetter"
                                value={formData.coverLetter}
                                onChange={handleInputChange}
                                placeholder="Enter your cover letter"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                                rows={5}
                                disabled={isSubmitting}
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div variants={itemVariants} className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-3 bg-lighter text-white font-semibold rounded-full hover:bg-primary transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </motion.div>

                        {/* Submission Status */}
                        {submitStatus === 'success' && (
                            <motion.p
                                variants={itemVariants}
                                className="text-green-600 text-sm sm:text-base text-center mt-4"
                            >
                                Application submitted successfully!
                            </motion.p>
                        )}
                        {submitStatus === 'error' && (
                            <motion.p
                                variants={itemVariants}
                                className="text-red-500 text-sm sm:text-base text-center mt-4"
                            >
                                Submission failed. Please try again.
                            </motion.p>
                        )}
                    </motion.form>
                ) : (
                    <motion.p
                        variants={itemVariants}
                        className="text-red-500 text-sm sm:text-base text-center"
                    >
                        Job not found. Please check the job ID or select a valid job opening.
                    </motion.p>
                )}
            </motion.div>
        </section>
    );
};

export default ApplyForm;