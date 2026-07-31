import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Terminal, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Dashboard', href: '#dashboard' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Map', href: '#map' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bgSurface/90 backdrop-blur-md border-b border-borderSubtle shadow-xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Distinct Brand Mark */}
        <a
          href="#dashboard"
          onClick={(e) => scrollToSection(e, '#dashboard')}
          className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg leading-none tracking-tight text-textPrimary flex items-center gap-2">
              Shreya Mishra
              <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" title="System Live"></span>
            </span>
            <span className="text-[10px] font-mono text-textMuted font-medium tracking-wider uppercase mt-0.5">
              CAREER DATASET // BI PORTFOLIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-bgSurface/60 p-1.5 rounded-xl border border-borderSubtle backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-3.5 py-1.5 text-xs font-mono font-medium text-textSecondary hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-150 focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions & Status */}
        <div className="flex items-center gap-3">
          {/* Animated Sun / Moon Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl bg-bgSurface hover:bg-bgSurfaceHover border border-borderSubtle text-textPrimary transition-all duration-200 relative overflow-hidden focus-visible:ring-2 focus-visible:ring-accent"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ y: -12, opacity: 0, rotate: -45 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 12, opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {isDark ? (
                  <Moon className="w-4.5 h-4.5 text-amber-400" />
                ) : (
                  <Sun className="w-4.5 h-4.5 text-amber-600" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Distinct Analytics System Chip */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>SYSTEM STATUS // OK</span>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-bgSurface border border-borderSubtle text-textPrimary focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bgSurface border-b border-borderSubtle px-4 pt-3 pb-6 space-y-2 shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-2.5 text-sm font-mono font-medium text-textSecondary hover:text-accent hover:bg-accent/10 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
