'use client'
import { Metadata } from "next";
import dynamic from "next/dynamic";

const FactoryTour = dynamic(() => import("../components/Home/FactoryTour"), {
  ssr: false, 
});

// export const metadata: Metadata = {
//   title: 'Savita Synergy | Aluminum Extrusion & Industrial Solutions',
//   description: 'Explore Savita Synergy’s innovative aluminum extrusion profiles and sustainable industrial solutions for construction, architecture, and renewable energy.',
//   keywords: ['Savita Synergy', 'aluminum extrusion', 'structural profiles', 'architectural profiles', 'industrial solutions'],
//   openGraph: {
//     url: 'https://www.savitasynergy.com/',
//     title: 'Savita Synergy | Aluminum Extrusion & Industrial Solutions',
//     description: 'Explore Savita Synergy’s innovative aluminum extrusion profiles and sustainable industrial solutions for construction, architecture, and renewable energy.',
//   },
// };

export default function Home() {
  return (
    <div>
      <FactoryTour />
    </div>
  );
}