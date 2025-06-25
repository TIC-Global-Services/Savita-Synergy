'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, useState, useEffect } from 'react';
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

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide content
  const slides = [
    {
      title: 'Our Mission',
      description:
        'Delivering complete aluminum solutions with trust, quality, and long-term commitment — from first inquiry to final delivery. We aim to serve diverse needs with reliable products, thoughtful service, and a strong foundation built on care, consistency, and continuous improvement.',
    },
    {
      title: 'Our Vision',
      description:
        'To be a globally trusted name in aluminum — leading with integrity, growing with purpose, and delivering value at every step.',
    },
  ];

  // Automatic slide transition
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [slides.length]);

  // Handle dot click
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
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

      {/* Carousel content */}
      <div className="relative z-10 flex flex-col items-center text-center justify-center text-white px-4 sm:px-6 md:px-8 w-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index > currentSlide ? 100 : -100 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              x: index === currentSlide ? 0 : index > currentSlide ? 100 : -100,
            }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="absolute flex flex-col items-center justify-center"
            style={{ display: index === currentSlide ? 'flex' : 'none' }}
          >
            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 drop-shadow-md"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mb-3 sm:mb-4 md:mb-6 drop-shadow-md"
            >
              {slide.description}
            </motion.p>
          </motion.div>
        ))}


      </div>
      {/* Navigation dots */}
      <div className=" absolute bottom-6 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default OurMission;