'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { title: 'Home', slug: '/' },
  { title: 'About Us', slug: '/about' },
  { title: 'Products', slug: '/products' },
  { title: 'Services', slug: '/services' },
  { title: 'By Industry', slug: '/by-industry' },
  { title: 'Knowledge Hub', slug: '/knowledge-hub' },
  // { title: 'Careers', slug: '/careers' },
];

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] z-[100] rounded-2xl border border-gray-500/20 bg-black/30 backdrop-blur-md  "
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          <Image src="/logo.png" alt="Logo" width={100} height={100} quality={90} />
        </Link>

        {/* Desktop + Tablet Nav */}
        <ul className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <motion.li
              key={link.title}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                href={link.slug}
                className="text-gray-100 hover:text-gray-100 font-medium transition-colors"
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
          <li>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="px-4 py-2 bg-lighter text-white rounded-full hover:bg-secondary transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </li>
        </ul>

        {/* Hamburger Menu for Mobile & Tablet */}
        <motion.button
          className="lg:hidden text-gray-100"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle Mobile Menu"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile / Tablet Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden flex flex-col items-start px-6 py-4 space-y-4 border-t border-gray-200/30 bg-white/20 backdrop-blur-md rounded-b-2xl"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 * index }}
              >
                <Link
                  href={link.slug}
                  className="text-gray-200 text-base font-medium w-full hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.05 * navLinks.length }}
              className="w-full"
            >
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-2 bg-lighter text-gray-900 rounded-lg hover:bg-gray-300 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
