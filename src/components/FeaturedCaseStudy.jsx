import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Legend,
  Cell
} from 'recharts';
import { ArrowUpRight, Database, Code, Layout } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import EditorialReveal from './EditorialReveal';

// Extract the specific project
const churnProject = projectsData.find(p => p.id === 'churn-prediction');

// Native Cinematic Statistic Counter
function CountUp({ value, duration = 1.8, delay = 0 }) {
  const [count, setCount] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setCount(value);
      return;
    }
    
    const suffix = value.replace(/[0-9.]/g, '');
    const startTime = performance.now();

    const animateCount = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easedProgress = progress * (2 - progress); // EaseOutQuad
      const currentVal = Math.floor(easedProgress * numValue);
      
      setCount(currentVal + suffix);
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };
    
    const timeout = setTimeout(() => {
      requestAnimationFrame(animateCount);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, duration, delay]);

  return <span ref={ref}>{count}</span>;
}

export default function FeaturedCaseStudy() {
  const chartData = churnProject.modelComparison;
  
  // State for interactive model switcher
  const [activeModel, setActiveModel] = useState("Random Forest");

  // Model-specific details for visual feedback
  const modelMetrics = {
    "Logistic Regression": {
      precision: "81%",
      recall: "76%",
      f1: "78%",
      insights: "Struggled with nonlinear features. False positive rates were high on multi-month contracts.",
      cohortSize: "982",
      mrr: "$21.5K"
    },
    "Decision Tree": {
      precision: "84%",
      recall: "82%",
      f1: "83%",
      insights: "Improved accuracy but showed significant overfitting on short-tenure customer branches.",
      cohortSize: "1,105",
      mrr: "$28.4K"
    },
    "Random Forest": {
      precision: "89%",
      recall: "86%",
      f1: "87%",
      insights: "Optimal balance of precision and recall. SMOTE boundaries resolved feature overlapping.",
      cohortSize: "1,204",
      mrr: "$34.2K"
    }
  };

  const currentMetrics = modelMetrics[activeModel];

  // Scroll tracking container
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scroll progress transforms for progressive assembly of elements
  const etlOpacity1 = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const etlOpacity2 = useTransform(scrollYProgress, [0.22, 0.37], [0, 1]);
  const etlOpacity3 = useTransform(scrollYProgress, [0.34, 0.49], [0, 1]);

  // Refined highlighting: cards stay stable structurally, fading in opacity as the reader reaches them
  const chartOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0.3, 1]);
  const pbiOpacity = useTransform(scrollYProgress, [0.45, 0.7], [0.3, 1]);

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
    <section 
      ref={containerRef}
      id="case-study" 
      className="py-24 px-6 border-t border-borderSubtle max-w-6xl mx-auto"
    >
      {/* Chapter Opener */}
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-textMuted block mb-2">02 // FEATURED CASE STUDY</span>
        <EditorialReveal>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-textPrimary max-w-4xl">
            Customer Churn Analytics & Predictive Modeling
          </h2>
        </EditorialReveal>
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
                In subscription business architectures, customer churn is a compounding leak. Relying on reactive support teams to save customers after they declare cancellation is too late. The goal was to build a system that detects subtle usage decay and alerts teams—before—the customer reaches the cancellation point.
              </p>
              <p>
                The scope required analyzing a dataset of <strong className="text-textPrimary font-semibold">7,043 unique accounts</strong>, mapping user demographics, contract type lengths, billing histories, and service features to identify high-probability churn indicators.
              </p>
            </div>
          </motion.div>

          {/* Beat 2: The ETL Pipeline (Progressive Assembly on Scroll) */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-textPrimary">The Pipeline</h3>
            
            {/* Horizontal ETL Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 border border-borderSubtle bg-bgSurface/40 overflow-hidden">
              <motion.div 
                style={{ opacity: etlOpacity1 }}
                className="p-5 border-b md:border-b-0 md:border-r border-borderSubtle"
              >
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <Database className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Extract</span>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed">
                  Ingested 7,043 raw customer profiles (demographic traits, charges, subscription tenure) from a staging database.
                </p>
              </motion.div>
              
              <motion.div 
                style={{ opacity: etlOpacity2 }}
                className="p-5 border-b md:border-b-0 md:border-r border-borderSubtle"
              >
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <Code className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Transform</span>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed">
                  Resolved multicollinearity, treated missing values, performed scaling, and corrected class imbalances using SMOTE in Jupyter.
                </p>
              </motion.div>
              
              <motion.div 
                style={{ opacity: etlOpacity3 }}
                className="p-5"
              >
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <Layout className="w-4 h-4" />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold">Load</span>
                </div>
                <p className="text-xs text-textSecondary leading-relaxed">
                  Exported prediction probabilities to a structured Power BI reporting suite, organizing risk tiers by monthly retention impact.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Beat 3: The Model Comparison */}
          <motion.div 
            style={{ opacity: chartOpacity }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl font-bold text-textPrimary">The Model Strategy</h3>
            <div className="prose-editorial text-textSecondary space-y-4">
              <p>
                To achieve high reliability, I developed and evaluated three distinct models: Logistic Regression, Decision Tree, and Random Forest. Given that business outreach to customers costs money, preventing false positive alarms was as critical as locating actual churners.
              </p>
              <p>
                The Random Forest model emerged as the most robust choice. It achieved an <strong className="text-accent font-semibold">89% precision score</strong> and <strong className="text-textPrimary font-semibold">86% recall</strong>, ensuring our customer success efforts target high-risk clients without wasting capital.
              </p>
            </div>

            {/* Model Toggle Buttons */}
            <div className="flex flex-wrap gap-2 pt-2 border-b border-borderSubtle pb-4">
              <span className="text-[10px] font-mono text-textMuted uppercase tracking-widest self-center mr-3">Interactive Toggle:</span>
              {["Logistic Regression", "Decision Tree", "Random Forest"].map((model) => (
                <button
                  key={model}
                  onClick={() => setActiveModel(model)}
                  className={`px-4 py-1.5 font-mono text-xs border rounded-full transition-all duration-300 ${
                    activeModel === model
                      ? "bg-accent border-accent text-white"
                      : "border-borderSubtle text-textSecondary hover:border-textSecondary hover:text-textPrimary"
                  }`}
                >
                  {model}
                </button>
              ))}
            </div>

            {/* Recharts chart dynamically highlighting active model */}
            <div className="border border-borderSubtle bg-bgSurface/20 p-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-textMuted block mb-4">Model metric evaluation (%)</span>
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
                    <Tooltip content={<CustomChartTooltip />} cursor={{ fill: 'rgba(184, 121, 79, 0.03)' }} />
                    <Legend 
                      wrapperStyle={{ fontSize: 10, fontFamily: 'monospace', paddingTop: 10 }}
                      verticalAlign="bottom"
                      align="right"
                      iconType="circle"
                      iconSize={6}
                    />
                    <Bar dataKey="precision" name="Precision" radius={[0, 4, 4, 0]} barSize={8}>
                      {chartData.map((entry, index) => (
                        <Cell 
                          key={`cell-prec-${index}`}
                          fill={entry.model === activeModel ? "var(--accent)" : "var(--text-muted)"}
                          opacity={entry.model === activeModel ? 1 : 0.4}
                          className="transition-all duration-500"
                        />
                      ))}
                    </Bar>
                    <Bar dataKey="f1" name="F1-Score" radius={[0, 4, 4, 0]} barSize={8}>
                      {chartData.map((entry, index) => (
                        <Cell 
                          key={`cell-f1-${index}`}
                          fill={entry.model === activeModel ? "var(--text-primary)" : "var(--text-muted)"}
                          opacity={entry.model === activeModel ? 1 : 0.3}
                          className="transition-all duration-500"
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right Column: Key Result Elements (Sticky) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
          
          {/* Typographic Hero Statistics */}
          <div className="border border-borderSubtle bg-bgSurface p-8 space-y-8 shadow-xl relative overflow-hidden">
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent block border-b border-borderSubtle pb-2">
              outcome benchmarks
            </span>
            
            {/* Dynamic visual parameters updating when user toggles model */}
            <div className="space-y-1">
              <span className="text-hero-stat text-6xl sm:text-7xl block text-accent font-light transition-all duration-500">
                <CountUp value={currentMetrics.precision} />
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-textPrimary font-semibold block">
                prediction precision
              </span>
              <p className="text-xs text-textSecondary leading-relaxed min-h-[32px] transition-all duration-300">
                {currentMetrics.insights}
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
              <span className="text-hero-stat text-5xl sm:text-6xl block text-textPrimary font-light transition-all duration-500">
                {activeModel === "Random Forest" ? "8 KPIs" : activeModel === "Decision Tree" ? "6 KPIs" : "4 KPIs"}
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
          <motion.div 
            style={{ opacity: pbiOpacity }}
            className="border border-borderSubtle bg-bgSurface/40 p-6 space-y-4"
          >
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
                <span className="text-[7px] text-textMuted transition-all duration-500">Model: {activeModel}</span>
              </div>
              
              {/* Scorecards */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border border-borderSubtle p-1.5 rounded bg-bgSurface/60">
                  <span className="text-[7px] text-textMuted block">Risk Volume</span>
                  <span className="text-xs text-accent font-semibold transition-all duration-500">{currentMetrics.cohortSize}</span>
                </div>
                <div className="border border-borderSubtle p-1.5 rounded bg-bgSurface/60">
                  <span className="text-[7px] text-textMuted block">Avg Tenure</span>
                  <span className="text-xs text-textPrimary font-semibold">18.4 mo</span>
                </div>
                <div className="border border-borderSubtle p-1.5 rounded bg-bgSurface/60">
                  <span className="text-[7px] text-textMuted block">Impact MRR</span>
                  <span className="text-xs text-textPrimary font-semibold transition-all duration-500">{currentMetrics.mrr}</span>
                </div>
              </div>
              
              {/* Simulated Chart visual */}
              <div className="flex-1 flex items-end gap-1.5 pt-4 pb-1 px-4">
                <div className="w-full bg-textMuted/15 h-full rounded-t relative">
                  <motion.div 
                    animate={{ height: activeModel === "Random Forest" ? "70%" : activeModel === "Decision Tree" ? "60%" : "45%" }}
                    className="absolute bottom-0 left-0 right-0 bg-accent/60 rounded-t transition-all duration-500" 
                  />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[6px]">Q1</span>
                </div>
                <div className="w-full bg-textMuted/15 h-full rounded-t relative">
                  <motion.div 
                    animate={{ height: activeModel === "Random Forest" ? "55%" : activeModel === "Decision Tree" ? "40%" : "30%" }}
                    className="absolute bottom-0 left-0 right-0 bg-accent/80 rounded-t transition-all duration-500" 
                  />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[6px]">Q2</span>
                </div>
                <div className="w-full bg-textMuted/15 h-full rounded-t relative">
                  <motion.div 
                    animate={{ height: activeModel === "Random Forest" ? "45%" : activeModel === "Decision Tree" ? "50%" : "60%" }}
                    className="absolute bottom-0 left-0 right-0 bg-accent/90 rounded-t transition-all duration-500" 
                  />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[6px]">Q3</span>
                </div>
                <div className="w-full bg-textMuted/15 h-full rounded-t relative">
                  <motion.div 
                    animate={{ height: activeModel === "Random Forest" ? "20%" : activeModel === "Decision Tree" ? "35%" : "40%" }}
                    className="absolute bottom-0 left-0 right-0 bg-accent rounded-t transition-all duration-500" 
                  />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[6px]">Q4</span>
                </div>
              </div>
              
              {/* Footer */}
              <div className="border-t border-borderSubtle pt-1.5 flex justify-between text-[7px] text-textMuted">
                <span>Active Risk Segments // Live</span>
              </div>
            </div>
            
            <p className="text-[11px] text-textSecondary leading-normal italic">
              “The predictive probabilities are segment-grouped into four risk levels. Rather than displaying raw scores, the dashboard groups them to flag churn triggers for account managers.”
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
