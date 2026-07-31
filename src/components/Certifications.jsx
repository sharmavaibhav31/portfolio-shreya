import React from 'react';
import { certifications, achievements } from '../data/portfolioData';
import { Award, Trophy, CheckCircle, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-borderSubtle">
        <div>
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-1">
            <Award className="w-3.5 h-3.5" />
            <span>05 // CREDENTIALS & AWARDS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textPrimary tracking-tight">
            Verified Certifications & Competitions
          </h2>
        </div>
        <p className="text-textMuted text-xs sm:text-sm font-mono mt-2 md:mt-0">
          INDUSTRY ACCREDITATIONS & GLOBAL RANKS
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Certifications Grid (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-heading font-bold text-textPrimary">
              Professional Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="bi-card rounded-xl p-4 flex flex-col justify-between hover:border-accent/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent font-semibold uppercase">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] font-mono text-textMuted">{cert.date}</span>
                  </div>

                  <h4 className="text-sm font-heading font-bold text-textPrimary leading-snug mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-accent font-medium mb-2">{cert.issuer}</p>
                  <p className="text-textMuted text-xs leading-relaxed">{cert.desc}</p>
                </div>

                <div className="pt-3 mt-3 border-t border-borderSubtle flex items-center justify-between text-[11px] font-mono text-emerald-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Completion
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Honors & Competitive Achievements (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <h3 className="text-lg font-heading font-bold text-textPrimary">
              Honors & Competitions
            </h3>
          </div>

          <div className="space-y-3">
            {achievements.map((ach, idx) => (
              <motion.div
                key={ach.event}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.06 }}
                className="bi-card rounded-xl p-4 flex items-start gap-3 hover:border-amber-500/40 transition-all duration-200"
              >
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 shrink-0 mt-0.5">
                  <Star className="w-4 h-4" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-heading font-bold text-textPrimary">
                      {ach.title}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 font-semibold">
                      {ach.highlight}
                    </span>
                  </div>
                  <p className="text-xs text-accent font-medium mt-0.5">{ach.event}</p>
                  <p className="text-textMuted text-xs mt-1 leading-relaxed">{ach.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
