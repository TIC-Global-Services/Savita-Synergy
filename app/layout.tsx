import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navigations/Navbar";
import LenisProvider from "@/wrapper/LenisScrollWrapper";
import Footer from "@/components/Navigations/Footer";
import { Toaster } from "react-hot-toast";
import CookieConsent from "@/components/Reusable/CookieConsent";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Savita Synergy",
  description: "Savita Synergy (previously called Savita Metal),  is a distinguished player in the aluminum industry, specializing in the trade and distribution of premium-quality aluminum-related goods and aluminum scrap.",
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

          
          <CookieConsent />
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
