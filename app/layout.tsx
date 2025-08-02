import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigations/Navbar";
import LenisProvider from "@/wrapper/LenisScrollWrapper";
import Footer from "@/components/Navigations/Footer";
import { Toaster } from "react-hot-toast";
import { OrganizationJsonLd } from 'next-seo';


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    template: '%s | Savita Synergy',
    default: 'Savita Synergy | Aluminum Extrusion & Industrial Solutions',
  },
  description: 'Discover Savita Synergy’s premium aluminum extrusion profiles and sustainable industrial solutions for construction, architecture, and renewable energy.',
  keywords: ['Savita Synergy', 'aluminum extrusion', 'industrial solutions', 'sustainable manufacturing', 'aluminum profiles'],
  openGraph: {
    siteName: 'Savita Synergy',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.savitasynergy.com',
    title: 'Savita Synergy | Aluminum Extrusion & Industrial Solutions',
    description: 'Discover Savita Synergy’s premium aluminum extrusion profiles and sustainable industrial solutions for construction, architecture, and renewable energy.',
    images: [
      {
        url: 'https://www.savitasynergy.com/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Savita Synergy Aluminum Solutions',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}  antialiased`}
      >
        <LenisProvider>

          <Navbar />
          <Toaster position="top-right" />

          {children}

          
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
