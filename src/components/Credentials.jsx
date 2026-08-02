import React from 'react';
import { motion } from 'framer-motion';
import { certifications, achievements } from '../data/portfolioData';

export default function Credentials() {
  return (
    <section id="credentials" className="py-24 px-6 border-t border-borderSubtle max-w-6xl mx-auto">
      {/* Chapter Opener */}
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-textMuted block mb-2">06 // CREDENTIALS & ACHIEVEMENTS</span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight">
          Verifications & Academic Honors
        </h2>
        <p className="text-sm text-textSecondary mt-2 max-w-lg font-sans">
          Supporting credentials, competitive coding rankings, and leadership highlights.
        </p>
      </div>

      {/* Asymmetric Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Certifications (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-accent border-b border-borderSubtle pb-2 block">
            professional certifications
          </h3>
          
          <ul className="divide-y divide-borderSubtle">
            {certifications.map((cert, idx) => (
              <li key={idx} className="py-4 first:pt-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <span className="font-serif text-base font-bold text-textPrimary">
                    {cert.title}
                  </span>
                  <span className="text-xs font-mono text-textMuted whitespace-nowrap">
                    {cert.issuer} ({cert.date})
                  </span>
                </div>
                {cert.desc && (
                  <p className="text-xs text-textSecondary font-sans mt-1 leading-relaxed">
                    {cert.desc}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right Column: Achievements (5 cols) - offset vertically to break symmetry */}
        <div className="lg:col-span-5 lg:translate-y-8 space-y-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-accent border-b border-borderSubtle pb-2 block">
            honors & competition records
          </h3>
          
          <ul className="divide-y divide-borderSubtle">
            {achievements.map((ach, idx) => (
              <li key={idx} className="py-4 first:pt-0 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <span className="font-serif text-base font-bold text-textPrimary">
                    {ach.title}
                  </span>
                  <span className="text-xs font-mono text-accent whitespace-nowrap">
                    {ach.highlight}
                  </span>
                </div>
                <span className="text-xs font-sans text-textMuted block mt-0.5">
                  {ach.event}
                </span>
                {ach.desc && (
                  <p className="text-xs text-textSecondary font-sans mt-1 leading-relaxed">
                    {ach.desc}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
