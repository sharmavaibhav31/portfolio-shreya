import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

// Filter out the featured churn-prediction project
const otherProjects = projectsData.filter(p => p.id !== 'churn-prediction');

export default function AdditionalWork() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-borderSubtle max-w-6xl mx-auto">
      {/* Chapter Opener */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-5">
          <span className="text-xs font-mono uppercase tracking-widest text-textMuted block mb-2">03 // ADDITIONAL WORK</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight">
            Selected Analysis & Development Logs
          </h2>
        </div>
        <div className="md:col-span-7 flex items-end">
          <p className="text-sm text-textSecondary max-w-lg font-sans leading-relaxed">
            Supporting projects focusing on SQL queries, exploratory data analysis profiling, embedded analytics telemetry, and freelance client engineering.
          </p>
        </div>
      </div>

      {/* Asymmetric Editorial Feed */}
      <div className="space-y-16">
        {otherProjects.map((project, index) => {
          // Stagger styling parameters (asymmetric spacing & alignment)
          const isEven = index % 2 === 0;
          const numberString = `0${index + 1}`;
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start border-b border-borderSubtle pb-12 ${
                isEven ? 'md:pl-8' : 'md:pr-8'
              }`}
            >
              {/* Massive Serif Order Index */}
              <div className="md:col-span-2 text-hero-stat text-6xl text-accent font-light leading-none">
                {numberString}
              </div>
              
              {/* Project Details */}
              <div className="md:col-span-7 space-y-3">
                <h3 className="font-serif text-2xl font-bold text-textPrimary leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-sm text-textSecondary font-sans leading-relaxed prose-editorial">
                  {project.shortDesc} {project.details && <span className="opacity-80">{project.details}</span>}
                </p>
                
                {/* Tech Stack List */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-textMuted font-mono">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx}>
                      {tech}{idx < project.techStack.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Metadata & Link */}
              <div className="md:col-span-3 flex flex-col md:items-end justify-between h-full py-1 text-xs">
                {project.impact && (
                  <div className="md:text-right mb-4 md:mb-0">
                    <span className="text-[10px] font-mono text-textMuted uppercase tracking-widest block">result</span>
                    <span className="font-mono text-textPrimary font-semibold block mt-0.5">{project.impact.value}</span>
                    <span className="text-[10px] text-textMuted leading-normal block max-w-[200px] mt-0.5">{project.impact.context}</span>
                  </div>
                )}
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-accent hover:underline font-bold mt-auto"
                >
                  view repository <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
