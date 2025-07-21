'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { DigitalDisplayBoard } from './DigitalDisplayBoard';
import Link from 'next/link';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type StaticContentProps = {
  title: string;
  desc?: string;
  linkText?: string;
  slug?: string;
  position?: string;
  scrollProgress?: number; // Controls word reveal based on scroll
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
  scrollProgress,
}) => {
  // Split title and desc into words
  const titleWords = title.split(' ');
  const descWords = desc ? desc.split(' ') : [];
  const totalWords = titleWords.length + descWords.length;
  
  // Calculate number of words to show based on scrollProgress
  const safeScrollProgress = typeof scrollProgress === 'number' ? scrollProgress : 0;
  // Use a more gradual reveal - words appear throughout the scroll range
  const wordsToShow = Math.floor(safeScrollProgress * (totalWords + 1));
  
  // Show link when all words are revealed and we have some extra progress
  const showLink = linkText && slug && wordsToShow >= totalWords && safeScrollProgress > 0.8;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className={`absolute text-white p-4 rounded w-full max-w-xl ${position}`}
        >
          <h2 className="text-xl md:text-3xl mb-2 font-bold">
            {titleWords.map((word, index) => (
              <motion.span
                key={`title-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index < wordsToShow ? 1 : 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          {desc && (
            <p className="text-sm md:text-base mb-4">
              {descWords.map((word, index) => (
                <motion.span
                  key={`desc-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index + titleWords.length < wordsToShow ? 1 : 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0,
                  }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          )}
          {showLink && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0,
              }}
            >
              <Link
                href={`/${slug}`}
                className="text-center px-6 py-2 bg-lighter rounded-full hover:bg-primary transition-colors"
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

// Content mapping for static videos
const staticContent: StaticContentMap = {
  0: {
    title: 'Introduction',
    desc: 'Welcome to our factory tour, showcasing our innovative processes.',
    linkText: 'Learn More',
    slug: 'introduction',
    position: 'bottom-10 left-10',
  },
  2: {
    title: 'Who Are We',
    desc: 'At Savita Synergy, we offer end-to-end aluminum solutions — from aluminum scrap to finished products. As a leading aluminum trading and manufacturing company in India, we serve diverse industries with reliable processing, finishing, and distribution services. With facilities like AL13 Metal and HPG Coaters, and a presence across major cities, we deliver quality, consistency, and service at every step.',
    linkText: 'Our Story',
    slug: 'about',
    position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
  4: {
    title: 'What We Do',
    desc: 'We offer a diverse range of aluminum products including high-quality aluminum scrap for recycling, precision-grade ingots and billets for casting and extrusion, and versatile extruded profiles for construction, automotive, and industrial applications. We also design and manufacture custom dies to meet specific client requirements with high precision.',
    position: 'top-20 left-1/2 -translate-x-1/2 justify-start items-start flex flex-col',
  },
  6: {
    title: 'Aluminum Scrap',
    desc: 'Reliable material for recycling & manufacturing',
    position: 'top-20 md:left-1/3 md:-translate-x-1/2 justify-start items-start flex flex-col',
    linkText: 'Know More',
    slug: 'products/aluminum-scrap',
  },
  8: {
    title: 'Scrap Melting',
    desc: 'Enhancing Quality Through Purity & Precision.',
    position: 'top-20 md:top-40 md:left-20',
  },
  10: {
    title: 'Ingots and Billets',
    desc: 'Quality Ingots & Billets for Precision Profiles',
    linkText: 'Explore More',
    slug: 'products/ignots-and-billets',
    position: 'top-1/2 md:left-1/3 md:-translate-x-1/2 -translate-y-1/2',
  },
  12: {
    title: 'Extrusion Process with Custom Dies',
    desc: 'Precision-Made Profiles Start Here, From Custom Dies to Finished Extrusions.',
    position: 'top-10 md:left-10',
    linkText: 'Explore More',
    slug: 'products/extrusions-and-profiles',
  },
  14: {
    title: 'Aluminum Services',
    desc: 'Our value-added services include anodizing for durable, corrosion-resistant finishes and powder coating in a wide variety of colors and textures for enhanced protection. We also provide custom fabrication, cutting, and finishing services, enabling complete, end-to-end aluminum solutions.',
    position: 'top-10 md:left-1/2 md:-translate-x-1/2',
  },
  16: {
    title: 'Anodizing',
    desc: 'Durable, corrosion-resistant surface finish.',
    position: 'top-10 left-1/2 -translate-x-1/2',
    linkText: 'Explore More',
    slug: 'services/anodizing',
  },
  18: {
    title: 'Powder Coating',
    desc: 'Premium textures & colors for aluminum.',
    position: 'bottom-10 md:left-10',
    linkText: 'Explore More',
    slug: 'services/powder-coating',
  },
  20: {
    title: 'Fabrication',
    desc: 'End-to-end cutting, machining & finishing.',
    linkText: 'Explore Services',
    slug: 'services/custom-fabrication',
    position: 'bottom-10 md:left-1/6',
  },
  22: {
    title: 'Contact Us',
    desc: 'Get in touch with our team for inquiries.',
    linkText: 'Contact Now',
    slug: 'contact',
    position: 'top-1/2 left-1/2 -translate-x-1/2',
  },
  24: {
    title: 'Form',
    desc: 'Submit your details to connect with us.',
    linkText: 'Submit Form',
    slug: 'contact-form',
    position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
};

// Define video public IDs (replace with actual IDs from Cloudinary)
const videoPublicIds = [
  'frame_1_n7t142',
  'frame_2_tmmfln',
  'frame_3_zqarir',
  'frame_4_pahwur',
  'frame_5_fyeydp',
  'frame_6_lrhldh',
  'frame_7_ekvkxp',
  'frame_8_kqcg9r',
  'frame_9_s0fiix',
  'frame_10_cpt363',
  'frame_11_zltirx',
  'frame_12_wixnxv',
  'frame_13_ssjmdk',
  'frame_14_l9g3is',
  'frame_15_trimmed_zslodq',
  'frame_16_q1umul',
  'frame_17_trimmed_veqdd4',
  'frame_18_g6qfm3',
  'frame_19_we8ga1',
  'frame_20_rq9a7o',
  'frame_21_xpixex',
  'frame_22_c3dc50',
  'frame_23_irpnpf',
  'frame_24_nzwd2a',
  'frame_25_znbyzk',
];

const FactoryTour = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(Array(25).fill(null));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleContent, setVisibleContent] = useState<number | null>(0);
  const [showDisplayBoard, setShowDisplayBoard] = useState<boolean>(true);
  const [contentProgress, setContentProgress] = useState<number>(0);

  useEffect(() => {
    const videos = videoRefs.current;

    if (!sectionRef.current || videos.some((video) => !video)) {
      console.error('Section or video refs are not initialized');
      return;
    }

    // Preload all videos
    videos.forEach((video) => {
      if (video) {
        video.load();
      }
    });

    // Set initial state: video1 visible and playing, others hidden
    gsap.set(videos.slice(1).filter(Boolean), { autoAlpha: 0 });
    const firstVideo = videos[0] as HTMLVideoElement | null;
    if (firstVideo) {
      firstVideo.loop = true;
      firstVideo.play().catch((error: unknown) => {
        console.error('Error playing first video:', error);
      });
    }

    // Helper function to pause all videos except the active one
    const pauseOtherVideos = (activeIndex: number) => {
      videos.forEach((video, idx) => {
        if (video && idx !== activeIndex && !video.paused) {
          video.pause();
          video.loop = false;
        }
      });
    };

    // Create ScrollTrigger for video and content transitions
    const totalFrames = 25;
    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=1500%', 
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Calculate which frame should be active based on progress
        const frameProgress = progress * totalFrames;
        const currentFrame = Math.floor(frameProgress);
        let frameLocalProgress = frameProgress - currentFrame;
        
        // Add a "hold" period after content is fully revealed (last 15% of each frame)
        // This gives users 1 second to read the fully revealed content
        const holdThreshold = 0.85; // Content fully revealed at 85% of frame progress
        if (frameLocalProgress >= holdThreshold) {
          frameLocalProgress = 1; // Keep content fully visible during hold period
        } else {
          // Scale the progress so content reveals from 0-85% of frame duration
          frameLocalProgress = frameLocalProgress / holdThreshold;
        }
        
        // Clamp to valid frame range
        const activeFrame = Math.min(currentFrame, totalFrames - 1);
        
        // Handle video visibility and playback
        if (videos[activeFrame]) {
          gsap.set(videos[activeFrame], { autoAlpha: 1 });
          gsap.set(videos.filter((v, idx) => idx !== activeFrame && v), { autoAlpha: 0 });

          const isTransition = activeFrame % 2 === 1;
          
          if (isTransition) {
            // Transition video: control timeline based on local progress
            const video = videos[activeFrame];
            if (video) {
              const videoDuration = video.duration || 10;
              video.currentTime = frameLocalProgress * videoDuration;
              video.loop = false;
              if (!video.paused) {
                video.pause();
              }
            }
            setVisibleContent(null);
            setShowDisplayBoard(false);
            setContentProgress(0);
          } else {
            // Static video: play with loop and show content
            const video = videos[activeFrame];
            if (video && video.paused) {
              video.loop = true;
              video.play().catch((error) => {
                console.error(`Error playing video ${activeFrame + 1}:`, error);
              });
            }

            // Set content progress based on local frame progress
            setContentProgress(frameLocalProgress);

            // Handle content visibility
            if (staticContent.hasOwnProperty(activeFrame)) {
              setVisibleContent(activeFrame);
              setShowDisplayBoard(activeFrame === 0);
            } else {
              setVisibleContent(null);
              setShowDisplayBoard(false);
            }
          }

          pauseOtherVideos(activeFrame);
        }
      },
    });

    // Cleanup on unmount
    return () => {
      scrollTrigger.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      {Array.from({ length: 25 }).map((_, index) => (
        <video
          key={index}
          ref={(el) => {
            videoRefs.current[index] = el;
          }}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`https://res.cloudinary.com/dxks5qn1d/video/upload/v1752829241/${videoPublicIds[index]}.mp4`}
          muted
          playsInline
          preload="auto"
          onContextMenu={(e) => e.preventDefault()}
          {...(index === 0 ? { loop: true } : {})}
        />
      ))}

      {/* Transparent Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ pointerEvents: 'all' }}
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* Digital Display Board - Only visible on frame 1 */}
      <DigitalDisplayBoard isVisible={showDisplayBoard} />

      {/* Static Content with Word-by-Word Animations */}
      {Object.entries(staticContent).map(([frameIndex, content]) => {
        const index = parseInt(frameIndex);
        if (index === 0) return null;

        return (
          <StaticContent
            key={index}
            title={content.title}
            desc={content.desc}
            linkText={content.linkText}
            slug={content.slug}
            position={content.position}
            isVisible={visibleContent === index}
            scrollProgress={contentProgress}
          />
        );
      })}
    </section>
  );
};

export default FactoryTour;