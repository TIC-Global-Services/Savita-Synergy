"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FullPageLoader from "../Reusable/FullPageLoader";

type StaticContentProps = {
  title: string;
  desc?: string;
  linkText?: string;
  slug?: string;
  position?: string;
  scrollProgress?: number;
};

interface StaticContentMap {
  [key: number]: StaticContentProps;
}

const StaticContent: React.FC<StaticContentProps & { isVisible: boolean }> = ({
  title,
  desc,
  linkText,
  slug,
  position,
  isVisible,
  // scrollProgress,
}) => {
  const showLink = linkText && slug ;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`fixed text-white p-6 rounded-lg z-30 max-w-sm md:max-w-xl ${position}`}
          style={{
            pointerEvents: 'auto',
          }}
        >
          <h2 className=" text-xl mb-3 font-bold leading-tight text-lighter text-shadow-md">
            {title}
          </h2>
          {desc && (
            <p className="text-sm  mb-4 leading-relaxed text-gray-200 text-shadow-md">
              {desc}
            </p>
          )}
          {showLink && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4,  ease: "easeOut" }}
            >
              <Link
                href={`/${slug}`}
                className="inline-block text-center px-4 py-2 bg-lighter/60 backdrop-blur-sm rounded-full hover:bg-lighter/90 transition-all duration-300 text-sm font-medium border border-lighter/30 hover:border-lighter/50"
              >
                {linkText}
              </Link>
            </motion.div>
           )} 
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const staticContent: StaticContentMap = {
  0: {
    title: "Introduction",
    desc: "Welcome to our factory tour, showcasing our innovative processes.",
    linkText: "Learn More",
    slug: "introduction",
    position: "bottom-20 left-6",
  },
  2: {
    title: "Who Are We",
    desc: "At Savita Synergy, we offer end-to-end aluminum solutions — from aluminum scrap to finished products. As a leading aluminum trading and manufacturing company in India, we serve diverse industries with reliable processing, finishing, and distribution services.",
    linkText: "Our Story",
    slug: "about",
    position: "top-24 left-6",
  },
  4: {
    title: "What We Do",
    desc: "We offer a diverse range of aluminum products including high-quality aluminum scrap for recycling, precision-grade ingots and billets for casting and extrusion, and versatile extruded profiles for construction, automotive, and industrial applications.",
    position: "top-20 left-1/2 -translate-x-1/2 w-full",
  },
  6: {
    title: "Aluminum Scrap",
    desc: "Reliable material for recycling & manufacturing",
    position: "top-20 left-6 md:left-1/3 md:-translate-x-1/2",
    linkText: "Know More",
    slug: "products/aluminum-scrap",
  },
  8: {
    title: "Scrap Melting",
    desc: "Enhancing Quality Through Purity & Precision.",
    position: "top-20 right-6 md:top-40 md:left-20 md:right-auto",
  },
  10: {
    title: "Ingots and Billets",
    desc: "Quality Ingots & Billets for Precision Profiles",
    linkText: "Explore More",
    slug: "products/ignots-and-billets",
    position: "top-[30%] left-1/2 -translate-x-1/2  w-full",
  },
  12: {
    title: "Extrusion Process with Custom Dies",
    desc: "Precision-Made Profiles Start Here, From Custom Dies to Finished Extrusions.",
    position: "top-[10%] left-6",
    linkText: "Explore More",
    slug: "products/extrusions-and-profiles",
  },
  14: {
    title: "Aluminum Services",
    desc: "Our value-added services include anodizing for durable, corrosion-resistant finishes and powder coating in a wide variety of colors and textures for enhanced protection.",
    position: "top-[10%] left-1/2 -translate-x-1/2 w-full",
  },
  16: {
    title: "Anodizing",
    desc: "Durable, corrosion-resistant surface finish.",
    position: "top-[10%] left-1/2 -translate-x-1/2 w-full",
    linkText: "Explore More",
    slug: "services/anodizing",
  },
  18: {
    title: "Powder Coating",
    desc: "Premium textures & colors for aluminum.",
    position: "bottom-20 left-6",
    linkText: "Explore More",
    slug: "services/powder-coating",
  },
  20: {
    title: "Fabrication",
    desc: "End-to-end cutting, machining & finishing.",
    linkText: "Explore Services",
    slug: "services/custom-fabrication",
    position: "bottom-20 left-6",
  },
  22: {
    title: "Contact Us",
    desc: "Get in touch with our team for inquiries.",
    linkText: "Contact Now",
    slug: "contact",
    position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full",
  },
  24: {
    title: " ",
    desc: " ",
    position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
};

const frameRanges: { key: number; startFrame: number; endFrame: number }[] = [
  { key: 2, startFrame: 45, endFrame: 70 },
  { key: 4, startFrame: 340, endFrame: 480 },
  { key: 6, startFrame: 630, endFrame: 780 },
  { key: 8, startFrame: 880, endFrame: 1020 },
  { key: 10, startFrame: 1150, endFrame: 1350 },
  { key: 12, startFrame: 1800, endFrame: 2060 },
  { key: 14, startFrame: 2150, endFrame: 2320 },
  { key: 16, startFrame: 2330, endFrame: 2500 },
  { key: 18, startFrame: 2650, endFrame: 2780 },
  { key: 20, startFrame: 2770, endFrame: 2950 },
  { key: 22, startFrame: 3030, endFrame: 3140 },
];

const FactoryTourMobile: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  // Track viewport height changes including browser UI
  const updateViewportHeight = useCallback(() => {
    const vh = window.visualViewport?.height || window.innerHeight;
    setViewportHeight(vh);
    return vh;
  }, []);

  useEffect(() => {
    // Initial viewport height
    updateViewportHeight();

    // Listen for viewport changes (handles mobile browser UI changes)
    const handleViewportChange = () => {
      updateViewportHeight();
    };

    if ('visualViewport' in window) {
      window.visualViewport?.addEventListener('resize', handleViewportChange);
    }
    
    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('orientationchange', handleViewportChange);

    return () => {
      if ('visualViewport' in window) {
        window.visualViewport?.removeEventListener('resize', handleViewportChange);
      }
      window.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('orientationchange', handleViewportChange);
    };
  }, [updateViewportHeight]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    const setCanvasSize = () => {
      const canvasWidth = window.innerWidth;
      const canvasHeight = viewportHeight || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio, 2);

      console.log(canvasWidth, canvasHeight, dpr)

      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
      canvas.style.left = "0px";
      canvas.style.top = "0px";

      context.scale(dpr, dpr);
    };
    

    setCanvasSize();

    const frameCount = 3269;
    const currentFrameFn = (index: number) =>
      `/mobile-sequence/compressed/pillow/${(index + 1).toString().padStart(4, "0")}.webp`;

    const images: HTMLImageElement[] = [];
    const tour = { frame: 0 };
    let loadedCount = 0;
    let lastFrame = -1;

    const checkAllLoaded = () => {
      loadedCount++;
      setLoadPercentage((loadedCount / frameCount) * 100);
      if (loadedCount === frameCount) {
        setImagesLoaded(true);
        drawFrame(0);
        setIsLoading(false);
      }
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = checkAllLoaded;
      img.onerror = () => {
        console.error(`Failed to load image: ${currentFrameFn(i)}`);
        checkAllLoaded();
      };
      img.src = currentFrameFn(i);
      images.push(img);
    }

    const drawFrame = (frameIndex: number) => {
      const index = Math.min(Math.max(Math.floor(frameIndex), 0), frameCount - 1);
      if (index === lastFrame) return;
      lastFrame = index;
      setCurrentFrame(index);
    
      const img = images[index];
      if (img && img.complete) {
        const canvasWidth = window.innerWidth;
        const canvasHeight = viewportHeight || window.innerHeight;
        context.clearRect(0, 0, canvasWidth, canvasHeight);
    
        const canvasAspect = canvasWidth / canvasHeight;
        const imgAspect = img.width / img.height;
    
        let drawWidth, drawHeight, srcX, srcY;
    
        if (canvasAspect > imgAspect) {
          // Canvas is wider, crop top/bottom
          drawWidth = img.width;
          drawHeight = img.width / canvasAspect;
          srcX = 0;
          srcY = (img.height - drawHeight) / 2;
        } else {
          // Canvas is taller, crop sides
          drawHeight = img.height;
          drawWidth = img.height * canvasAspect;
          srcX = (img.width - drawWidth) / 2;
          srcY = 0;
        }
    
        const srcWidth = drawWidth;
        const srcHeight = drawHeight;
    
        context.drawImage(
          img,
          srcX, srcY, srcWidth, srcHeight, // source crop
          0, 0, canvasWidth, canvasHeight  // destination fit
        );
      }
    };
    

    let scrollTriggerInstance: ScrollTrigger | null = null;

    const setupAnimation = () => {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          const targetFrame = progress * (frameCount - 1);
          gsap.to(tour, {
            frame: targetFrame,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
            onUpdate: () => drawFrame(tour.frame),
          });
        },
      });
    };

    if (imagesLoaded) {
      setupAnimation();
    }

    const handleResize = () => {
      setCanvasSize();
      drawFrame(tour.frame);
      ScrollTrigger.refresh();
    };

    let resizeTimeout: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", throttledResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", throttledResize);
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [imagesLoaded, viewportHeight]);

  return (
    <div 
      ref={containerRef}
      className="h-[10000px] bg-black flex justify-center relative overflow-hidden"
    >
      {isLoading && <FullPageLoader percentage={loadPercentage} isVisible={isLoading} />}
      
      <canvas
        id="canvas"
        ref={canvasRef}
        className="fixed top-0 left-0 w-full object-cover z-10"
        style={{
          height: `${viewportHeight || '100vh'}`,
          opacity: imagesLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />

      {/* Content overlay */}
      <div className="fixed inset-0 pointer-events-none z-20">
        {frameRanges.map(({ key, startFrame, endFrame }) => {
          const content = staticContent[key];
          const isVisible = currentFrame >= startFrame && currentFrame <= endFrame;
          const scrollProgress = isVisible
            ? Math.min((currentFrame - startFrame) / (endFrame - startFrame), 1)
            : 0;

          return (
            <StaticContent
              key={key}
              {...content}
              isVisible={isVisible}
              scrollProgress={scrollProgress}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FactoryTourMobile;