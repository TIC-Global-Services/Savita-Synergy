'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { jobOpenings, JobCategory } from '@/data/JobOpenings';
import OpeningsCard from './OpeningsCard';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.2,
    },
  },
};

const headerVariants: Variants = {
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

const CurrentOpenings: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className=" mx-auto">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-8 "
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Current Openings
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl ">
            We’re actively hiring for the following roles:
          </p>
        </motion.div>
        {jobOpenings.map((category: JobCategory) => (
          <motion.div
            key={category.type}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
              {category.type}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {category.openings.map((job) => (
                <OpeningsCard
                  key={job.id}
                  title={job.title}
                  workHours={job.workHours}
                  location={job.location}
                  desc={job.desc}
                  responsibilities={job.responsibilities}
                  salary={job.salary}
                  workMode={job.workMode}
                  applyLink={job.applyLink}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CurrentOpenings;