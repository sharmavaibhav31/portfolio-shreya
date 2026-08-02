import React from 'react';
import { motion } from 'framer-motion';

export default function AboutNarrative() {
  return (
    <section id="about" className="py-24 px-6 border-t border-borderSubtle max-w-6xl mx-auto">
      {/* Chapter Opener */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-4">
          <span className="text-xs font-mono uppercase tracking-widest text-textMuted block mb-2">01 // INTRODUCTION</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-textPrimary tracking-tight">
            Approach & Perspective
          </h2>
          <p className="font-serif italic text-sm text-accent mt-2">
            "An analyst must build arguments, not just compile tables."
          </p>
        </div>
        
        {/* Editorial Narrative */}
        <div className="md:col-span-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-textSecondary space-y-6 prose-editorial"
          >
            <p>
              I approach data not simply as a series of database keys, but as active business narratives waiting to be parsed. Having completed my Computer Science Engineering degree at Mangalore Institute of Technology & Engineering with a cumulative CGPA of <strong className="text-textPrimary font-semibold font-serif text-xl">9.36</strong>, my core foundation is in computational engineering. I choose to apply that rigor to data analysis.
            </p>
            <p>
              For me, data cleaning and pipeline engineering are not mechanical steps; they are the moments where statistical integrity is established. An algorithm is only as credible as the feature engineering behind it. I specialize in building the end-to-end path: extracting raw, unstructured records, performing cleaning and exploratory profiling in Python, and landing the output in visual tracking suites like Power BI and Tableau.
            </p>
            <p>
              Currently based in Kolkata, I partner with product teams to build clean, reproducible pipelines that convert data anomalies into strategic decisions.
            </p>
          </motion.div>

          {/* Minimal Staggered Core Details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 border-t border-borderSubtle pt-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-textMuted block">education</span>
              <span className="text-sm font-sans font-medium text-textPrimary mt-1 block">B.E. Computer Science Engineering</span>
              <span className="text-xs font-sans text-textMuted">MITE, Mangalore</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-textMuted block">academic standing</span>
              <span className="text-sm font-sans font-medium text-textPrimary mt-1 block">9.36 CGPA</span>
              <span className="text-xs font-sans text-textMuted">Top Tier Standing</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-textMuted block">location</span>
              <span className="text-sm font-sans font-medium text-textPrimary mt-1 block">Kolkata, WB, India</span>
              <span className="text-xs font-sans text-textMuted">Open to Relocation / Remote</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
