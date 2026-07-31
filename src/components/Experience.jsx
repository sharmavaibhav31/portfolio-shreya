import React, { useState } from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Section Watermark Anchor */}
      <span className="absolute top-10 right-6 text-9xl font-heading font-black text-textPrimary/5 select-none pointer-events-none -z-10">
        02
      </span>

      {/* Eyebrow Label & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-borderSubtle">
        <div>
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-1">
            <Briefcase className="w-3.5 h-3.5" />
            <span>02 // EXPERIENCE LOG</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-textPrimary tracking-tight">
            Industry Experience & Roles
          </h2>
        </div>
        <p className="text-textMuted text-xs sm:text-sm font-mono mt-2 md:mt-0">
          PRODUCT ANALYTICS // DATA SCIENCE // FULL-STACK B2B
        </p>
      </div>

      {/* Numbered Station Timeline Container */}
      <div className="relative pl-6 sm:pl-12 border-l-2 border-dashed border-accent/40 space-y-12">
        {experienceData.map((exp, idx) => {
          const isHovered = hoveredId === exp.id;
          const stationNumber = `0${idx + 1}`;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group"
            >
              {/* Numbered Station Badge */}
              <div
                className={`absolute -left-[37px] sm:-left-[61px] top-1 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl font-mono font-bold text-xs sm:text-sm transition-all duration-300 ${
                  isHovered
                    ? 'bg-accent text-white scale-110 shadow-lg shadow-accent/40 ring-4 ring-accent/20'
                    : 'bg-bgSurface border-2 border-accent/50 text-accent'
                }`}
              >
                {stationNumber}
              </div>

              {/* Experience Card */}
              <div
                className={`bi-card rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  isHovered ? 'border-accent/60 shadow-xl' : ''
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-accent/10 text-accent">
                        STATION // {stationNumber}
                      </span>
                      <span className="text-xs font-mono text-textMuted">{exp.type}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-textPrimary flex flex-wrap items-center gap-2">
                      {exp.role}
                      <span className="text-accent font-mono font-semibold text-lg">@ {exp.company}</span>
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-textMuted font-mono mt-2">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-textMuted" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-textSecondary text-sm sm:text-base mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5 pt-4 border-t border-borderSubtle">
                  <span className="text-xs font-mono uppercase tracking-wider text-accent font-bold block mb-2">
                    ANALYTICAL DELIVERABLES & IMPACT:
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-textSecondary bg-bgPrimary/50 p-3 rounded-xl border border-borderSubtle"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-3 py-1 rounded-lg bg-bgPrimary text-textSecondary border border-borderSubtle font-medium"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
