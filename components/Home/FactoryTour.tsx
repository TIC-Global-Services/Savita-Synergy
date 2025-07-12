'use client'
import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Video {
  id: number;
  src: string;
  text: string;
}

const videoFiles: Video[] = [
  { id: 1, src: '/Tour/1.mp4', text: 'Who We Are' },
  { id: 2, src: '/Tour/2.mp4', text: 'What We Do' },
  { id: 3, src: '/Tour/3.mp4', text: 'Aluminum Scrap' },
  { id: 4, src: '/Tour/4.mp4', text: 'Ingots and Billets' },
  { id: 5, src: '/Tour/5.mp4', text: 'Extrusions' },
  { id: 6, src: '/Tour/6.mp4', text: 'Custom Dies' },
  { id: 7, src: '/Tour/7.mp4', text: 'Aluminum Services' },
  { id: 8, src: '/Tour/8.mp4', text: 'Anodizing' },
  { id: 9, src: '/Tour/9.mp4', text: 'Powder Coating' },
  { id: 10, src: '/Tour/10.mp4', text: 'Fabrication' },
  { id: 11, src: '/Tour/11.mp4', text: 'Contact Us' },
  { id: 12, src: '/Tour/12.mp4', text: 'Form' },
];

const FactoryTour: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Lenis RAF loop
    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update(); // Ensure ScrollTrigger updates with Lenis
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Wait for all videos to load metadata
    const loadVideos = Promise.all(
      videoRefs.current.map((video) =>
        video
          ? new Promise((resolve) => {
              video.onloadedmetadata = () => resolve(video);
              video.load(); // Force load the video
            })
          : Promise.resolve(null),
      ),
    );

    loadVideos.then(() => {
      console.log('All videos loaded');
      const ctx = gsap.context(() => {
        videoFiles.forEach((video, index) => {
          const videoElement = videoRefs.current[index];
          const textElement = textRefs.current[index];

          if (videoElement && textElement) {
            // Set initial state
            gsap.set(videoElement, { opacity: index === 0 ? 1 : 0 });
            gsap.set(textElement, { opacity: index === 0 ? 1 : 0 });

            const duration = videoElement.duration || 5; // Fallback duration
            const sectionHeight = window.innerHeight * 1.5;

            // Create ScrollTrigger for each video
            ScrollTrigger.create({
              trigger: containerRef.current,
              start: `top+=${index * sectionHeight} top`,
              end: `top+=${(index + 1) * sectionHeight} top`,
              scrub: 0.5,
              onEnter: () => {
                console.log(`Playing video ${index + 1}: ${video.text}`);
                videoElement
                  .play()
                  .catch((err) => console.error(`Play error for video ${index + 1}:`, err));
                gsap.to(videoElement, { opacity: 1, duration: 0.5, ease: 'power2.in' });
                gsap.to(textElement, { opacity: 1, duration: 0.5, ease: 'power2.in' });
                // Fade out other videos and texts
                videoRefs.current.forEach((otherVideo, otherIndex) => {
                  if (otherIndex !== index && otherVideo) {
                    gsap.to(otherVideo, { opacity: 0, duration: 0.5, ease: 'power2.out' });
                    otherVideo.pause();
                    otherVideo.currentTime = 0;
                  }
                });
                textRefs.current.forEach((otherText, otherIndex) => {
                  if (otherIndex !== index && otherText) {
                    gsap.to(otherText, { opacity: 0, duration: 0.5, ease: 'power2.out' });
                  }
                });
              },
              onLeave: () => {
                console.log(`Pausing video ${index + 1}: ${video.text}`);
                videoElement.pause();
                videoElement.currentTime = 0;
                gsap.to(videoElement, { opacity: 0, duration: 0.5, ease: 'power2.out' });
                gsap.to(textElement, { opacity: 0, duration: 0.5, ease: 'power2.out' });
              },
              onEnterBack: () => {
                console.log(`Playing video ${index + 1} (back): ${video.text}`);
                videoElement
                  .play()
                  .catch((err) => console.error(`Play error for video ${index + 1}:`, err));
                gsap.to(videoElement, { opacity: 1, duration: 0.5, ease: 'power2.in' });
                gsap.to(textElement, { opacity: 1, duration: 0.5, ease: 'power2.in' });
              },
              onLeaveBack: () => {
                console.log(`Pausing video ${index + 1} (back): ${video.text}`);
                videoElement.pause();
                videoElement.currentTime = 0;
                gsap.to(videoElement, { opacity: 0, duration: 0.5, ease: 'power2.out' });
                gsap.to(textElement, { opacity: 0, duration: 0.5, ease: 'power2.out' });
              },
              onUpdate: (self) => {
                const progress = self.progress;
                videoElement.currentTime = progress * duration;
              },
            });
          }
        });

        // Set container height
        gsap.set(containerRef.current, {
          height: `${videoFiles.length * 150}vh`,
        });

        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();
      }, containerRef);

      return () => {
        lenis.destroy();
        ctx.revert();
      };
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {videoFiles.map((video, index) => (
          <div key={video.id} className="absolute inset-0">
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={video.src}
              className="h-full w-full object-cover"
              muted
              playsInline
              preload="auto"
            />
            <div
              ref={(el) => {
                textRefs.current[index] = el;
              }}
              className="absolute bottom-10 left-10 text-white text-4xl font-bold z-10"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
            >
              {video.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactoryTour;