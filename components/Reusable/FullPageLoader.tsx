"use client"

import type React from "react"

interface FullPageLoaderProps {
  percentage: number
  isVisible: boolean
}

const FullPageLoader: React.FC<FullPageLoaderProps> = ({ percentage, isVisible }) => {
  if (!isVisible) return null

  const getLoadingPhase = () => {
    if (percentage < 20) return "Initializing"
    if (percentage < 40) return "Loading Assets"
    if (percentage < 60) return "Preparing Environment"
    if (percentage < 80) return "Configuring Environment"
    if (percentage < 95) return "Finalizing Setup"
    return "Launch Ready"
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0f0f0f] flex items-center justify-center text-white"
      style={{ fontFamily: "var(--font-montserrat)" }}
      role="status"
      aria-live="polite"
      aria-label="Loading application"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 172, 85, 0.3) 1px, transparent 0)`,
        }}
      />

      <div className="relative w-full max-w-lg mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-[#94AC55] to-transparent" />
            <div className="w-2 h-2 bg-[#59692E] rounded-full" />
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-[#94AC55] to-transparent" />
          </div>

          <h1 className="text-sm font-medium text-white/90 tracking-[0.2em] uppercase mb-2">3D Initialization</h1>
          <p className="text-xs text-white/50 font-light tracking-wide">Preparing Immersive Experience</p>
        </div>

        {/* Main Progress Section */}
        <div className="space-y-12">
          {/* Percentage Display */}
          <div className="text-center">
            <div className="inline-flex items-baseline gap-1 mb-3">
              <span className="text-5xl font-medium text-white">
                {Math.round(percentage).toString().padStart(2, "0")}
              </span>
              <span className="text-lg font-light text-white/60">%</span>
            </div>
            <div className="text-xs font-medium text-[#94AC55] tracking-widest uppercase">{getLoadingPhase()}</div>
          </div>

          {/* Progress Track */}
          <div className="space-y-6">
            <div className="relative">
              <div className="h-px bg-white/[0.08] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#59692E] via-[#94AC55] to-[#59692E] transition-all duration-[1200ms] ease-out relative"
                  style={{ width: `${percentage}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-sweep" />
                </div>
              </div>

              {/* Progress markers */}
              <div className="absolute -top-1 left-0 w-full flex justify-between">
                {[0, 25, 50, 75, 100].map((mark) => (
                  <div
                    key={mark}
                    className={`w-0.5 h-2 transition-colors duration-500 ${
                      percentage >= mark ? "bg-[#94AC55]" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Status indicators */}
            <div className="grid grid-cols-4 gap-4 text-center">
              {[
                { label: "Init", threshold: 20 },
                { label: "Load", threshold: 40 },
                { label: "Prep", threshold: 60 },
                { label: "Ready", threshold: 100 },
              ].map((status, index) => (
                <div key={index} className="space-y-2">
                  <div
                    className={`w-1 h-1 mx-auto rounded-full transition-all duration-500 ${
                      percentage >= status.threshold
                        ? "bg-[#94AC55] shadow-[0_0_8px_rgba(148,172,85,0.6)]"
                        : "bg-white/20"
                    }`}
                  />
                  <div
                    className={`text-[10px] font-medium tracking-wider uppercase transition-colors duration-500 ${
                      percentage >= status.threshold ? "text-white/80" : "text-white/30"
                    }`}
                  >
                    {status.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        
        </div>

        {/* Bottom accent */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-[#59692E]/60 rounded-full" />
            <div className="w-1 h-1 bg-[#94AC55]/60 rounded-full" />
            <div className="w-1 h-1 bg-[#3E4726]/60 rounded-full" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        .animate-sweep {
          animation: sweep 3s infinite;
        }
      `}</style>
    </div>
  )
}

export default FullPageLoader
