import React, { useState, useEffect, useRef } from 'react';
import { personalDetails, kpiMetrics } from '../data/portfolioData';
import { MapPin, Download, Send, CheckCircle2, Award, Briefcase, Database, Trophy, TrendingUp, Sparkles } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

const iconMap = {
  Award: Award,
  Briefcase: Briefcase,
  Database: Database,
  CheckCircle: CheckCircle2,
  Trophy: Trophy,
};

// Animated Count-Up Component for Metric Values
function AnimatedCount({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numerical target and suffixes (e.g., "9.36", "7,000+", "5,197")
    const isFloat = value.includes('.');
    const hasPlus = value.includes('+');
    const rawNumber = parseFloat(value.replace(/,/g, '').replace('+', ''));

    if (isNaN(rawNumber)) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, rawNumber, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        if (isFloat) {
          setDisplayValue(latest.toFixed(2));
        } else {
          const formatted = Math.floor(latest).toLocaleString('en-US');
          setDisplayValue(hasPlus ? `${formatted}+` : formatted);
        }
      }
    });

    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function HeroDashboard() {
  const [imgError, setImgError] = useState(false);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSec = document.querySelector('#contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="dashboard" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Drifting Parallax Gradient Orbs */}
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-10 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none -z-10"
      />

      {/* BI Dashboard Header Panel */}
      <div className="bi-card rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden mb-8 bg-dashboard-grid">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Bio & Title */}
          <div className="lg:col-span-8 space-y-5">
            {/* Header Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAREER DATASET // DASHBOARD VIEW</span>
            </div>

            {/* Name & Role */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-textPrimary tracking-tight">
                {personalDetails.name}
              </h1>
              <p className="text-base sm:text-lg text-accent font-semibold mt-2 font-mono">
                {personalDetails.subTitle}
              </p>
            </div>

            {/* Summary */}
            <p className="text-textSecondary text-sm sm:text-base leading-relaxed max-w-2xl">
              {personalDetails.summary}
            </p>

            {/* Metadata Tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-textMuted pt-1">
              <span className="flex items-center gap-1.5 bg-bgPrimary/70 px-3 py-1.5 rounded-md border border-borderSubtle">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {personalDetails.location}
              </span>
              <span className="flex items-center gap-1.5 bg-bgPrimary/70 px-3 py-1.5 rounded-md border border-borderSubtle">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Open to Data Analyst & Data Science Roles
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={personalDetails.resumeUrl}
                download="Shreya_Mishra_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bgSurfaceHover border border-borderSubtle hover:border-accent/50 text-textPrimary font-medium text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Send className="w-4 h-4 text-accent" />
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Headshot Profile */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Soft Ambient Glow / Shadow Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent to-emerald-400 opacity-30 blur-md dark:opacity-50 transition-opacity" />

              {/* Headshot Frame */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bi-card border-2 border-accent/40 group flex items-center justify-center bg-bgSurface">
                {!imgError ? (
                  <picture>
                    <source srcSet="/assets/profile.webp" type="image/webp" />
                    <img
                      src="/assets/profile.jpg"
                      alt={personalDetails.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={() => setImgError(true)}
                    />
                  </picture>
                ) : (
                  /* Initials Avatar Fallback */
                  <div className="w-full h-full bg-accent/15 flex flex-col items-center justify-center text-accent font-heading font-extrabold text-4xl">
                    <span>SM</span>
                    <span className="text-xs font-mono text-textMuted font-normal mt-1">Data Analyst</span>
                  </div>
                )}
                
                {/* Verified Badge Overlay */}
                <div className="absolute bottom-2 left-2 right-2 bg-bgSurface/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-borderSubtle flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                    <span className="text-[11px] font-mono font-semibold text-textPrimary uppercase tracking-wider">
                      Verified Profile
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-accent">CS & Data</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* KPI Metric Tiles Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpiMetrics.map((kpi, idx) => {
          const IconComponent = iconMap[kpi.icon] || TrendingUp;
          return (
            <motion.div
              key={kpi.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="bi-card rounded-xl p-4 flex flex-col justify-between"
            >
              {/* Tile Top Header */}
              <div className="flex items-center justify-between text-textMuted mb-2">
                <span className="text-xs font-mono text-textSecondary uppercase tracking-wider font-semibold">
                  {kpi.label}
                </span>
                <div className="p-1.5 rounded-lg bg-accent/10 text-accent">
                  <IconComponent className="w-4 h-4" />
                </div>
              </div>

              {/* Big KPI Metric Number with Count-Up */}
              <div className="flex items-baseline justify-between my-1">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-textPrimary tracking-tight">
                  <AnimatedCount value={kpi.value} />
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-medium">
                  {kpi.trend}
                </span>
              </div>

              {/* Subtext & Mini Sparkline Visual */}
              <div className="pt-2 border-t border-borderSubtle flex items-center justify-between">
                <span className="text-[11px] text-textMuted truncate max-w-[120px]">
                  {kpi.subtext}
                </span>
                
                {/* SVG Mini Sparkline */}
                <svg className="w-12 h-5 text-accent opacity-80" viewBox="0 0 50 20">
                  <path
                    d={`M 0 ${20 - kpi.sparkline[0]} L 12 ${20 - kpi.sparkline[1]} L 25 ${20 - kpi.sparkline[2]} L 37 ${20 - kpi.sparkline[3]} L 50 ${20 - kpi.sparkline[4]}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
