'use client';

import React, { useState, useRef, useEffect } from 'react';
import Aluminium from '@/assets/Product/Aluminium.png';
import Extrusion from '@/assets/Product/Extrusion.png';
import CustomDies from '@/assets/Product/CustomDies.png';
import Ignots from '@/assets/Product/Ignots.png';
import Image from 'next/image';
import Link from 'next/link';

const ProductExplore = () => {
  const Products = [
    {
      name: 'Aluminum Scrap',
      desc: 'We source and supply high-quality aluminum scrap suitable for recycling and manufacturing, ensuring consistent material quality for industrial use.',
      img: Aluminium,
      catalogue: '/catelogues/aluminium.pdf',
    },
    {
      name: 'Ignots & Billets',
      desc: 'Our aluminum ingots and billets are produced to exacting standards, ideal for further processing in casting, rolling, and extrusion applications.',
      img: Ignots,
      catalogue: '/catelogues/ignots.pdf',
    },
    {
      name: 'Extrusions & Profiles',
      desc: 'We offer a wide range of extruded aluminum profiles in various shapes and grades, tailored for use in construction, automotive, and industrial projects.',
      img: Extrusion,
      catalogue: '/catelogues/extrusion.pdf',
      sublinks: [
        { title: 'Structural', link: '/products/extrusions-and-profiles' },
        { title: 'Architectural', link: '/products/extrusions-and-profiles' },
      ],
    },
    {
      name: 'Custom Dies',
      desc: 'We design and manufacture custom dies as per client specifications, enabling precision and flexibility in aluminum profile production.',
      img: CustomDies,
      catalogue: '/catelogues/customdies.pdf',
    },
  ];

  // State to track the currently visible product's catalogue
  const [activeCatalogue, setActiveCatalogue] = useState({
    href: Products[0].catalogue,
    name: Products[0].name,
  });

  // Refs for each product card
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        const mostVisible = entries.reduce((prev, curr) => {
          return curr.intersectionRatio > prev.intersectionRatio ? curr : prev;
        }, entries[0]);
        if (mostVisible.isIntersecting) {
          const index = Number(
            (mostVisible.target as HTMLElement).dataset.index
          );
          setActiveCatalogue({
            href: Products[index].catalogue,
            name: Products[index].name,
          });
        }
      },
      {
        threshold: [0.5], // Trigger when 50% of the card is visible
        rootMargin: '0px',
      }
    );

    // Observe each card
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup observer on unmount
    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="px-4 md:px-16 lg:px-20 py-8 sm:py-20 bg-gray-50">
      <div className="space-y-12 sm:space-y-16 mx-auto ">
        {Products.map((product, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            data-index={index}
            className="relative overflow-hidden transition-all duration-300"
          >
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold z-10 py-4 sm:py-6">
              {product.name}
            </h1>
            {/* Product Card */}
            <div className="relative w-full group">
              <Image
                src={product.img}
                alt={`${product.name} product image`}
                className="object-cover w-full aspect-[3/4] sm:aspect-[16/6] transition duration-500 group-hover:brightness-50 rounded-2xl group-hover:scale-102"
                priority={index === 0}
              />
              {/* Overlay Description and Sublinks */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 sm:p-6 rounded-2xl group-hover:scale-102 bg-black/50">
                <p className="text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-4 max-w-3xl">
                  {product.desc}
                </p>
                {/* Sublink Buttons */}
                {product.sublinks && (
                  <div className="flex gap-2 sm:gap-3 flex-wrap">
                    {product.sublinks.map((sublink, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sublink.link}
                        className=" underline text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm transition-transform duration-300 hover:scale-105"
                      >
                        {sublink.title}
                      </Link>
                    ))}
                  </div>
                )}

                <div className=' pt-4'>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-lighter text-white rounded-full hover:bg-gray-300 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Fixed Download Button */}
      <Link
        href={activeCatalogue.href}
        target="_blank"
        download
        rel="noopener noreferrer"
        aria-label={`Download catalogue for ${activeCatalogue.name}`}
        className="fixed -right-16 md:-right-20 top-1/2 -translate-y-1/2 rotate-[-90deg] bg-lighter text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-t-sm font-semibold text-xs sm:text-sm  hover:bg-primary transition-transform duration-300 hover:scale-105 whitespace-nowrap z-30"
      >
        Download Catalogue
      </Link>
    </div>
  );
};

export default ProductExplore;