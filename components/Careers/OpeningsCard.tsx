'use client';
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight as RightArrow, FaChevronDown, FaChevronUp } from 'react-icons/fa6';

interface OpeningsCardProps {
  title: string;
  workHours: string;
  location: string;
  desc: string;
  responsibilities: string[];
  salary: string;
  workMode: string;
  applyLink: string;
}

const cardVariants: Variants = {
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

const contentVariants: Variants = {
  collapsed: { height: 0, opacity: 0, overflow: 'hidden' },
  expanded: {
    height: 'auto',
    opacity: 1,
    overflow: 'visible',
    transition: {
      height: { duration: 0.3, ease: 'easeInOut' },
      opacity: { duration: 0.2, delay: 0.1 },
    },
  },
};

const OpeningsCard: React.FC<OpeningsCardProps> = ({
  title,
  workHours,
  location,
  desc,
  responsibilities,
  salary,
  workMode,
  applyLink,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="bg-[#F4F5F7] rounded-xl border border-gray-200 p-6"
    >
      <div className="flex flex-col gap-4">
        {/* Header Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-600 text-sm sm:text-base">
            <span>{workHours}</span>
            <span className="hidden sm:inline">•</span>
            <span>{location}</span>
          </div>
        </div>

        {/* Actions Section */}
        <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between items-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center gap-2 text-gray-900 font-semibold text-sm sm:text-base hover:text-gray-700 transition-all duration-200 focus:outline-none w-full sm:w-auto text-left"
            aria-expanded={isExpanded}
            aria-controls={`details-${title}`}
          >
            {isExpanded ? 'View Less' : 'View More'}
            {isExpanded ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
          </button>
          {!isExpanded && ( // Conditionally render the Apply Now button
            <Link
              href={`/careers/${applyLink}`}
              className="px-6 py-2 bg-white font-semibold rounded-full hover:bg-synergy-dark-100 transition-all duration-200 focus:outline-none w-full sm:w-auto text-center"
            >
              Apply Now
            </Link>
          )}
        </div>

        {/* Expanded Content */}
        <motion.div
          variants={contentVariants}
          initial="collapsed"
          animate={isExpanded ? 'expanded' : 'collapsed'}
          id={`details-${title}`}
        >
          <div className="space-y-4 text-gray-700">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Description</h3>
              <p className="text-sm sm:text-base">{desc}</p>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Responsibilities</h3>
              <ul className="list-disc pl-5 text-sm sm:text-base">
                {responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Salary */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Salary</h3>
              <p className="text-sm sm:text-base">{salary}</p>
            </div>

            {/* Work Mode */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Work Mode</h3>
              <p className="text-sm sm:text-base">{workMode}</p>
            </div>

            {/* Apply Button in Expanded State */}
            <div className="pt-4 flex">
              <Link
                href={`/careers/${applyLink}`}
                className="flex px-6 py-2 bg-lighter text-white font-semibold rounded-full hover:bg-primary transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center items-center justify-center gap-2 w-full sm:w-auto"
              >
                Apply Now <RightArrow />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OpeningsCard;