'use client';
import { motion, type Variants } from 'framer-motion';
import toast from 'react-hot-toast';
import React from 'react';

// Define toast types
type ToastType = 'success' | 'error' | 'info';

export const CustomToast: React.FC<{ message: string; t: any; type?: ToastType }> = ({
  message,
  t,
  type = 'info',
}) => {
  // Icon based on toast type
  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg
            className="w-10 h-10 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'info':
        return (
          <svg
            className="w-10 h-10 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.8 }}
      className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl shadow-xl max-w-md mx-auto backdrop-blur-sm bg-opacity-80"
    >
      {/* Icon */}
      <div className="flex-shrink-0 mr-3">{getIcon()}</div>
      {/* Message */}
      <div className="flex-1">
        <p className="text-base font-medium text-gray-800">{message}</p>
      </div>
      {/* Close Button */}
      <button
        onClick={() => toast.dismiss(t.id)}
        className="ml-4 p-2 rounded-full cursor-pointer hover:bg-gray-200/50 transition-colors"
        aria-label="Close toast"
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};