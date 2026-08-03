import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import AskMeAnything from './AskMeAnything';

export default function OpeningHero() {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  
  // Track scroll relative to hero section for parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax calculations (transform values offset on scroll)
  const yText = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [isScrolledPast, setIsScrolledPast] = useState(false);

  // Track if visitor has scrolled past the hero section (desktop only)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (window.innerWidth >= 1024) {
        setIsScrolledPast(latest > 0.85);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const isVisible = isOpen && !isScrolledPast;

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 max-w-6xl mx-auto relative overflow-hidden"
    >
      {/* Ask Me Anything Panel overlay */}
      <AskMeAnything isOpen={isVisible} setIsOpen={setIsOpen} />

      {/* Editorial Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center my-auto relative z-10">
        
        {/* Typographic Headline with Left Sidewall Support */}
        <motion.div 
          style={{ y: yText, opacity: opacityFade }}
          className="md:col-span-7 flex flex-col justify-center relative pl-10 lg:pl-14 border-l border-borderSubtle/60"
        >
          {/* Vertical "Ask Me Something" Sidebar Border Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute -left-[1.5px] top-4 bottom-4 w-[2px] hidden lg:flex flex-col items-center justify-center cursor-pointer group z-30 select-none"
            title="Ask Shreya a question"
          >
            {/* Active highlight line */}
            <div className="absolute inset-y-0 left-0 w-[2px] bg-borderSubtle group-hover:bg-accent transition-colors duration-300" />
            
            {/* The rotated text label sitting over the line with background mask */}
            <div className="bg-bgPrimary py-6 relative z-10 flex flex-col items-center gap-4">
              <span 
                className="text-[11px] font-mono uppercase tracking-widest text-textMuted group-hover:text-accent transition-colors duration-300 whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                ask me something
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors duration-300" />
            </div>
          </button>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-mono tracking-widest text-accent uppercase mb-4"
          >
            data analyst — data science enthusiast
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
            I translate complex datasets into clear, decision-ready narratives—bridging structured engineering logic with clean data visuals.
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
            
            <button
              onClick={() => setIsOpen(true)}
              className="text-sm font-sans font-semibold text-accent hover:underline transition-colors duration-200 cursor-pointer lg:hidden"
            >
              Ask me something
            </button>

            <a
              href={personalDetails.resumeUrl}
              download
              className="text-sm font-sans font-medium text-textMuted hover:text-textPrimary transition-colors duration-200 hidden sm:inline"
            >
              Download Resume (PDF)
            </a>
          </motion.div>
        </motion.div>
        
        {/* Simple Editorial Portrait with scroll-linked parallax */}
        <motion.div 
          style={{ y: yPhoto, opacity: opacityFade }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
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
        className="flex items-center gap-3 text-textMuted hover:text-accent transition-colors duration-200 cursor-pointer w-fit self-start relative z-10"
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
