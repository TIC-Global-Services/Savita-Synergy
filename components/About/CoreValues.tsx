'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const coreValuesData = [
  {
    letter: 'S',
    title: 'Service First',
    description: 'We lead with a mindset of serving — our customers, team, and partners.',
  },
  {
    letter: 'A',
    title: 'Authenticity',
    description: 'We act with integrity, staying true to our values and promises.',
  },
  {
    letter: 'V',
    title: 'Visionary Thinking',
    description: 'We innovate boldly, shaping the future with creative solutions.',
  },
  {
    letter: 'I',
    title: 'Inclusion',
    description: 'We embrace diverse perspectives to build stronger teams and ideas.',
  },
  {
    letter: 'T',
    title: 'Tenacity',
    description: 'We persevere through challenges with grit and determination.',
  },
  {
    letter: 'A',
    title: 'Adaptability',
    description: 'We thrive in change, evolving quickly to meet new opportunities.',
  },
];

const CoreValues = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoTime = useTransform(scrollYProgress, [0, 1], [0, 8]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    video.pause();

    let lastTime = 0;

    const unsubscribe = videoTime.on('change', (time) => {
      const newTime = Math.max(0, Math.min(time, 8));
      if (video.readyState >= 2) {
        video.currentTime = newTime;
      }

      const segment = Math.floor((newTime / 8) * 6);
      setCurrentIndex(Math.min(segment, 5));

      if (Math.abs(newTime - lastTime) > 0.01) {
        if (video.paused) {
          video.play().catch((error) => console.error('Playback error:', error));
        }
      } else if (!video.paused) {
        video.pause();
      }

      lastTime = newTime;
    });

    return () => {
      unsubscribe();
      video.pause();
    };
  }, [videoTime]);

  return (
    <div ref={ref} className="min-h-[300vh] py-16">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 drop-shadow-md text-gray-800"
        >
          Core Values
        </motion.h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] overflow-hidden"
          >
            <video
              ref={videoRef}
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/about-text/wb.webm" type='video/webm' />
              <source src="/about-text/lettermp.mp4" type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-md text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              {coreValuesData[currentIndex].title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {coreValuesData[currentIndex].description}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
