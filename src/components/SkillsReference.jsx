import React from 'react';
import { motion } from 'framer-motion';
import { skillsGrouped } from '../data/portfolioData';
import EditorialReveal from './EditorialReveal';

export default function SkillsReference() {
  // Let's divide categories for asymmetric column layout
  const col1 = [skillsGrouped[0], skillsGrouped[1]]; // Languages, ML
  const col2 = [skillsGrouped[2]]; // Vis & BI
  const col3 = [skillsGrouped[3], skillsGrouped[4]]; // DBs & Web

  const RenderCategory = ({ group }) => (
    <div key={group.category} className="space-y-4">
      <h3 className="font-serif text-xl font-bold text-textPrimary border-b border-borderSubtle pb-2">
        {group.category}
      </h3>
      <ul className="space-y-3">
        {group.skills.map((skill) => (
          <li key={skill.name} className="group flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-sm font-bold text-accent">
                {skill.name}
              </span>
              <span className="text-[10px] font-mono text-textMuted uppercase tracking-wider">
                {skill.size === 'lg' ? 'expert' : skill.size === 'md' ? 'proficient' : 'familiar'}
              </span>
            </div>
            {skill.note && (
              <p className="text-xs text-textSecondary font-sans leading-relaxed mt-0.5 max-w-sm">
                {skill.note}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="skills" className="py-24 px-6 border-t border-borderSubtle max-w-6xl mx-auto">
      {/* Chapter Opener */}
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-textMuted block mb-2">05 // TECHNICAL MATRIX</span>
        <EditorialReveal>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight">
            Tools & Capabilities Reference
          </h2>
        </EditorialReveal>
        <p className="text-sm text-textSecondary mt-2 max-w-lg font-sans">
          A cataloged index of technical proficiencies, organized by analytical domain.
        </p>
      </div>

      {/* Asymmetric Columns */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        {/* Column 1 (Left, wider, offset y) */}
        <div className="md:col-span-4 space-y-12 md:translate-y-4">
          {col1.map((group) => (
            <RenderCategory key={group.category} group={group} />
          ))}
        </div>
        
        {/* Column 2 (Center) */}
        <div className="md:col-span-4 space-y-12">
          {col2.map((group) => (
            <RenderCategory key={group.category} group={group} />
          ))}
        </div>
        
        {/* Column 3 (Right, narrow, offset y alternative) */}
        <div className="md:col-span-4 space-y-12 md:-translate-y-4">
          {col3.map((group) => (
            <RenderCategory key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
