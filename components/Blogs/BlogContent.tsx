'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      style={{ counterReset: 'image-counter' }}
    >
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl sm:text-5xl font-bold mb-6  text-primary">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl sm:text-4xl font-semibold mt-12 mb-4 border-b-2 border-synergy-200 pb-2">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl sm:text-3xl font-medium mt-10 mb-3 text-secondary">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-synergy-800">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>
          ),
          li: ({ children }) => (
            <li className="text-base sm:text-lg text-synergy-800">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-primary">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-synergy-600">{children}</em>
          ),
          img: ({ src, alt }) => (
            <span
              className={`block my-8 max-w-md rounded-lg overflow-hidden `}
            >
              <Image
                src={typeof src === 'string' ? src : '/images/placeholder.jpg'}
                alt={alt || 'Blog image'}
                width={400}
                height={200}
                className="object-cover aspect-video w-full h-auto rounded-lg"
                priority={false}
              />
            </span>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </motion.div>
  );
};

export default BlogContent;