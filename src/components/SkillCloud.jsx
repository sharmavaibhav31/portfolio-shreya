import React, { useState } from 'react';
import { skillsGrouped } from '../data/portfolioData';
import { Cpu, Info, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SkillCloud() {
  const [activeSkill, setActiveSkill] = useState(null);

  const getSizeClasses = (size) => {
    switch (size) {
      case 'lg':
        return 'text-sm sm:text-base px-4 py-2 font-bold bg-accent/15 border-accent/40 text-accent shadow-sm';
      case 'md':
        return 'text-xs sm:text-sm px-3.5 py-1.5 font-semibold bg-bgSurfaceHover border-borderHighlight text-textPrimary';
      case 'sm':
      default:
        return 'text-xs px-3 py-1 font-medium bg-bgSurface border-borderSubtle text-textSecondary';
    }
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-borderSubtle">
        <div>
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>04 // SKILL MATRIX</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-textPrimary tracking-tight">
            Technical Stack & Tooling Cloud
          </h2>
        </div>
        <p className="text-textMuted text-xs sm:text-sm font-mono mt-2 md:mt-0">
          HOVER FOR SPECIFIC APPLICATION CONTEXT
        </p>
      </div>

      {/* Skill Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsGrouped.map((catGroup, cIdx) => (
          <div
            key={catGroup.category}
            className="bi-card rounded-xl p-6 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <h3 className="text-sm font-mono font-bold text-accent uppercase tracking-wider mb-4 pb-2 border-b border-borderSubtle flex items-center justify-between">
                <span>{catGroup.category}</span>
                <span className="text-[10px] text-textMuted font-normal">
                  {catGroup.skills.length} skills
                </span>
              </h3>

              {/* Tag Cloud Pills */}
              <div className="flex flex-wrap gap-2.5">
                {catGroup.skills.map((skill) => {
                  const isHovered = activeSkill?.name === skill.name;
                  return (
                    <div
                      key={skill.name}
                      className="relative"
                      onMouseEnter={() => setActiveSkill(skill)}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`rounded-xl border transition-all duration-200 cursor-pointer text-left ${getSizeClasses(
                          skill.size
                        )} ${isHovered ? 'ring-2 ring-accent shadow-lg shadow-accent/20' : ''}`}
                      >
                        {skill.name}
                      </motion.button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Tooltip Context Box */}
            <div className="mt-6 pt-4 border-t border-borderSubtle min-h-[64px] flex items-center">
              <AnimatePresence mode="wait">
                {activeSkill ? (
                  <motion.div
                    key={activeSkill.name}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex items-start gap-2 text-xs text-textPrimary bg-accent/10 p-2.5 rounded-lg border border-accent/30 w-full"
                  >
                    <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-mono font-bold text-accent">{activeSkill.name}: </span>
                      <span className="text-textSecondary">{activeSkill.note}</span>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-2 text-xs text-textMuted font-mono italic">
                    <Info className="w-4 h-4 opacity-50 shrink-0" />
                    <span>Hover over any skill pill above to inspect real portfolio usage details.</span>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
