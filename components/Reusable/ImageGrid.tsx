'use client';
import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

export interface GridImage {
  id: string;
  src: StaticImageData;
  alt: string;
  link?: string;
}

export interface ImageGridProps {
  images: GridImage[];
  onImageClick?: (image: GridImage) => void;
  className?: string;
  imageHeight?: string;
}

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

const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  onImageClick,
  className = '',
  imageHeight = 'h-48 sm:h-64',
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GridImage | null>(null);

  const handleImageClick = (image: GridImage) => {
    setSelectedImage(image);
    if (onImageClick) {
      onImageClick(image);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className={`py-6  bg-gray-50 ${className}`}>
        <div className="mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-3 gap-4"
          >
            {images.map((image) => {
              const imageContent = (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  className={`relative ${imageHeight} overflow-hidden rounded-lg ${
                    onImageClick || image.link ? 'cursor-pointer' : ''
                  }`}
                  onHoverStart={() => setHoveredId(image.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`object-cover transition-all duration-300 ${
                      hoveredId && hoveredId !== image.id ? 'blur-[2px]' : 'blur-none'
                    }`}
                    sizes="(max-width: 640px) 33vw, 33vw"
                    quality={80}
                  />
                  <div
                    className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                </motion.div>
              );

              return image.link ? (
                <div key={image.id} className="block">
                  {imageContent}
                </div>
              ) : (
                imageContent
              );
            })}
          </motion.div>
        </div>
      </section>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl w-full h-[90vh] p-4 cursor-pointer">
            <button
              onClick={closeModal}
              className="absolute top-10  md:top-4 right-4 text-white text-2xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              quality={90}
              sizes="100vw"
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ImageGrid;