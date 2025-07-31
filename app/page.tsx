'use client'
import dynamic from "next/dynamic";

const FactoryTour = dynamic(() => import("../components/Home/FactoryTour"), {
  ssr: false, 
});

export default function Home() {
  return <FactoryTour />;
}