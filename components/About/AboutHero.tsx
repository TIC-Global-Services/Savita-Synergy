'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import AboutHeroImg from '@/assets/About/AboutHero-BG.jpg';

const AboutHero: React.FC = () => {
  const { scrollY } = useScroll();
  // Parallax effect: subtle movement and scaling
  const yScrollY = useTransform(scrollY, [0, 300], [0, 30]);
  const scaleTransform = useTransform(scrollY, [0, 300], [1, 1.03]);
  // Disable parallax on mobile for performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const y = isMobile ? 0 : yScrollY;
  const scale = isMobile ? 1 : scaleTransform;

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y, scale }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute w-full h-full"
      >
        <Image
          src={AboutHeroImg}
          alt="About Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 bg-black/80"
      />
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
        className="absolute left-3 sm:left-5 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-10 text-left text-white px-3 sm:px-5 md:px-6 lg:px-8"
      >
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4"
        >
          Shaping the Future of <br className="hidden sm:block" /> Aluminum Innovation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.8 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mb-3 sm:mb-4 md:mb-6"
        >
          With over 37+ years of engineering excellence, we deliver precision-crafted aluminum solutions for industries.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 120, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/contact"
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-white text-black rounded-full border border-white/30 hover:bg-white/80 transition-colors text-xs sm:text-sm md:text-base"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;