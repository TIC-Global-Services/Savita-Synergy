"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FullPageLoader from "../Reusable/FullPageLoader";

const FactoryTourMobile: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Optimize canvas context
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    const setCanvasSize = () => {
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio, 2); // Cap DPR for performance

      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
      canvas.style.left = "0px";
      canvas.style.top = "0px";

      context.scale(dpr, dpr);
    };

    setCanvasSize();

    const frameCount = 51;
    const currentFrame = (index: number) =>
      `/mobile-sequence/compressed/${(index + 60)
        .toString()
        .padStart(4, "0")}.png`;

    const images: HTMLImageElement[] = [];
    const tour = {
      frame: 0,
    };

    // Preload all images with progress tracking
    let loadedCount = 0;
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === frameCount) {

        setLoadPercentage((loadedCount / frameCount) * 100);
        setImagesLoaded(true);
        // Draw initial frame once all images are loaded
        drawFrame(0);
      }
    };

    // Load images
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous"; // Handle CORS if needed
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded; // Handle errors gracefully
      img.src = currentFrame(i);
      images.push(img);
    }

    // Optimized draw function
    const drawFrame = (frameIndex: number) => {
      const index = Math.min(
        Math.max(Math.floor(frameIndex), 0),
        frameCount - 1
      );
      const img = images[index];

      if (img && img.complete) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        // Calculate aspect ratio to maintain image proportions
        const canvasAspect = window.innerWidth / window.innerHeight;
        const imgAspect = img.naturalWidth / img.naturalHeight;

        let drawWidth = window.innerWidth;
        let drawHeight = window.innerHeight;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasAspect > imgAspect) {
          // Canvas is wider than image
          drawHeight = window.innerHeight;
          drawWidth = drawHeight * imgAspect;
          offsetX = (window.innerWidth - drawWidth) / 2;
        } else {
          // Canvas is taller than image
          drawWidth = window.innerWidth;
          drawHeight = window.innerHeight;
          offsetY = (window.innerHeight - drawHeight) / 2;
        }

        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Setup GSAP animation only after images are loaded
    let scrollTriggerInstance: ScrollTrigger | null = null;

    const setupAnimation = () => {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: canvas.parentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1, // Reduced scrub value for smoother response
        onUpdate: (self) => {
          const progress = self.progress;
          const targetFrame = progress * (frameCount - 1);

          // Use GSAP to smoothly animate between frames
          gsap.to(tour, {
            frame: targetFrame,
            duration: 0.1,
            ease: "none",
            overwrite: true,
            onUpdate: () => {
              drawFrame(tour.frame);
            },
          });
        },
      });
    };

    // Wait for images to load before setting up animation
    const checkImagesAndSetup = () => {
      if (imagesLoaded) {
        setupAnimation();
      }
    };

    // Use a small delay to ensure state is updated
    const timeoutId = setTimeout(checkImagesAndSetup, 100);

    const handleResize = () => {
      setCanvasSize();
      drawFrame(tour.frame);
    };

    // Throttle resize events
    let resizeTimeout: NodeJS.Timeout;
    const throttledResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", throttledResize);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", throttledResize);
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [imagesLoaded]);

  return (
    <div className="h-[2000px] bg-black flex justify-center relative">
      {!imagesLoaded && (
        <FullPageLoader percentage={loadPercentage} isVisible={isLoading} />
      )}
      <canvas
        id="canvas"
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-dvh object-cover"
        style={{
          opacity: imagesLoaded ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />
    </div>
  );
};

export default FactoryTourMobile;
