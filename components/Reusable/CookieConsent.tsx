'use client';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CustomToast } from './CustomToast';

// Cookie categories
interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
}

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

interface ToastProps {
  message: string;
  t: any;
  type?: 'success' | 'error' | 'info' | 'consent';
  onAccept?: () => void;
  onDecline?: () => void;
  onCustomize?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  t,
  type = 'info',
  onAccept,
  onDecline,
  onCustomize,
}) => {
  const getColors = () => {
    switch (type) {
      case 'success':
        return { icon: 'text-emerald-600', border: 'border-emerald-200', bg: 'bg-emerald-50' };
      case 'error':
        return { icon: 'text-red-600', border: 'border-red-200', bg: 'bg-red-50' };
      case 'info':
      case 'consent':
        return { icon: 'text-blue-600', border: 'border-blue-200', bg: 'bg-blue-50' };
      default:
        return { icon: 'text-blue-600', border: 'border-blue-200', bg: 'bg-blue-50' };
    }
  };

  const { icon, border, bg } = getColors();

  const getIcon = () => {
    if (type === 'consent') {
      return (
        <svg className={`w-5 h-5 ${icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    }
    
    switch (type) {
      case 'success':
        return (
          <svg className={`w-5 h-5 ${icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className={`w-5 h-5 ${icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'info':
        return (
          <svg className={`w-5 h-5 ${icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 120, damping: 15, mass: 0.8 }}
      className={`relative backdrop-blur-lg bg-white/95 border ${border} rounded-2xl shadow-2xl max-w-lg mx-auto font-sans overflow-hidden`}
      role="alert"
    >
      {/* Header */}
      <div className={`px-6 py-4 ${bg} border-b ${border}`}>
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">{getIcon()}</div>
          <h3 className="text-lg font-semibold text-gray-900">Cookie Preferences</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {message}
        </p>
        
        <div className="flex flex-col space-y-2 text-xs text-gray-500">
          <p>
            <Link href="/policy" className="text-blue-600 hover:text-blue-700 font-medium">
              Privacy Policy
            </Link>
            {' • '}
            
          </p>
        </div>

        {/* Buttons */}
        {type === 'consent' && (
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <motion.button
              onClick={() => {
                onAccept?.();
                toast.dismiss(t.id);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm font-semibold shadow-md"
            >
              Accept All
            </motion.button>
            
            <motion.button
              onClick={() => {
                onCustomize?.();
                toast.dismiss(t.id);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-sm font-semibold"
            >
              Customize
            </motion.button>
            
            <motion.button
              onClick={() => {
                onDecline?.();
                toast.dismiss(t.id);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 py-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-all duration-200 text-sm font-semibold"
            >
              Decline All
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Cookie customization modal
const CookieCustomizationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: CookiePreferences) => void;
}> = ({ isOpen, onClose, onSave }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  const categories: (CookieCategory & { key: keyof CookiePreferences })[] = [
    {
      id: 'essential',
      key: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      required: true,
      enabled: true,
    },
    {
      id: 'analytics',
      key: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      required: false,
      enabled: preferences.analytics,
    },
    {
      id: 'marketing',
      key: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver personalized advertisements.',
      required: false,
      enabled: preferences.marketing,
    },
    {
      id: 'preferences',
      key: 'preferences',
      name: 'Preference Cookies',
      description: 'These cookies remember your choices and personalize your experience.',
      required: false,
      enabled: preferences.preferences,
    },
  ];

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    onSave(preferences);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Cookie Preferences</h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/50 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <p className="text-sm text-gray-600 mb-6">
                  Manage your cookie preferences. You can enable or disable different types of cookies below.
                </p>

                <div className="space-y-4">
                  {categories.map((category) => (
                    <div key={category.id} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-medium text-gray-900">{category.name}</h3>
                            {category.required && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                Required
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{category.description}</p>
                        </div>
                        
                        <motion.button
                          onClick={() => handleToggle(category.key)}
                          disabled={category.required}
                          whileTap={{ scale: 0.95 }}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            category.enabled
                              ? 'bg-blue-600'
                              : 'bg-gray-200'
                          } ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <motion.span
                            animate={{ x: category.enabled ? 20 : 4 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="inline-block h-4 w-4 rounded-full bg-white shadow-lg"
                          />
                        </motion.button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    onClick={handleSave}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-semibold"
                  >
                    Save Preferences
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      setPreferences({ essential: true, analytics: true, marketing: true, preferences: true });
                      handleSave();
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors text-sm font-semibold"
                  >
                    Accept All
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const CookieConsent: React.FC = () => {
  const [showCustomization, setShowCustomization] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => {
        toast.custom(
          (t) => (
            <Toast
              message="We use cookies to enhance your browsing experience and provide personalized content. Choose your preferences or accept all to continue."
              t={t}
              type="consent"
              onAccept={() => {
                const preferences: CookiePreferences = {
                  essential: true,
                  analytics: true,
                  marketing: true,
                  preferences: true,
                };
                localStorage.setItem('cookieConsent', JSON.stringify(preferences));
                localStorage.setItem('cookieConsentDate', new Date().toISOString());
                // Initialize all tracking scripts
                initializeTracking(preferences);
              }}
              onDecline={() => {
                const preferences: CookiePreferences = {
                  essential: true,
                  analytics: false,
                  marketing: false,
                  preferences: false,
                };
                localStorage.setItem('cookieConsent', JSON.stringify(preferences));
                localStorage.setItem('cookieConsentDate', new Date().toISOString());
                initializeTracking(preferences);
              }}
              onCustomize={() => setShowCustomization(true)}
            />
          ),
          {
            duration: Infinity,
            position: 'bottom-center',
          }
        );
      }, 1000); // Delay to improve UX
    }
  }, []);

  const initializeTracking = (preferences: CookiePreferences) => {
    if (preferences.analytics) {
      // Initialize Google Analytics
      console.log('Analytics enabled');
    }
    if (preferences.marketing) {
      // Initialize marketing pixels
      console.log('Marketing cookies enabled');
    }
    if (preferences.preferences) {
      // Initialize preference cookies
      console.log('Preference cookies enabled');
    }
  };

  const handleSavePreferences = (preferences: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    initializeTracking(preferences);
    toast.custom((t) => <CustomToast message="Cookie preferences saved successfully!" t={t} type="success" />, {
        duration: 3000,
        position:'top-right'
    });
  };

  return (
    <>
      <CookieCustomizationModal
        isOpen={showCustomization}
        onClose={() => setShowCustomization(false)}
        onSave={handleSavePreferences}
      />
    </>
  );
};

// Enhanced cookie settings component
export const CookieSettings: React.FC = () => {
  const [showCustomization, setShowCustomization] = useState(false);
  const [currentPreferences, setCurrentPreferences] = useState<CookiePreferences | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent');
    if (stored) {
      try {
        setCurrentPreferences(JSON.parse(stored));
      } catch {
        setCurrentPreferences(null);
      }
    }
  }, []);

  const handleRevokeConsent = () => {
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookieConsentDate');
    toast.success('Cookie preferences cleared. Please refresh to set new preferences.');
  };

  const handleSavePreferences = (preferences: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setCurrentPreferences(preferences);
    setShowCustomization(false);
    toast.success('Cookie preferences updated successfully!');
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setShowCustomization(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Manage Cookies
        </button>
        <button
          onClick={handleRevokeConsent}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
        >
          Reset Preferences
        </button>
      </div>

      {currentPreferences && (
        <div className="text-xs text-gray-500 space-y-1">
          <p>Current settings:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Analytics: {currentPreferences.analytics ? 'Enabled' : 'Disabled'}</li>
            <li>Marketing: {currentPreferences.marketing ? 'Enabled' : 'Disabled'}</li>
            <li>Preferences: {currentPreferences.preferences ? 'Enabled' : 'Disabled'}</li>
          </ul>
        </div>
      )}

      <CookieCustomizationModal
        isOpen={showCustomization}
        onClose={() => setShowCustomization(false)}
        onSave={handleSavePreferences}
      />
    </div>
  );
};

export default CookieConsent;