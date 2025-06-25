'use client';

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function FactoryTourVideo() {
  const ref = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      console.error('Video ref is null');
      setError('Video element not found');
      return;
    }

    const videoDuration = 107; // 1:47 in seconds, fallback value

    // Prevent default playback
    video.pause();
    video.currentTime = 0;

    // Named event handlers
    const handleLoadedMetadata = () => {
      console.log('Video loaded: duration', video.duration, 'seconds');
    };

    const handleCanPlay = () => {
      if (video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
        console.log('Video is ready to play');
        setIsVideoReady(true);
      }
    };

    const handleError = (e: Event) => {
      const errorObj = (e.target as HTMLVideoElement | null)?.error;
      const errorMsg = `Video error: ${errorObj?.message || errorObj?.code || 'Unknown error'}`;
      console.error(errorMsg);
      setError(errorMsg);
    };

    // Add event listeners
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    // Throttle video time updates
    let lastUpdate = 0;
    const throttleTime = 50; // Update every 50ms
    const updateVideoTime = (progress: number) => {
      const now = performance.now();
      if (now - lastUpdate < throttleTime) return;
      lastUpdate = now;
      if (!video) return;
      const duration = video.duration || videoDuration;
      const newTime = progress * duration;
      video.currentTime = Math.min(Math.max(newTime, 0), duration);
    };

    // GSAP ScrollTrigger setup
    let tl: gsap.core.Timeline | null = null;
    if (isVideoReady) {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: '+=32000', // Approx. 400vh * 800px = 32,000px for ~110s scroll
          scrub: 1, // Reduced for better performance
          pin: true,
          onUpdate: (self: ScrollTrigger) => {
            updateVideoTime(self.progress);
          },
        },
      });

      // Progress bar animation
      tl.to('.progress-bar', {
        scaleX: 1,
        transformOrigin: 'left',
        ease: 'none',
      });
    }

    // Cleanup
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isVideoReady]);

  return (
    <div ref={ref} className="w-full h-[100vh]">
      <div className="w-full h-screen sticky top-0 overflow-hidden">
        {error ? (
          <div className="flex items-center justify-center w-full bg-gray-900 h-full text-red-900">
            <p>Error: {error}. Please check the video file or try again.</p>
          </div>
        ) : (
          <>
            <motion.video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dek8wxl7o/video/upload/v1750839453/factory-tour_w18g6e.mp4"
              muted
              playsInline
              preload="auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVideoReady ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute bottom-4 left-4 right-4 h-1 bg-gray-300 rounded-full">
              <div className="progress-bar h-full bg-blue-600 rounded-full" style={{ transform: 'scaleX(0)', transformOrigin: 'left' }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}