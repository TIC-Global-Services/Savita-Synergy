// app/page.tsx
import dynamic from "next/dynamic";

const FactoryTour = dynamic(() => import("../components/Home/FactoryTour"), {
  ssr: false, // Disable server-side rendering
});

export default function Home() {
  return <FactoryTour />;
}