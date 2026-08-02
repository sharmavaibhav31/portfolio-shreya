import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from 'recharts';
import { ArrowUpRight, Database, Code, Layout } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

// Extract the specific project
const churnProject = projectsData.find(p => p.id === 'churn-prediction');

export default function FeaturedCaseStudy() {
  const chartData = churnProject.modelComparison;

  // Custom tooltips matching theme variables
  const CustomChartTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-bgSurface border border-borderHighlight p-3 shadow-lg rounded-md text-xs font-sans">
          <p className="font-serif font-bold text-textPrimary mb-1.5">{label}</p>
          {payload.map((entry, idx) => (
            <div key={idx} className="flex justify-between gap-6 py-0.5 text-textSecondary">
              <span className="capitalize">{entry.name}:</span>
              <span className="font-mono text-accent font-semibold">{entry.value}%</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="case-study" className="py-24 px-6 border-t border-borderSubtle max-w-6xl mx-auto">
      {/* Chapter Opener */}
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-textMuted block mb-2">02 // FEATURED CASE STUDY</span>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-textPrimary max-w-4xl">
          Customer Churn Analytics & Predictive Modeling
        </h2>
        <p className="text-lg text-textSecondary mt-4 max-w-2xl font-sans">
          How we resolved customer retention leaks in a 7,043-record subscriber base, linking machine learning probabilities directly to front-line customer retention tools.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Narrative Beats */}
        <div className="lg:col-span-7 space-y-16">
          
          {/* Beat 1: The Problem */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-serif text-2xl font-bold text-textPrimary">The Problem</h3>
            <div className="prose-editorial text-textSecondary space-y-4">
              <p>
                In subscription business architectures, customer churn is a compounding leak. Relying on reactive support teams to save customers after they declare cancellation is too late. The goal was to build a system that detects subtle usage decay and alerts teams *before* the customer reaches the cancellation point.
              </p>
              <p>
                The scope required analyzing a dataset of <strong className="text-textPrimary font-semibold">7,043 unique accounts</strong>, mapping user demographics, contract type lengths, billing histories, and service features to identify high-probability churn indicators.
              </p>
            </div>
          </motion.div>

          {/* Beat 2: The ETL Pipeline */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold text-textPrimary">The Pipeline</h3>
            
            {/* Horizontal ETL Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 border border-borderSubtle bg-bgSurface/40">
              <div className="p-5 border-b md:border-b-0 md:border-r border-borderSubtle">
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <Database className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Extract</span>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed">
                  Ingested 7,043 raw customer profiles (demographic traits, charges, subscription tenure) from a staging database.
                </p>
              </div>
              <div className="p-5 border-b md:border-b-0 md:border-r border-borderSubtle">
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <Code className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Transform</span>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed">
                  Resolved multicollinearity, treated missing values, performed scaling, and corrected class imbalances using SMOTE in Jupyter.
                </p>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <Layout className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Load</span>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed">
                  Exported prediction probabilities to a structured Power BI reporting suite, organizing risk tiers by monthly retention impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Beat 3: The Model Comparison */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold text-textPrimary">The Model Strategy</h3>
            <div className="prose-editorial text-textSecondary space-y-4">
              <p>
                To achieve high reliability, I developed and evaluated three distinct models: Logistic Regression, Decision Tree, and Random Forest. Given that business outreach to customers costs money, preventing false positive alarms was as critical as locating actual churners.
              </p>
              <p>
                The **Random Forest** model emerged as the most robust choice. It achieved an **89% precision score** and **86% recall**, ensuring our customer success efforts target high-risk clients without wasting capital.
              </p>
            </div>

            {/* Minimal embedded Recharts horizontal bar chart */}
            <div className="border border-borderSubtle bg-bgSurface/20 p-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-textMuted block mb-4">model metric evaluation (%)</span>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    layout="vertical"
                    margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                  >
                    <XAxis 
                      type="number" 
                      domain={[0, 100]} 
                      stroke="var(--text-muted)" 
                      tick={{ fontSize: 10, fontFamily: 'monospace' }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="model" 
                      stroke="var(--text-primary)" 
                      tick={{ fontSize: 11, fontFamily: 'serif', fontWeight: 'bold' }}
                      width={120}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<CustomChartTooltip />} cursor={{ fill: 'rgba(184, 121, 79, 0.05)' }} />
                    <Legend 
                      wrapperStyle={{ fontSize: 10, fontFamily: 'monospace', paddingTop: 10 }}
                      verticalAlign="bottom"
                      align="right"
                      iconType="circle"
                      iconSize={6}
                    />
                    <Bar dataKey="precision" name="Precision" fill="var(--accent)" radius={[0, 4, 4, 0]} barSize={8} />
                    <Bar dataKey="f1" name="F1-Score" fill="var(--text-secondary)" radius={[0, 4, 4, 0]} barSize={8} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right Column: Key Result Elements */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
          
          {/* Typographic Hero Statistics */}
          <div className="border border-borderSubtle bg-bgSurface p-8 space-y-8 shadow-xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent block border-b border-borderSubtle pb-2">
              outcome benchmarks
            </span>
            
            <div className="space-y-1">
              <span className="text-hero-stat text-6xl sm:text-7xl block text-accent font-light">
                {churnProject.impact.value}
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-textPrimary font-semibold block">
                prediction precision
              </span>
              <p className="text-xs text-textSecondary leading-relaxed">
                {churnProject.impact.context}
              </p>
            </div>

            <div className="space-y-1 pt-4 border-t border-borderSubtle">
              <span className="text-hero-stat text-5xl sm:text-6xl block text-textPrimary font-light">
                7,000+
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-textSecondary block">
                records parsed
              </span>
              <p className="text-xs text-textSecondary leading-relaxed">
                Cleaned using scaling, binary variables, and SMOTE vectorization.
              </p>
            </div>
            
            <div className="space-y-1 pt-4 border-t border-borderSubtle">
              <span className="text-hero-stat text-5xl sm:text-6xl block text-textPrimary font-light">
                8 KPIs
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-textSecondary block">
                dashboard metrics
              </span>
              <p className="text-xs text-textSecondary leading-relaxed">
                Interactive tracking elements including risk stratification and cohort margins.
              </p>
            </div>
          </div>

          {/* Custom Authored Dashboard Visual representation */}
          <div className="border border-borderSubtle bg-bgSurface/40 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-textMuted">
                power bi logic visual mockup
              </span>
              <a 
                href={churnProject.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-mono text-accent hover:underline flex items-center gap-1"
              >
                git repository <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            
            {/* SVG Visual Layout representing Power BI */}
            <div className="aspect-[16/10] bg-bgPrimary border border-borderSubtle rounded-md p-3 flex flex-col justify-between text-[9px] font-mono">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-borderSubtle pb-2">
                <span className="font-serif font-bold text-[10px] text-textPrimary">Subscriber Churn Profile</span>
                <span className="text-textMuted">Filter: All Regions</span>
              </div>
              
              {/* Scorecards */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border border-borderSubtle p-1.5 rounded bg-bgSurface/60">
                  <span className="text-[7px] text-textMuted block">Risk Volume</span>
                  <span className="text-xs text-accent font-semibold">1,204</span>
                </div>
                <div className="border border-borderSubtle p-1.5 rounded bg-bgSurface/60">
                  <span className="text-[7px] text-textMuted block">Avg Tenure</span>
                  <span className="text-xs text-textPrimary font-semibold">18.4 mo</span>
                </div>
                <div className="border border-borderSubtle p-1.5 rounded bg-bgSurface/60">
                  <span className="text-[7px] text-textMuted block">Impact MRR</span>
                  <span className="text-xs text-textPrimary font-semibold">$34.2K</span>
                </div>
              </div>
              
              {/* Simulated Chart visual */}
              <div className="flex-1 flex items-end gap-1.5 pt-4 pb-1 px-4">
                <div className="w-full bg-textMuted/15 h-full rounded-t relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-accent/60 h-2/3 rounded-t" />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[6px]">Q1</span>
                </div>
                <div className="w-full bg-textMuted/15 h-full rounded-t relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-accent/80 h-1/2 rounded-t" />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[6px]">Q2</span>
                </div>
                <div className="w-full bg-textMuted/15 h-full rounded-t relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-accent/90 h-1/3 rounded-t" />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[6px]">Q3</span>
                </div>
                <div className="w-full bg-textMuted/15 h-full rounded-t relative">
                  <div className="absolute bottom-0 left-0 right-0 bg-accent h-1/5 rounded-t" />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[6px]">Q4</span>
                </div>
              </div>
              
              {/* Footer */}
              <div className="border-t border-borderSubtle pt-1.5 flex justify-between text-[7px] text-textMuted">
                <span>Model: rf_v2.1_smote</span>
                <span>Active Risk Segments // Live</span>
              </div>
            </div>
            
            <p className="text-[11px] text-textSecondary leading-normal italic">
              "The predictive probabilities are segment-grouped into four risk levels. Rather than displaying raw scores, the dashboard groups them to flag churn triggers for account managers."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
