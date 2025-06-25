'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FC } from 'react';
import OurMissionImg from '@/assets/About/OurMission-BG.jpg';

const OurMission: FC = () => {
  const { scrollY } = useScroll();
  // Parallax effect: subtle movement and scaling
  const yScrollY = useTransform(scrollY, [0, 300], [0, 30]);
  const scaleTransform = useTransform(scrollY, [0, 300], [1, 1.03]);
  // Disable parallax on mobile for performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const y = isMobile ? 0 : yScrollY;
  const scale = isMobile ? 1 : scaleTransform;

  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Combined image and overlay */}
      <motion.div
        style={{ y, scale }}
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src={OurMissionImg}
          alt="Our Mission Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#708C24]/50" /> {/* Overlay with 50% opacity */}
      </motion.div>

      {/* Centered content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
        className="relative z-10 flex flex-col items-center text-center justify-center text-white px-4 sm:px-6 md:px-8"
      >
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
          className="text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 drop-shadow-md"
        >
          Our Mission
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.8 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mb-3 sm:mb-4 md:mb-6 drop-shadow-md"
        >
          Delivering complete aluminum solutions with trust, quality, and long-term commitment — from first inquiry to final delivery. We aim to serve diverse needs with reliable products, thoughtful service, and a strong foundation built on care, consistency, and continuous improvement.
        </motion.p>
        
      </motion.div>
    </section>
  );
};

export default OurMission;