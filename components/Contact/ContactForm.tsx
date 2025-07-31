"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaPhone as Phone, FaMapLocationDot as Address, FaChevronDown as ChevronDown, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoIosMail as Mail } from "react-icons/io";
import toast from "react-hot-toast";
import { CustomToast } from "../Reusable/CustomToast";
import Link from "next/link";
import {
  FaFacebook as FaceBookIcon,
  FaInstagram as InstaIcon,
  FaLinkedin as LinkedinIcon,
  FaYoutube as YoutubeIcon,
} from "react-icons/fa";
import { MailIcon } from "lucide-react";

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
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const hoverVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const productOptions = [
    { value: "", label: "Select a product" },
    { value: "aluminum", label: "Aluminum" },
    { value: "ingots-billets", label: "Ingots & Billets" },
    { value: "extrusions-profiles", label: "Extrusions & Profiles" },
    { value: "custom-dies", label: "Custom Dies" },
    { value: "anodizing", label: "Anodizing" },
    { value: "powder-coating", label: "Powder Coating" },
    { value: "others", label: "Others" },
  ];

  const socials = [
    {
      title: "Facebook",
      link: "https://facebook.com/savitasynergy",
      icon: FaceBookIcon,
    },
    {
      title: "Instagram",
      link: "https://instagram.com/savitasynergy",
      icon: InstaIcon,
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/company/savitasynergy/",
      icon: LinkedinIcon,
    },
    {
      title: "Youtube",
      link: "https://www.youtube.com/@savitasynergy",
      icon: YoutubeIcon,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitStatus("idle");
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "", product: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    }
    if (!formData.product) {
      newErrors.product = "Please select a product";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const getCurrentTimestamp = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return now.toLocaleString("en-IN", options);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const timestamp = getCurrentTimestamp();
      const submissionData = { ...formData, timestamp };

      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbzvy7oEqt2sSfa_8JQujrEqHMqaDjGXEUndqzywCbMTgCxB4dMypfoCEu6UydjECQSL/exec";

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      setSubmitStatus("success");
      toast.custom(
        (t) => <CustomToast message="Message sent successfully!" t={t} type="success" />,
        { duration: 3000 }
      );
      setFormData({ name: "", email: "", phone: "", product: "", message: "" });
    } catch (error) {
      toast.custom(
        (t) => <CustomToast message="Failed to send message. Try again." t={t} type="error" />,
        { duration: 3000 }
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 ">
      <motion.div variants={itemVariants} className="text-center mb-12 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Looking for Custom Aluminium Solutions?
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          We manufacture and supply high-grade aluminium products customized to your needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Contact Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#F6F7F7] rounded-lg p-6 sm:p-8"
        >
          <motion.form
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="space-y-6"
            role="form"
            aria-label="Contact form"
            aria-busy={isSubmitting}
          >
            {/* Name */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lighter transition-all"
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-required="true"
                aria-invalid={!!errors.name}
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
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lighter transition-all"
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-required="true"
                aria-invalid={!!errors.email}
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
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lighter transition-all"
                aria-describedby={errors.phone ? "phone-error" : undefined}
                aria-required="true"
                aria-invalid={!!errors.phone}
                disabled={isSubmitting}
              />
              {errors.phone && (
                <p id="phone-error" className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </motion.div>

            {/* Product Selection */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="product"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Product/Service Interest <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <select
                  id="product"
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-lighter transition-all appearance-none cursor-pointer bg-white"
                  aria-describedby={errors.product ? "product-error" : undefined}
                  aria-required="true"
                  aria-invalid={!!errors.product}
                  disabled={isSubmitting}
                >
                  {productOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
                  size={16}
                />
              </div>
              {errors.product && (
                <p id="product-error" className="text-red-500 text-sm mt-1">
                  {errors.product}
                </p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Enter your message"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lighter transition-all"
                rows={5}
                aria-required="true"
                disabled={isSubmitting}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-lighter text-white font-semibold rounded-lg hover:bg-primary transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-lighter disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                aria-label={isSubmitting ? "Sending message" : "Send message"}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.div>

            {/* Submission Status */}
            {submitStatus === "success" && (
              <motion.p
                variants={itemVariants}
                className="text-green-600 text-sm text-center"
              >
                Message sent successfully! We&apos;ll get back to you soon.
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                variants={itemVariants}
                className="text-red-500 text-sm text-center"
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>
        </motion.div>

        {/* Contact Details Section */}
        <motion.div
          variants={itemVariants}
          className="space-y-8 py-6 flex flex-col justify-between  p-6 sm:p-8"
        >
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Why Choose Savita Synergy?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Trusted by clients across India for quality, reliability, and service.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            {[
              "Fast quotes. Fair pricing. Reliable delivery",
              "10+ years of aluminium expertise",
              "Serving 15+ industries across India",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#F6F7F7] rounded-md px-4 py-6 font-medium text-gray-700 "
              >
                {item}
              </div>
            ))}
          </div>

          {/* Contact Details */}
          <div className="space-y-6 ">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone size={20} className="mt-1 text-primary" />
              <div>
                <p className="font-semibold text-gray-800">Call Us</p>
                <Link href="tel:+919875550437" className="block hover:text-primary text-sm">
                  +91 9875550437
                </Link>
                <Link href="tel:+919330838236" className="block hover:text-primary text-sm">
                  +91 9330838236
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <MailIcon size={20} className="mt-1 text-primary" />
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <Link
                  href="mailto:contact@savitasynergy.com"
                  className="block hover:text-primary text-sm break-all"
                >
                  contact@savitasynergy.com
                </Link>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <Address size={20} className="mt-1 text-primary" />
              <div>
                <p className="font-semibold text-gray-800">Address</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Plot No. 96, Sector 1A, Khopar Khairane,<br />
                  Navi Mumbai - 400709,<br />
                  Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t pt-4">
            <p className="font-semibold text-gray-800 mb-2 text-center">
              Follow Us
            </p>
            <div className="flex gap-4 items-center justify-center">
              {socials.map((social) => (
                <motion.div
                  key={social.title}
                  variants={hoverVariants}
                  whileHover="hover"
                >
                  <Link
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.title}`}
                    className="text-gray-600 transition-colors duration-200"
                  >
                    <social.icon size={24} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactForm;