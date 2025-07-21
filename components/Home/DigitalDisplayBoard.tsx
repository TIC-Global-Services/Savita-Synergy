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

export const DigitalDisplayBoard: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
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

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 2.5, y: "-150%", transition: { duration: 0.5, ease: "easeIn" } }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/6 w-full max-w-md bg-black text-green-400 font-mono overflow-hidden shadow-2xl border border-green-800 px-3 md:ml-2"
        >
          {/* Header */}
          <div className=" text-green-400  py-2 flex justify-between items-center border-b border-green-800">
            <div className="text-sm sm:text-base font-bold tracking-wider">
              SAVITA SYNERGY - ALUMINUM PRICES
            </div>
            <div className="text-right">
              <div className="text-sm sm:text-base font-bold">{formatTime(currentTime)}</div>
              <div className="text-xs opacity-75">{formatDate(currentTime)}</div>
            </div>
          </div>

          {/* Main Display Area */}
          <div className="h-13 bg-black relative overflow-hidden">
            {/* Scrolling Price Text */}
            <motion.div
              className="absolute whitespace-nowrap flex items-center h-full text-lg sm:text-2xl font-bold"
              animate={{ x: '-100%' }}
              transition={{
                duration: 30,
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {priceData.map((item, index) => (
                <div key={index} className="flex items-center mx-4 sm:mx-12">
                  <span className="text-green-400 text-sm sm:text-base tracking-wide">{item.product}:</span>
                  <span className="text-yellow-400 mx-1 sm:mx-2 font-bold text-lg sm:text-xl">{item.price}</span>
                  <span className="text-green-400 text-sm sm:text-base">{item.unit}</span>
                  {item.change && (
                    <span
                      className={`ml-1 sm:ml-2 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm font-bold ${
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
                  <span className="text-green-600 mx-3 sm:mx-6 text-xl">|</span>
                </div>
              ))}
            </motion.div>

            {/* Blinking Cursor Effect */}
            <motion.div
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-1 sm:w-2 h-6 sm:h-10 bg-green-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>

          {/* Scanline Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.03) 50%)',
              backgroundSize: '100% 4px'
            }}
          />

          {/* CRT Glow Effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 50px rgba(0, 255, 0, 0.1)'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};