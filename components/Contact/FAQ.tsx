"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaChevronDown as ChevronDown } from "react-icons/fa6";

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

const answerVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      opacity: { duration: 0.3 },
      height: { duration: 0.3 },
    },
  },
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How can I place an order?",
    answer:
      "Placing an order is easy! You can visit our Navi Mumbai office for a direct consultation, or contact us by phone at +91 9875550437 or email at contact@savitasynergy.com. Our team is ready to help you.",
  },
  {
    question: "What is the minimum quantity to be ordered in one lot?",
    answer:
      "At Savita Synergy, there is no strict minimum order quantity. Whether you need just 1 kg or several tons, we are committed to fulfilling your requirements with the same level of dedication and service. We cater to both small-scale and bulk orders, ensuring flexibility for businesses of all sizes.",
  },
  {
    question: "What is the lead time required to execute an order?",
    answer:
      "If you are located near our branch, delivery is usually very fast. For other locations, the lead time typically ranges between 3 to 7 days, depending on the distance and logistics. We strive to ensure timely and efficient delivery for every order, regardless of the destination.",
  },
  {
    question: "Can the profiles be supplied in specific lengths?",
    answer:
      "Yes, at Savita Synergy, we offer aluminium profiles in both standard and customized lengths to suit your specific requirements. Whether you need conventional sizes or tailored dimensions, we are equipped to deliver as per your project needs.",
  },
  {
    question: "How many types of scraps do you trade?",
    answer:
      "We trade all major types of aluminium scrap, carefully segregated and sorted by grade to ensure high purity and consistency. Our meticulous sorting process allows us to meet the diverse needs of various industries with reliable, high-quality scrap materials.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F6F7F7]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg  overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-base sm:text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} className="text-gray-500" />
                </motion.div>
              </button>
              <motion.div
                id={`faq-answer-${index}`}
                variants={answerVariants}
                initial="hidden"
                animate={openIndex === index ? "visible" : "hidden"}
                className="px-6 pb-4 text-gray-600 text-sm sm:text-base"
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;