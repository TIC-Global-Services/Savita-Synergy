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
        weekday: 'long',
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/6 w-full max-w-md bg-black text-green-400 font-mono overflow-hidden rounded-lg shadow-2xl border-2 border-green-600"
          >
            {/* Header */}
            <div className="bg-green-900 text-green-100 px-6 py-1 flex justify-between items-center">
              <div className="text-xs font-bold">
                SAVITA SYNERGY - ALUMINUM PRICES
              </div>
              <div className="text-right">
                <div className="text-xs font-bold">{formatTime(currentTime)}</div>
                <div className="text-xs">{formatDate(currentTime)}</div>
              </div>
            </div>

            {/* Main Display Area */}
            <div className="h-10 bg-black relative overflow-hidden border-2 border-green-600">
              {/* Scrolling Price Text */}
              <motion.div
                className="absolute whitespace-nowrap flex items-center h-full text-2xl font-bold"
                animate={{ x: '-100%' }}
                transition={{
                  duration: 30,
                  ease: 'linear',
                  repeat: Infinity,
                }}
              >
                {priceData.map((item, index) => (
                  <div key={index} className="flex items-center mx-12">
                    <span className="text-green-300">{item.product}:</span>
                    <span className="text-yellow-400 mx-2 font-bold">{item.price}</span>
                    <span className="text-green-400">{item.unit}</span>
                    {item.change && (
                      <span
                        className={`ml-2 px-2 py-1 rounded text-sm ${
                          item.changeType === 'up'
                            ? 'text-green-300 bg-green-900'
                            : item.changeType === 'down'
                            ? 'text-red-300 bg-red-900'
                            : 'text-gray-300 bg-gray-900'
                        }`}
                      >
                        {item.change}
                      </span>
                    )}
                    <span className="text-green-600 mx-4">|</span>
                  </div>
                ))}
              </motion.div>

              {/* Blinking Cursor Effect */}
              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-green-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>

            {/* Bottom Status Bar */}
            <div className="bg-green-900 text-green-100 px-6 py-1 flex justify-between items-center text-xs">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span>LIVE</span>
                </div>
                <div>Market Status: OPEN</div>
              </div>
              <div className="flex items-center space-x-4">
                <div>Last Updated: {formatTime(currentTime)}</div>
              </div>
            </div>

            {/* LED-style Grid Pattern Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 1px 1px, rgba(0,255,0,0.3) 1px, transparent 0)
                `,
                backgroundSize: '4px 4px'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    );
};