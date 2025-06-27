'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealProps extends ComponentPropsWithoutRef<'div'> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'center center'],
  });

  if (typeof children !== 'string') {
    throw new Error('TextReveal: children must be a string');
  }

  const words = children.split(/(\s+|\n)/);


  return (
    <div ref={targetRef} className={cn('relative z-0 ', className)}>
      <div
        className={
          ' mx-auto flex  items-center justify-center bg-transparent px-4 sm:px-6 py-6 sm:py-8'
        }
      >
        <span
          className={
            'flex flex-wrap justify-center text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-black/20'
          }
        >
          {words.map((word, i) => {
            if (word === '\n') {
              return <br key={`br-${i}`} />;
            }

            if (word.trim() === '') {
              return <span key={`space-${i}`}>{word}</span>; // preserve space
            }

            const start = i / words.length;
            const end = start + 0.9 / words.length;

            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}


        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const scale = useTransform(progress, range, [0.85, 1]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <span className="relative mx-1 sm:mx-1.5">
      <span className="absolute opacity-20">{children}</span>
      <motion.span
        style={{ opacity, scale, y }}
        className="text-black"
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        {children}
      </motion.span>
    </span>
  );
};