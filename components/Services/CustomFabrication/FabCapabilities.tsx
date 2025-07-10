'use client';

import React from 'react';
import Image from 'next/image';
import AluminumExtrusion from '@/assets/Product/Ignots/aluminum-extrusion-profile.jpg';
import DieCasting from '@/assets/Product/Ignots/die-casting.jpg';
import ConductiveBars from '@/assets/Product/Ignots/conductive-bars.jpg';
import ForgedMachines from '@/assets/Product/Ignots/forged-and-machines.jpg';
import RolledSheets from '@/assets/Product/Ignots/conductive-bars.jpg'; // Added new image import

const FabCapbalities = () => {
    const content = [
        {
            title: 'Cutting, drilling, tapping, and milling',
            img: AluminumExtrusion,
        },
        {
            title: 'Punching, slotting, and notching for extrusion profiles',
            img: DieCasting,
        },
        {
            title: 'Surface finishing including brushing, buffing, and deburring',
            img: ConductiveBars,
        },
        {
            title: 'Custom assembly and packaging upon request',
            img: ForgedMachines,
        },
        {
            title: 'Precision work on aluminium profiles, plates, tubes, and components',
            img: RolledSheets, // Replaced placeholder with correct image
        },
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-20 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6  mx-auto py-10">
                {/* Title Cell */}
                <div className="col-span-1 sm:col-span-3 lg:col-span-1 flex items-start text-start justify-center">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 ">
                        Our Aluminium  <span className="text-lighter">Fabrication Capabilities</span>
                    </h1>
                </div>

                {/* Image Cards */}
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full h-[40vh] sm:h-[50vh] rounded-xl overflow-hidden shadow-lg group transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
                    >
                        <Image
                            src={item.img}
                            alt={item.title}
                            className="object-cover w-full h-full rounded-xl transition-opacity duration-300 group-hover:opacity-80"
                            fill
                            priority={index === 0}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl transition-opacity duration-300 group-hover:from-black/80" />
                        <div className="absolute bottom-0 w-full p-4 sm:p-6">
                            <p className="text-base sm:text-lg font-semibold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {item.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FabCapbalities;