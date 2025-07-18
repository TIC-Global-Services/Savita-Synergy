'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { DigitalDisplayBoard } from './DigitalDisplayBoard';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

type StaticContentProps = {
  title: string;
  desc?: string;
  button?: string;
  position?: string;
};

interface StaticContentMap {
  [key: number]: StaticContentProps;
}

const StaticContent: React.FC<StaticContentProps & { isVisible: boolean }> = ({ 
  title, 
  desc, 
  button, 
  position, 
  isVisible 
}) => {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
          className={`absolute text-white p-4 rounded ${position}`}
        >
          <h2 className="text-3xl mb-2 font-bold">{title}</h2>
          
          {desc && (
            <p className="text-base mb-2">{desc}</p>
          )}
          
          {button && (
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="block text-center px-6 py-2 bg-lighter rounded-full hover:bg-gray-300 transition-colors"
            >
              {button}
            </motion.button>
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
    button: 'Learn More',
    position: 'bottom-10 left-10',
  },
  2: {
    title: 'Who Are We',
    desc: 'At Savita Synergy, we offer end-to-end aluminum solutions — from aluminum scrap to finished products. As a leading aluminum trading and manufacturing company in India, we serve diverse industries with reliable processing, finishing, and distribution services. With facilities like AL13 Metal and HPG Coaters, and a presence across major cities, we deliver quality, consistency, and service at every step.',
    button: 'Our Story',
    position: ' top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  },
  4: {
    title: 'What We Do',
    desc: 'We offer a diverse range of aluminum products including high-quality aluminum scrap for recycling, precision-grade ingots and billets for casting and extrusion, and versatile extruded profiles for construction, automotive, and industrial applications. We also design and manufacture custom dies to meet specific client requirements with high precision.',
    position: ' top-20 left-1/2 -translate-x-1/2  justify-start items-start flex flex-col',
  },
  6: {
    title: 'Aluminum Scrap',
    desc: 'Reliable material for recycling & manufacturing',
    position: 'top-20 left-1/3 -translate-x-1/2  justify-start items-start flex flex-col',
  },
  8: {
    title: 'Scrap Melting',
    desc: 'Enhancing Quality Through Purity & Precision.',
    position: 'top-40 left-20',
  },
  10: {
    title: 'Ingots and Billets',
    desc: 'Quality Ingots & Billets for Precision Profiles',
    button: 'Explore More',
    position: 'top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2  ',
  },
  12: {
    title: 'Extrusion Process with Custom Dies',
    desc: 'Precision-Made Profiles Start Here, From Custom Dies to Finished Extrusions.',
    position: 'top-10 left-10',
  },
  14: {
    title: 'Aluminum Services',
    desc: 'Our value-added services include anodizing for durable, corrosion-resistant finishes and powder coating in a wide variety of colors and textures for enhanced protection. We also provide custom fabrication, cutting, and finishing services, enabling complete, end-to-end aluminum solutions.',
    position: 'top-10 left-1/2 -translate-x-2/5',
  },
  16: {
    title: 'Anodizing',
    desc: 'Durable, corrosion-resistant surface finish.',
    position: 'top-10 left-1/2 -translate-x-1/2',
  },
  18: {
    title: 'Powder Coating',
    desc: 'Premium textures & colors for aluminum.',
    position: ' bottom-10 left-10 ',
  },
  20: {
    title: 'Fabrication',
    desc: 'End-to-end cutting, machining & finishing.',
    button: 'Explore Services',
    position: 'bottom-10 left-1/6',
  },
  22: {
    title: 'Contact Us',
    desc: 'Get in touch with our team for inquiries.',
    button: 'Contact Now',
    position: 'top-1/2 left-1/2 -translate-x-1/2',
  },
  24: {
    title: 'Form',
    desc: 'Submit your details to connect with us.',
    button: 'Submit Form',
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
  'frame_12_ypduqy',
  'frame_13_ssjmdk',
  'frame_14_l9g3is',
  'frame_15_vxgcuq',
  'frame_16_q1umul',
  'frame_17_c2re25',
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
  // Initialize array of refs at top level
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(Array(25).fill(null));
  const sectionRef = useRef(null);
  const [visibleContent, setVisibleContent] = useState<number | null>(0);
  const [showDisplayBoard, setShowDisplayBoard] = useState<boolean>(true);

  useEffect(() => {
    const videos = videoRefs.current;

    // Ensure sectionRef and videos are not null
    if (!sectionRef.current || videos.some((video) => !video)) {
      console.error('Section or video refs are not initialized');
      return;
    }

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
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=1800%',
      pin: true,
      scrub: 0.2,
      onUpdate: (self) => {
        const progress = self.progress;
        const segment = 1 / 24; // 24 transitions for 25 videos

        for (let i = 0; i < 25; i++) {
          const isTransition = i % 2 === 1; // Transition videos: 1,3,5,7,9,11,13,15,17,19,21,23 | Static videos: 0,2,4,6,8,10,12,14,16,18,20,22,24
          const startProgress = i * segment;
          const endProgress = (i + 1) * segment;

          if (progress >= startProgress && progress < endProgress) {
            // Handle video visibility and playback
            if (videos[i]) {
              gsap.set(videos[i], { autoAlpha: 1 });
              gsap.set(videos.filter((v, idx) => idx !== i && v), { autoAlpha: 0 });

              if (isTransition) {
                // Transition video: control timeline
                const video = videos[i];
                if (video) {
                  const videoDuration = video.duration || 10;
                  const adjustedProgress = (progress - startProgress) / segment;
                  video.currentTime = adjustedProgress * videoDuration;
                  video.loop = false;
                  if (!video.paused) {
                    video.pause();
                  }
                }
              } else {
                // Static video: play with loop
                const video = videos[i];
                if (video && video.paused) {
                  video.loop = true;
                  video.play().catch((error) => {
                    console.error(`Error playing video ${i + 1}:`, error);
                  });
                }
              }
            }

            // Handle content visibility for static videos with Framer Motion
            if (!isTransition && staticContent.hasOwnProperty(i)) {
              setVisibleContent(i);
              setShowDisplayBoard(i === 0); // Show display board only on frame 1
            } else {
              setVisibleContent(null);
              setShowDisplayBoard(false);
            }

            pauseOtherVideos(i);
            break;
          }
        }
      },
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [videoRefs]);

  return (
    <section ref={sectionRef} className="relative w-full h-screen">
      {/* Video Background */}
      {Array.from({ length: 25 }).map((_, index) => (
        <video
          key={index}
          ref={(el) => {
            videoRefs.current[index] = el!;
          }}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`https://res.cloudinary.com/dxks5qn1d/video/upload/v1752829241/${videoPublicIds[index]}.mp4`}
          muted
          preload='auto'
          playsInline
          {...(index === 0 ? { loop: true } : {})}
        />
      ))}

      {/* Digital Display Board - Only visible on frame 1 */}
      <DigitalDisplayBoard isVisible={showDisplayBoard} />

      {/* Static Content with Framer Motion Animations */}
      {Object.entries(staticContent).map(([frameIndex, content]) => {
        const index = parseInt(frameIndex);
        // Don't show regular content for frame 1 (index 0) as we show the display board instead
        if (index === 0) return null;
        
        return (
          <StaticContent
            key={index}
            title={content.title}
            desc={content.desc}
            button={content.button}
            position={content.position}
            isVisible={visibleContent === index}
          />
        );
      })}
    </section>
  );
};

export default FactoryTour;