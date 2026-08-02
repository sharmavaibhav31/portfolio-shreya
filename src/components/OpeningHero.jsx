import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function OpeningHero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 max-w-6xl mx-auto">
      {/* Editorial Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center my-auto">
        
        {/* Typographic Headline */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-mono tracking-widest text-accent uppercase mb-4"
          >
            data analyst + data science enthusiast
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-textPrimary"
          >
            Shreya<br />Mishra
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg sm:text-xl text-textSecondary leading-relaxed prose-editorial"
          >
            I translate complex datasets into clear, decision-ready narratives. Bridging structured engineering logic with clean data visuals.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex items-center gap-6"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-sans font-semibold border-b-2 border-accent text-textPrimary hover:text-accent transition-colors duration-200 pb-1"
            >
              Read her approach
            </a>
            <a
              href={personalDetails.resumeUrl}
              download
              className="text-sm font-sans font-medium text-textMuted hover:text-textPrimary transition-colors duration-200"
            >
              Download Resume (PDF)
            </a>
          </motion.div>
        </div>
        
        {/* Simple Editorial Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] bg-bgSurface border border-borderSubtle overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <img 
              src={personalDetails.profileImage} 
              alt="Shreya Mishra portrait"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
              }}
            />
            {/* Subtle Terracotta Overlays */}
            <div className="absolute inset-0 bg-accent/5 pointer-events-none mix-blend-color" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex items-center gap-3 text-textMuted hover:text-accent transition-colors duration-200 cursor-pointer w-fit self-start"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-mono uppercase tracking-widest">scroll to read</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
