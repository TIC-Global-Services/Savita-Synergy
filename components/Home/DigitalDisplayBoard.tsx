import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Digital Display Board Component
interface PriceItem {
  product: string;
  price: string;
  unit: string;
  change?: string;
  changeType?: 'up' | 'down' | 'neutral';
}

interface DigitalDisplayBoardProps {
  isVisible: boolean;
  currentFrame: number; // Add currentFrame as a prop
}

export const DigitalDisplayBoard: React.FC<DigitalDisplayBoardProps> = ({ isVisible, currentFrame }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Sample price data
  const priceData: PriceItem[] = [
    { product: 'Aluminum Scrap', price: '₹185.50', unit: '/kg', change: '+2.5%', changeType: 'up' },
    { product: 'Aluminum Ingots', price: '₹198.75', unit: '/kg', change: '-1.2%', changeType: 'down' },
    { product: 'Aluminum Billets', price: '₹205.00', unit: '/kg', change: '+0.8%', changeType: 'up' },
    { product: 'Aluminum Sheets', price: '₹210.25', unit: '/kg', change: '+1.5%', changeType: 'up' },
    { product: 'Aluminum Rods', price: '₹195.80', unit: '/kg', change: '-0.3%', changeType: 'down' },
    { product: 'Aluminum Profiles', price: '₹220.00', unit: '/kg', change: '+3.2%', changeType: 'up' },
    { product: 'Aluminum Coils', price: '₹188.60', unit: '/kg', change: '+0.5%', changeType: 'up' },
    { product: 'Aluminum Foil', price: '₹165.40', unit: '/kg', change: '-2.1%', changeType: 'down' },
  ];

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Calculate top position based on currentFrame (from 50% at frame 20 to 0% at frame 45)
  const calculateTopPosition = () => {
    if (currentFrame < 20) return '48%';
    if (currentFrame > 45) return '-20%';
    const progress = (currentFrame - 20) / (45 + 20); // Normalize progress between 0 and 1
    const topStart = 50; // Starting top position in percentage
    const topEnd =  -20;   // Ending top position in percentage
    const topValue = topStart + (topEnd - topStart) * progress; // Linear interpolation
    return `${topValue}%`;
  };

  // Calculate scale based on currentFrame (from 1 at frame 20 to 1.5 at frame 45)
  const calculateScale = () => {
    if (currentFrame < 20) return 1;
    if (currentFrame > 45) return 1.8;
    const progress = (currentFrame - 20) / (45 - 40); // Normalize progress between 0 and 1
    const scaleStart = 1; // Starting scale
    const scaleEnd = 1.8; // Ending scale
    const scaleValue = scaleStart + (scaleEnd - scaleStart) * progress; // Linear interpolation
    return scaleValue;
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: calculateScale() }} // Apply dynamic scale
          style={{ 
            top: calculateTopPosition(), // Dynamically set top position
            transformOrigin: 'center top', // Set transform origin to top for natural zoom
          }} 
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[10%] lg:-translate-y-[15%] 2xl:-translate-y-[20%] w-[40%] bg-black text-green-400 font-mono overflow-hidden shadow-2xl border border-green-800 px-2 ml-[2px] md:ml-4"
        >
          {/* Header */}
          <div className="text-green-400 md:py-3 flex justify-between items-center border-b border-green-800">
            <div className="text-[10px] sm:text-xl font-bold tracking-wider">
              SAVITA SYNERGY PRICES
            </div>
            <div className="text-right">
              <div className="text-[6px] sm:text-base font-bold">{formatTime(currentTime)}</div>
              <div className="text-[6px] sm:text-base opacity-75">{formatDate(currentTime)}</div>
            </div>
          </div>

          {/* Main Display Area */}
          <div className="h-[3dvh] md:h-[9dvh] bg-black relative overflow-hidden">
            {/* Scrolling Price Text */}
            <motion.div
              className="absolute whitespace-nowrap flex items-center h-full text-xl sm:text-3xl font-bold"
              animate={{ x: '-100%' }}
              transition={{
                duration: 30,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {priceData.map((item, index) => (
                <div key={index} className="flex items-center ">
                  <span className="text-green-400 text-base sm:text-xl tracking-wide">{item.product}:</span>
                  <span className="text-yellow-400 mx-2 sm:mx-4 font-bold text-xl sm:text-2xl">{item.price}</span>
                  <span className="text-green-400 text-base sm:text-xl">{item.unit}</span>
                  {item.change && (
                    <span
                      className={`ml-2 sm:ml-4 px-2 sm:px-3 py-1 sm:py-1.5 rounded text-sm sm:text-base font-bold ${
                        item.changeType === 'up'
                          ? 'text-green-300'
                          : item.changeType === 'down'
                          ? 'text-red-400'
                          : 'text-gray-400'
                      }`}
                    >
                      {item.change}
                    </span>
                  )}
                  <span className="text-green-600 mx-4 sm:mx-8 text-2xl">|</span>
                </div>
              ))}
            </motion.div>

            
          </div>

          {/* Scanline Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%)',
              backgroundSize: '100% 6px'
            }}
          />

          {/* CRT Glow Effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 75px rgba(0, 255, 0, 0.1)'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};