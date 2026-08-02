import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'about', href: '#about' },
  { name: 'case study', href: '#case-study' },
  { name: 'projects', href: '#projects' },
  { name: 'experience', href: '#experience' },
  { name: 'credentials', href: '#credentials' },
  { name: 'map', href: '#map' },
  { name: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      setMobileMenuOpen(false);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bgPrimary/80 backdrop-blur-lg border-b border-borderSubtle py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Editorial Logo */}
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="font-serif text-2xl font-bold tracking-tight text-textPrimary hover:text-accent transition-colors duration-300"
        >
          shreya mishra.
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-sans font-medium text-textSecondary hover:text-accent transition-colors duration-200 capitalize relative group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Operations */}
        <div className="flex items-center gap-6">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-1.5 rounded-full hover:bg-bgSurfaceHover text-textSecondary hover:text-textPrimary transition-colors duration-200 cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-4.5 h-4.5" />
            ) : (
              <Moon className="w-4.5 h-4.5" />
            )}
          </button>

          {/* Resume Quick Link */}
          <a
            href="/assets/Shreya_Mishra_Resume.pdf"
            download
            className="hidden sm:inline-block text-xs font-mono font-medium tracking-wider uppercase border border-borderSubtle hover:border-accent hover:text-accent px-4 py-1.5 rounded-full transition-all duration-300"
          >
            resume.pdf
          </a>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-textPrimary hover:text-accent transition-colors duration-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-bgPrimary border-b border-borderSubtle px-6 py-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-lg font-sans font-medium text-textSecondary hover:text-accent py-1 capitalize"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/assets/Shreya_Mishra_Resume.pdf"
              download
              className="inline-block self-start text-xs font-mono font-medium tracking-wider uppercase border border-borderSubtle px-4 py-2 rounded-full mt-2"
            >
              download resume (pdf)
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
