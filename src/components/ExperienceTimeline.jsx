import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import EditorialReveal from './EditorialReveal';

// Reframe bullet-points into prose narrative with typographic detail (em-dashes)
const proseDescriptions = {
  lazystudents: "During my product analytics internship at LazyStudents.in, I worked closely with engineering to validate data integrity across document extraction modules. This involved identifying schema anomalies, building test scripts to log edge-case failures, and defining structured data dictionaries to maintain analytics tracking alignment. Additionally, I built a comparative evaluation framework—assessing model accuracy and latency tradeoffs—to determine the integration viability of alternative AI systems.",
  edulinkup: "At EduLinkUp, my focus was on the early stages of the data lifecycle. I developed automated preprocessing scripts in Python using Pandas and NumPy to clean and profile raw customer datasets. By mapping statistical correlations and outlier distributions in exploratory data profiling passes, I provided the descriptive reports that helped guide product direction.",
  "metro-fasteners": "As a freelance web developer, I built the client-facing catalog for Metro Fasteners using React, TypeScript, and Tailwind CSS. The technical challenge lay in coding client-side conversion models—allowing B2B clients to scale mechanical structural measurements instantly—while optimizing component routing for fast load times.",
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-borderSubtle max-w-6xl mx-auto">
      {/* Chapter Opener */}
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-textMuted block mb-2">04 // EXPERIENCE</span>
        <EditorialReveal>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight">
            Professional Engagements & Internships
          </h2>
        </EditorialReveal>
        <p className="text-sm text-textSecondary mt-2 max-w-lg font-sans">
          Prose timeline of hands-on data parsing and client interface engineering.
        </p>
      </div>

      {/* Prose Narrative Timeline */}
      <div className="space-y-16 max-w-4xl">
        {experienceData.map((job, index) => {
          const prose = proseDescriptions[job.id] || job.description;
          
          return (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start relative border-l border-borderSubtle pl-6 md:pl-0 md:border-l-0"
            >
              {/* Left Column: Role Metadata */}
              <div className="md:col-span-4 space-y-2">
                <span className="text-xs font-mono text-accent uppercase tracking-wider block">
                  {job.period}
                </span>
                
                <div>
                  <h3 className="font-serif text-xl font-bold text-textPrimary leading-tight">
                    {job.role}
                  </h3>
                  <span className="text-sm text-textSecondary font-sans font-medium">
                    {job.company}
                  </span>
                </div>
                
                <span className="text-xs text-textMuted font-mono block">
                  {job.location} · {job.type}
                </span>
              </div>
              
              {/* Right Column: Narrative Prose */}
              <div className="md:col-span-8 space-y-4">
                <p className="text-sm sm:text-base text-textSecondary font-sans leading-relaxed prose-editorial">
                  {prose}
                </p>
                
                {/* Embedded Tools */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[10px] font-mono text-textMuted uppercase tracking-widest self-center mr-2">tools:</span>
                  {job.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-mono text-textPrimary bg-bgSurface border border-borderSubtle px-2 py-0.5"
                    >
                      {skill}
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
