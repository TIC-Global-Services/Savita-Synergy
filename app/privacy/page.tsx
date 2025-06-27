'use client';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

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

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-30 px-6 lg:px-20 bg-gray-50 min-h-screen">
      <div className="mx-auto ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          {/* Header */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base text-gray-800 text-center"
          >
            Last Updated: June 25, 2025
          </motion.p>

          {/* Introduction */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              We, at Savita Synergy Pvt. Ltd. (hereinafter referred to as “we” or “us”), understand how important privacy is to our customers. This Privacy Policy (hereinafter referred to as “Privacy Policy”) will help you understand what information we collect from you and process using this website, how we obtain it, and what choices and rights you have about your data.
            </p>
            <p className="text-base text-gray-800 leading-relaxed">
              Savita Synergy Pvt. Ltd.’s website may introduce you to and communicate with you about products and services marketed in India. Savita Synergy is committed to protecting the information that you share with us and explaining how we collect, process, and share that information.
            </p>
            <p className="text-base text-gray-800 leading-relaxed">
              You must read this Privacy Policy together with any other privacy policy, statement, or processing policy we may provide on specific occasions when we are collecting or processing Personal Information so that you are fully aware of how and why we are using your Personal Information. This Privacy Policy supplements other notices and privacy policies and is not intended to override them.
            </p>
          </motion.div>

          {/* Information We Collect */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-800 leading-relaxed">
              <li>
                <strong>Personal Data:</strong> When you interact with our website (such as filling out a contact form or making a purchase), we might collect personal information such as your name, email address, phone number, and any other details you voluntarily provide.
              </li>
              <li>
                <strong>Usage Data:</strong> We automatically collect certain information about your visit, including your IP address, browser type, referring/exit pages, and operating system. This data helps us understand how our website is used and to improve its performance.
              </li>
            </ul>
          </motion.div>

          {/* Purposes of Data Use */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Data</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              We use your data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-800 leading-relaxed">
              <li>To operate and maintain our website.</li>
              <li>To personalize your experience and to respond to your requests.</li>
              <li>To improve our site based on your usage and feedback.</li>
              <li>To send periodic emails (with your permission) about updates, services, or offers that might interest you.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
            </ul>
          </motion.div>

          {/* Cookies and Tracking */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Cookies and Tracking Technologies</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze usage trends, and gather demographic information. You can adjust your browser settings to refuse cookies, but this may affect how you experience our website.
            </p>
          </motion.div>

          {/* Data Sharing and Disclosure */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Data Sharing and Disclosure</h2>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-800 leading-relaxed">
              <li>
                <strong>Third Parties:</strong> We do not sell or share your personal information with third parties for their marketing purposes.
              </li>
              <li>
                <strong>Service Providers:</strong> We may share necessary information with trusted third-party service providers who assist us in operating our website or servicing you. These providers are obligated to keep your data confidential and secure.
              </li>
              <li>
                <strong>Legal Requirements:</strong> In certain circumstances, we may be required to disclose your information if mandated by law or in response to valid requests by public authorities.
              </li>
            </ul>
          </motion.div>

          {/* Data Security */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Data Security</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. Despite our efforts, no transmission over the internet or storage method is entirely secure, and we cannot guarantee absolute security.
            </p>
          </motion.div>

          {/* Your Rights */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Your Rights</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-gray-800 leading-relaxed">
              <li>Access, correct, update, or request deletion of your personal information.</li>
              <li>Object to or restrict certain types of data processing.</li>
              <li>Request data portability.</li>
            </ul>
            <p className="text-base text-gray-800 leading-relaxed">
              If you wish to exercise these rights, please contact us using the information provided in the Contact section.
            </p>
          </motion.div>

          {/* Third-Party Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Third-Party Links</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              Our website may include links to external sites that are not operated by us. Please note that we are not responsible for the privacy practices or content of these sites. We encourage you to review the privacy policies of any site you visit.
            </p>
          </motion.div>

          {/* Changes to Privacy Policy */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Changes to This Privacy Policy</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices, legal obligations, or operational needs. We advise you to review this page regularly for any updates. Your continued use of the website constitutes acceptance of any modifications.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-base text-gray-800 leading-relaxed">
              Savita Synergy Pvt. Ltd.<br />
              Email: <Link href={'mailto:legal@savitasynergy.com'} className=' font-semibold'>legal@savitasynergy.com</Link><br />
              Phone: [Insert Phone Number]<br />
              Address: [Insert Address]
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;