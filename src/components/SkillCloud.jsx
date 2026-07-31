import React, { useState } from 'react';
import { skillsGrouped } from '../data/portfolioData';
import { Cpu, Info, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SkillCloud() {
  const [activeSkill, setActiveSkill] = useState(null);

  const getNodeStyles = (size) => {
    switch (size) {
      case 'lg':
        return 'text-sm sm:text-base px-4 py-2.5 font-mono font-bold bg-accent text-white shadow-md shadow-accent/25 border-accent-dark';
      case 'md':
        return 'text-xs sm:text-sm px-3.5 py-1.5 font-mono font-semibold bg-accentSecondary/15 border-accentSecondary/40 text-accentSecondary';
      case 'sm':
      default:
        return 'text-xs px-3 py-1 font-mono font-medium bg-bgSurface border-borderSubtle text-textSecondary';
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Section Watermark Anchor */}
      <span className="absolute top-10 right-6 text-9xl font-heading font-black text-textPrimary/5 select-none pointer-events-none -z-10">
        04
      </span>

      {/* Eyebrow Label & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-borderSubtle">
        <div>
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>04 // SKILL CONSTELLATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-textPrimary tracking-tight">
            Technical Stack & Tooling Matrix
          </h2>
        </div>
        <p className="text-textMuted text-xs sm:text-sm font-mono mt-2 md:mt-0">
          HOVER FOR SPECIFIC APPLICATION CONTEXT
        </p>
      </div>

      {/* Category Constellation Tracks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsGrouped.map((catGroup, cIdx) => (
          <motion.div
            key={catGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: cIdx * 0.08 }}
            className="bi-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              {/* Category Track Title */}
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-borderSubtle">
                <span className="text-xs font-mono font-extrabold text-accent uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  {catGroup.category}
                </span>
                <span className="text-[10px] font-mono text-textMuted bg-bgPrimary px-2 py-0.5 rounded border border-borderSubtle">
                  {catGroup.skills.length} MODULES
                </span>
              </div>

              {/* Constellation Nodes */}
              <div className="flex flex-wrap gap-2.5">
                {catGroup.skills.map((skill, sIdx) => {
                  const isHovered = activeSkill?.name === skill.name;
                  const isFeatured = skill.size === 'lg';

                  return (
                    <div
                      key={skill.name}
                      className="relative"
                      onMouseEnter={() => setActiveSkill(skill)}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      <motion.button
                        animate={isFeatured ? { y: [0, -3, 0] } : {}}
                        transition={isFeatured ? { duration: 3 + (sIdx % 3), repeat: Infinity, ease: "easeInOut" } : {}}
                        whileHover={{ scale: 1.06, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`rounded-xl border transition-all duration-200 cursor-pointer text-left focus-visible:ring-2 focus-visible:ring-accent ${getNodeStyles(
                          skill.size
                        )} ${isHovered ? 'ring-2 ring-amber-500 shadow-lg' : ''}`}
                      >
                        {skill.name}
                      </motion.button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Context Telemetry Box */}
            <div className="mt-6 pt-4 border-t border-borderSubtle min-h-[64px] flex items-center">
              <AnimatePresence mode="wait">
                {activeSkill ? (
                  <motion.div
                    key={activeSkill.name}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex items-start gap-2.5 text-xs text-textPrimary bg-accent/10 p-3 rounded-xl border border-accent/30 w-full"
                  >
                    <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono font-bold text-accent">{activeSkill.name}: </span>
                      <span className="text-textSecondary leading-relaxed">{activeSkill.note}</span>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-2 text-xs text-textMuted font-mono italic">
                    <Info className="w-4 h-4 opacity-50 shrink-0" />
                    <span>Hover over any skill node above to inspect real usage details.</span>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
