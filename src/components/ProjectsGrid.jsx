import React, { useState } from 'react';
import { projectsData, projectCategories } from '../data/portfolioData';
import { FolderGit2, ExternalLink, Filter, Layers, Database, Sparkles, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.categoryTags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Section Watermark Anchor */}
      <span className="absolute top-10 right-6 text-9xl font-heading font-black text-textPrimary/5 select-none pointer-events-none -z-10">
        03
      </span>

      {/* Eyebrow Label & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-borderSubtle">
        <div>
          <div className="inline-flex items-center gap-2 text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-1">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03 // PROJECT REPOSITORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-textPrimary tracking-tight">
            Data Science & BI Dashboards
          </h2>
        </div>
        <p className="text-textMuted text-xs sm:text-sm font-mono mt-2 md:mt-0">
          FEATURED ML PIPELINES & TABLEAU/POWER BI
        </p>
      </div>

      {/* Filter Toolbar with Animated Sliding Pill */}
      <div className="flex flex-wrap items-center gap-2 mb-10 bg-bgSurface/80 p-2 rounded-2xl border border-borderSubtle">
        <div className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-textMuted border-r border-borderSubtle mr-1 hidden sm:flex">
          <Filter className="w-3.5 h-3.5 text-accent" />
          <span>QUERY BY CATEGORY:</span>
        </div>

        {projectCategories.map((category) => {
          const isActive = activeFilter === category;
          return (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className="relative px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent"
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="absolute inset-0 bg-accent rounded-xl shadow-md shadow-accent/25"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 font-bold ${isActive ? 'text-white' : 'text-textSecondary hover:text-textPrimary'}`}>
                {category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Asymmetric Bento Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, idx) => {
            const isFeatured = project.featured && activeFilter === 'All';

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className={`bi-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group ${
                  isFeatured
                    ? 'md:col-span-12 lg:col-span-8 bg-gradient-to-br from-bgSurface via-bgSurface to-bgSurfaceHover border-accent/40 shadow-xl'
                    : 'md:col-span-6 lg:col-span-4'
                }`}
              >
                <div>
                  {/* Card Header & Chips */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      {isFeatured && (
                        <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-amber-500 text-white uppercase flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" /> FLAGSHIP ML CASE STUDY
                        </span>
                      )}
                      {project.categoryTags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-accent/10 border border-accent/30 text-accent font-bold uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-bgPrimary hover:bg-accent/20 text-textSecondary hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className={`font-heading font-extrabold text-textPrimary group-hover:text-accent transition-colors mb-2 ${
                    isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
                  }`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-textSecondary text-sm mb-4 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Deep Details */}
                  <p className="text-textMuted text-xs mb-6 bg-bgPrimary/60 p-4 rounded-xl border border-borderSubtle leading-relaxed">
                    {project.details}
                  </p>
                </div>

                {/* Footer Metrics & Tech Stack */}
                <div className="pt-4 border-t border-borderSubtle space-y-3">
                  {/* Metrics Badge */}
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{project.metrics}</span>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-bgPrimary text-textMuted border border-borderSubtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
