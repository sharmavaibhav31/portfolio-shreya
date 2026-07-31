import React from 'react';
import { personalDetails, kpiMetrics } from '../data/portfolioData';
import { MapPin, Download, Send, CheckCircle2, Award, Briefcase, Database, Trophy, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Award: Award,
  Briefcase: Briefcase,
  Database: Database,
  CheckCircle: CheckCircle2,
  Trophy: Trophy,
};

export default function HeroDashboard() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSec = document.querySelector('#contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="dashboard" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* BI Dashboard Header Panel */}
      <div className="bi-card rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden mb-8">
        {/* Background Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Bio & Info */}
          <div className="lg:col-span-8 space-y-5">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAREER DATASET // DASHBOARD VIEW</span>
            </div>

            {/* Name & Title */}
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
              <span className="flex items-center gap-1.5 bg-bgPrimary/60 px-3 py-1.5 rounded-md border border-borderSubtle">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {personalDetails.location}
              </span>
              <span className="flex items-center gap-1.5 bg-bgPrimary/60 px-3 py-1.5 rounded-md border border-borderSubtle">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Open to Data Analyst & Data Science Roles
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={personalDetails.resumeUrl}
                download="Shreya_Mishra_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Download Resume PDF
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bgSurfaceHover border border-borderSubtle hover:border-accent/50 text-textPrimary font-medium text-sm transition-all duration-200"
              >
                <Send className="w-4 h-4 text-accent" />
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Headshot Profile */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent to-emerald-400 opacity-40 blur-md dark:opacity-60 transition-opacity" />

              {/* Headshot Card */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bi-card border-2 border-accent/40 group">
                <img
                  src={personalDetails.profileImage}
                  alt={personalDetails.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback if image fails
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400';
                  }}
                />
                
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
            </div>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="bi-card rounded-xl p-4 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200"
            >
              {/* Tile Top Header */}
              <div className="flex items-center justify-between text-textMuted mb-2">
                <span className="text-xs font-mono text-textSecondary uppercase tracking-wider">
                  {kpi.label}
                </span>
                <div className="p-1.5 rounded-lg bg-accent/10 text-accent">
                  <IconComponent className="w-4 h-4" />
                </div>
              </div>

              {/* Big KPI Metric Number */}
              <div className="flex items-baseline justify-between my-1">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-textPrimary tracking-tight">
                  {kpi.value}
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
