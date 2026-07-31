import React, { useState, useEffect, useRef } from 'react';
import { personalDetails, kpiMetrics } from '../data/portfolioData';
import { MapPin, Download, Send, CheckCircle2, Award, Briefcase, Database, Trophy, TrendingUp, Sparkles, Terminal } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

const iconMap = {
  Award: Award,
  Briefcase: Briefcase,
  Database: Database,
  CheckCircle: CheckCircle2,
  Trophy: Trophy,
};

// Animated Count-Up Component
function AnimatedCount({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

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
    <section id="dashboard" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Section Watermark Anchor */}
      <span className="absolute top-12 right-6 text-9xl font-heading font-black text-textPrimary/5 select-none pointer-events-none -z-10">
        01
      </span>

      {/* Subtle Background Parallax Drifting Orbs */}
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-10 w-80 h-80 rounded-full bg-accentSecondary/10 blur-3xl pointer-events-none -z-10"
      />

      {/* BI Dashboard Header Panel */}
      <div className="bi-card rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden mb-8 bg-dot-grid">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Bio & Title */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono font-semibold">
              <Terminal className="w-3.5 h-3.5" />
              <span>CAREER DATASET // DASHBOARD VIEW</span>
            </div>

            {/* Display Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-textPrimary tracking-tight leading-tight">
                {personalDetails.name}
              </h1>
              <p className="text-base sm:text-xl text-accent font-mono font-bold mt-2">
                {personalDetails.subTitle}
              </p>
            </div>

            {/* Summary Statement */}
            <p className="text-textSecondary text-sm sm:text-base leading-relaxed max-w-2xl">
              {personalDetails.summary}
            </p>

            {/* Location & Role Chips */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-textMuted pt-1">
              <span className="flex items-center gap-1.5 bg-bgPrimary/80 px-3.5 py-1.5 rounded-lg border border-borderSubtle">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {personalDetails.location}
              </span>
              <span className="flex items-center gap-1.5 bg-bgPrimary/80 px-3.5 py-1.5 rounded-lg border border-borderSubtle">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Available for Data Analyst & Data Science Roles
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={personalDetails.resumeUrl}
                download="Shreya_Mishra_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-mono font-bold text-sm hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/25 focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bgSurfaceHover border border-borderSubtle hover:border-accent/50 text-textPrimary font-mono font-medium text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Send className="w-4 h-4 text-accent" />
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Headshot Frame */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent to-accentSecondary opacity-30 blur-md dark:opacity-50 transition-opacity" />

              {/* Headshot Card */}
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-3xl overflow-hidden bi-card border-2 border-accent/40 group bg-bgSurface">
                {!imgError ? (
                  <picture className="w-full h-full block">
                    <source srcSet="/assets/profile.webp" type="image/webp" />
                    <img
                      src="/assets/profile.jpg"
                      alt={personalDetails.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={() => setImgError(true)}
                    />
                  </picture>
                ) : (
                  <div className="w-full h-full bg-accent/15 flex flex-col items-center justify-center text-accent font-heading font-extrabold text-4xl">
                    <span>SM</span>
                    <span className="text-xs font-mono text-textMuted font-normal mt-1">Data Analyst</span>
                  </div>
                )}
                
                {/* Verified Overlay */}
                <div className="absolute bottom-2 left-2 right-2 bg-bgSurface/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-borderSubtle flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span className="text-[11px] font-mono font-bold text-textPrimary uppercase tracking-wider">
                      VERIFIED PROFILE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-accent">CS & Data</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ASYMMETRIC BENTO GRID FOR HERO METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Bento Hero Tile: Records Analyzed (Spans 6 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="md:col-span-6 bi-card rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-bgSurface to-bgSurfaceHover relative overflow-hidden"
        >
          <div className="flex items-center justify-between text-textMuted mb-4">
            <span className="text-xs font-mono text-accent font-bold uppercase tracking-wider flex items-center gap-2">
              <Database className="w-4 h-4" />
              KEY PIPELINE METRIC
            </span>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-500 font-semibold">
              High Precision ML
            </span>
          </div>

          <div>
            <div className="text-4xl sm:text-5xl font-mono font-extrabold text-textPrimary tracking-tight mb-2">
              <AnimatedCount value="7,000+" />
            </div>
            <h4 className="text-sm font-heading font-bold text-textPrimary">Customer Records Analyzed</h4>
            <p className="text-xs text-textMuted mt-1">Churn prediction model trained across Logistic Regression, Decision Trees, and Random Forest.</p>
          </div>

          <div className="pt-4 mt-4 border-t border-borderSubtle flex items-center justify-between">
            <span className="text-xs font-mono text-emerald-500 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> 89% Classification Precision
            </span>
            <svg className="w-24 h-6 text-accent opacity-80" viewBox="0 0 100 25">
              <path
                d="M 0 20 L 25 15 L 50 18 L 75 8 L 100 2"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>

        {/* Bento Tile 2: Academic CGPA (Spans 3 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="md:col-span-3 bi-card rounded-2xl p-5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-textMuted mb-2">
            <span className="text-xs font-mono text-textSecondary uppercase font-bold">Academic CGPA</span>
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <Award className="w-4 h-4" />
            </div>
          </div>

          <div className="my-2">
            <span className="text-3xl font-mono font-bold text-textPrimary">
              <AnimatedCount value="9.36" />
            </span>
            <span className="text-[10px] font-mono block text-emerald-500 mt-1 font-semibold">+0.12 vs department avg</span>
          </div>

          <div className="pt-2 border-t border-borderSubtle text-[11px] text-textMuted truncate">
            Computer Science Engineering
          </div>
        </motion.div>

        {/* Bento Tile 3: CodeVita Global Rank (Spans 3 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="md:col-span-3 bi-card rounded-2xl p-5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-textMuted mb-2">
            <span className="text-xs font-mono text-textSecondary uppercase font-bold">CodeVita Rank</span>
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <Trophy className="w-4 h-4" />
            </div>
          </div>

          <div className="my-2">
            <span className="text-3xl font-mono font-bold text-textPrimary">
              <AnimatedCount value="5,197" />
            </span>
            <span className="text-[10px] font-mono block text-emerald-500 mt-1 font-semibold">TCS CodeVita Season 13</span>
          </div>

          <div className="pt-2 border-t border-borderSubtle text-[11px] text-textMuted truncate">
            Global Competition Percentile
          </div>
        </motion.div>

        {/* Bento Tile 4: Active Internships (Spans 6 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="md:col-span-6 bi-card rounded-2xl p-5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-textMuted mb-2">
            <span className="text-xs font-mono text-textSecondary uppercase font-bold">Industry Roles</span>
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <Briefcase className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-baseline gap-4 my-1">
            <span className="text-3xl font-mono font-bold text-textPrimary">
              <AnimatedCount value="2" />
            </span>
            <span className="text-xs font-mono text-accent font-semibold">LazyStudents.in & EduLinkUp</span>
          </div>

          <div className="pt-2 border-t border-borderSubtle text-[11px] text-textMuted flex justify-between">
            <span>Product Analytics & Data Science</span>
            <span className="text-emerald-500 font-mono">June 2026 – Present</span>
          </div>
        </motion.div>

        {/* Bento Tile 5: Verified Certifications (Spans 6 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="md:col-span-6 bi-card rounded-2xl p-5 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between text-textMuted mb-2">
            <span className="text-xs font-mono text-textSecondary uppercase font-bold">Verified Credentials</span>
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-baseline gap-4 my-1">
            <span className="text-3xl font-mono font-bold text-textPrimary">
              <AnimatedCount value="7+" />
            </span>
            <span className="text-xs font-mono text-accent font-semibold">Google Cloud, Oracle, Deloitte, Infosys</span>
          </div>

          <div className="pt-2 border-t border-borderSubtle text-[11px] text-textMuted flex justify-between">
            <span>Data Analytics & Cloud Science</span>
            <span className="text-emerald-500 font-mono">100% Accredited</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
