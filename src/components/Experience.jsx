import React, { useState } from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-borderSubtle">
        <div>
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-1">
            <Briefcase className="w-3.5 h-3.5" />
            <span>02 // EXPERIENCE LOG</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textPrimary tracking-tight">
            Industry Experience & Internships
          </h2>
        </div>
        <p className="text-textMuted text-xs sm:text-sm font-mono mt-2 md:mt-0">
          DATA ANALYTICS // PRODUCT TESTING // WEB DEVELOPMENT
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-4 sm:pl-8 border-l-2 border-borderSubtle space-y-8">
        {experienceData.map((exp, idx) => {
          const isHovered = hoveredId === exp.id;
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
              {/* Timeline Node Icon */}
              <div
                className={`absolute -left-[25px] sm:-left-[41px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isHovered
                    ? 'bg-accent border-accent text-white scale-110 shadow-lg shadow-accent/40'
                    : 'bg-bgSurface border-borderHighlight text-accent'
                }`}
              >
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>

              {/* Experience Card */}
              <div
                className={`bi-card rounded-xl p-5 sm:p-6 transition-all duration-300 ${
                  isHovered ? 'bi-card-glow ring-1 ring-accent/40' : ''
                }`}
              >
                {/* Header: Role, Company & Type */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-textPrimary flex items-center gap-2">
                      {exp.role}
                      <span className="text-accent font-normal text-base">@ {exp.company}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-textMuted font-mono mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-textMuted" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-medium">
                    {exp.type}
                  </span>
                </div>

                {/* Short Overview */}
                <p className="text-textSecondary text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Expanded Bullet Points (Highlights) */}
                <div className="space-y-2 pt-3 border-t border-borderSubtle">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-textMuted font-semibold block mb-1">
                    Key Deliverables & Analytical Focus:
                  </span>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-textSecondary group-hover:text-textPrimary transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-bgPrimary text-textSecondary border border-borderSubtle"
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
