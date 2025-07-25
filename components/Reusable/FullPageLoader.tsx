'use client';

import React from 'react';

interface FullPageLoaderProps {
  percentage: number;
  isVisible: boolean;
}

const FullPageLoader: React.FC<FullPageLoaderProps> = ({ percentage, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-gradient-to-br from-[#2C2B2B] via-[#333334] to-[#2C2B2B] flex flex-col justify-center items-center text-white overflow-hidden"
      style={{ fontFamily: 'var(--font-montserrat)' }}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse opacity-20" 
             style={{ backgroundColor: '#59692E' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 opacity-20" 
             style={{ backgroundColor: '#94AC55' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-spin-slow opacity-10" 
             style={{ backgroundColor: '#3E4726' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              backgroundColor: i % 3 === 0 ? '#59692E' : i % 3 === 1 ? '#94AC55' : '#3E4726',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: 0.6
            }}
          ></div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-12 p-8 max-w-2xl mx-auto text-center">
        


        {/* Percentage Display */}
        <div className="relative mt-20">
          <div className="text-8xl md:text-9xl font-black animate-pulse bg-gradient-to-r bg-clip-text text-transparent"
               style={{ 
                 backgroundImage: `linear-gradient(45deg, #59692E, #94AC55, #3E4726)`,
                 backgroundSize: '200% 200%'
               }}>
            {Math.round(percentage)}
          </div>
          <span className="absolute -top-4 -right-8 text-3xl font-bold opacity-60" 
                style={{ color: '#D8DFE6' }}>%</span>
        </div>

        {/* Loading Text */}
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold"
              style={{ color: '#FFFFFF' }}>
            Loading 3D Experience
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-lg leading-relaxed"
             style={{ color: '#D8DFE6' }}>
            Crafting something extraordinary for you...
          </p>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="w-full max-w-lg space-y-4">
          <div className="relative h-3 rounded-full overflow-hidden backdrop-blur-sm border"
               style={{ 
                 backgroundColor: 'rgba(139, 140, 140, 0.2)',
                 borderColor: '#4B4B4C'
               }}>
            <div
              className="h-full transition-all duration-700 ease-out rounded-full relative"
              style={{ 
                width: `${percentage}%`,
                background: `linear-gradient(90deg, #59692E 0%, #94AC55 50%, #3E4726 100%)`
              }}
              role="progressbar"
              aria-valuenow={percentage}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-fast"></div>
            </div>
          </div>
          
          {/* Progress Steps */}
          <div className="flex justify-between text-sm font-medium">
            <span style={{ color: percentage > 25 ? '#94AC55' : '#8C8C8C' }}>
              Initializing
            </span>
            <span style={{ color: percentage > 50 ? '#59692E' : '#8C8C8C' }}>
              Loading Assets
            </span>
            <span style={{ color: percentage > 75 ? '#3E4726' : '#8C8C8C' }}>
              Rendering
            </span>
            <span style={{ color: percentage >= 100 ? '#94AC55' : '#8C8C8C' }}>
              Complete
            </span>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full animate-bounce"
              style={{ 
                backgroundColor: i === 0 ? '#59692E' : i === 1 ? '#94AC55' : '#3E4726',
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
          ))}
        </div>

        {/* Brand Accent Line */}
        <div className="w-24 h-1 rounded-full opacity-60"
             style={{ background: `linear-gradient(90deg, #59692E, #94AC55, #3E4726)` }}></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 0.8;
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes shimmer-fast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 12s linear infinite;
        }
        
        .animate-shimmer-fast {
          animation: shimmer-fast 1.5s infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-gradient {
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default FullPageLoader;