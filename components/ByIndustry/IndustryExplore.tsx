'use client'
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import {
  ArchOne, ArchTwo, ArchThree,
  InteriorOne, InteriorTwo, InteriorThree,
  TransportOne, TransportTwo, TransportThree,
  IndusOne, IndusTwo, IndusThree,
  ReneOne, ReneTwo, ReneThree,
  RetailOne, RetailTwo, RetailThree
} from '@/assets/ByIndustry/ByIndustryImages';
import ImageGrid, { GridImage } from '@/components/Reusable/ImageGrid';

interface Industry {
  title: string;
  desc: string;
  images: GridImage[];
  link: string;
}

const sectionVariants:Variants = {
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

const IndustryExplore: React.FC = () => {
  const industries: Industry[] = [
    {
      title: 'Architecture & Construction',
      desc: 'Aluminum for windows, doors, and curtain wall systems.',
      images: [
        { id: 'arch1', src: ArchOne, alt: 'Architecture image 1', link: '/industries/architecture-construction' },
        { id: 'arch2', src: ArchTwo, alt: 'Architecture image 2', link: '/industries/architecture-construction' },
        { id: 'arch3', src: ArchThree, alt: 'Architecture image 3', link: '/industries/architecture-construction' },
      ],
      link: '/industries/architecture-construction',
    },
    {
      title: 'Interior Design',
      desc: 'Products for modular furniture, partition systems, and custom designs.',
      images: [
        { id: 'interior1', src: InteriorOne, alt: 'Interior design image 1', link: '/industries/interior-design' },
        { id: 'interior2', src: InteriorTwo, alt: 'Interior design image 2', link: '/industries/interior-design' },
        { id: 'interior3', src: InteriorThree, alt: 'Interior design image 3', link: '/industries/interior-design' },
      ],
      link: '/industries/interior-design',
    },
    {
      title: 'Transportation & Automotive',
      desc: 'Aluminum parts used in trucks, buses, and railway fittings.',
      images: [
        { id: 'transport1', src: TransportOne, alt: 'Transportation image 1', link: '/industries/transportation-automotive' },
        { id: 'transport2', src: TransportTwo, alt: 'Transportation image 2', link: '/industries/transportation-automotive' },
        { id: 'transport3', src: TransportThree, alt: 'Transportation image 3', link: '/industries/transportation-automotive' },
      ],
      link: '/industries/transportation-automotive',
    },
    {
      title: 'Industrial Applications',
      desc: 'Use in machinery, enclosures, and HVAC systems.',
      images: [
        { id: 'indus1', src: IndusOne, alt: 'Industrial application image 1', link: '/industries/industrial-applications' },
        { id: 'indus2', src: IndusTwo, alt: 'Industrial application image 2', link: '/industries/industrial-applications' },
        { id: 'indus3', src: IndusThree, alt: 'Industrial application image 3', link: '/industries/industrial-applications' },
      ],
      link: '/industries/industrial-applications',
    },
    {
      title: 'Renewable Energy',
      desc: 'Aluminum frames for solar panels and energy-efficient construction.',
      images: [
        { id: 'rene1', src: ReneOne, alt: 'Renewable energy image 1', link: '/industries/renewable-energy' },
        { id: 'rene2', src: ReneTwo, alt: 'Renewable energy image 2', link: '/industries/renewable-energy' },
        { id: 'rene3', src: ReneThree, alt: 'Renewable energy image 3', link: '/industries/renewable-energy' },
      ],
      link: '/industries/renewable-energy',
    },
    {
      title: 'Retail & Display',
      desc: 'Applications in exhibition stalls, shop fittings, and branding.',
      images: [
        { id: 'retail1', src: RetailOne, alt: 'Retail image 1', link: '/industries/retail-display' },
        { id: 'retail2', src: RetailTwo, alt: 'Retail image 2', link: '/industries/retail-display' },
        { id: 'retail3', src: RetailThree, alt: 'Retail image 3', link: '/industries/retail-display' },
      ],
      link: '/industries/retail-display',
    },
  ];


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className=" mx-auto">
        {industries.map((industry) => (
          <motion.div
            key={industry.title}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {industry.title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
                  {industry.desc}
                </p>
              </div>
            </div>
            <ImageGrid
              images={industry.images}
              imageHeight="h-48 sm:h-64"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustryExplore;