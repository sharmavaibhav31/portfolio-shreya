import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, RotateCcw, X, HelpCircle } from 'lucide-react';

const QUESTIONS = [
  // CATEGORY 1: Credibility
  {
    id: 'cred-1',
    category: 'Credibility',
    label: 'Tell me about this profile.',
    variants: [
      'I like taking messy datasets apart, figuring out what’s actually happening underneath, and presenting the answer in a way people can actually use. Everything else is just tooling.',
      'My work usually starts where spreadsheets stop making sense. Whether it’s Python for cleaning data, SQL for finding patterns, or Power BI for telling the story, I enjoy building the whole pipeline instead of just one piece of it.',
      'If you scroll long enough, you’ll notice a pattern: clean data, explain it well, repeat. That’s basically the job, just with more Pandas and fewer dramatic montages.'
    ]
  },
  {
    id: 'cred-2',
    category: 'Credibility',
    label: 'Why should we hire you?',
    variants: [
      'I’ve already worked in two live internships, so I’m comfortable dealing with real datasets instead of textbook-perfect ones. Turns out production data has a personality. Usually a difficult one.',
      'I built a churn prediction project on 7,043 customer records, compared three different machine learning models, and picked the one that balanced precision and recall instead of chasing the prettiest accuracy number. Practical decisions age better than flashy metrics.',
      'My retail analytics project wasn’t just SQL practice—I used SQL to uncover patterns and Tableau to make them understandable. Queries are useful; decisions are better.'
    ]
  },
  {
    id: 'cred-3',
    category: 'Credibility',
    label: 'What makes you different?',
    variants: [
      'I don’t stop after getting a model to run. I care about whether someone can actually use the output, which is why I enjoy dashboards almost as much as notebooks.',
      'I like solving problems that live between engineering and analytics. Clean the data, build the logic, visualize the result. The handoffs are where most things break.',
      'I ranked 5,197 globally in TCS CodeVita Season 13, which mostly means I enjoy solving difficult problems long after normal people would’ve taken a coffee break.'
    ]
  },
  {
    id: 'cred-4',
    category: 'Credibility',
    label: 'What’s your strongest skill?',
    variants: [
      'Probably turning noisy data into something trustworthy. Data cleaning isn’t glamorous, but neither are foundations—and buildings still need those.',
      'SQL gets me answers, Python gets me flexibility, and dashboards help everyone else see why the answers matter.',
      'I enjoy finding patterns without forcing conclusions. Correlation is exciting. Evidence is better.'
    ]
  },
  // CATEGORY 2: Humor
  {
    id: 'humor-1',
    category: 'Humor',
    label: 'Tell me a joke.',
    variants: [
      'I trust a clean dataset about as much as I trust someone who says, “It worked on my machine.”',
      'My favorite relationship status? One-to-many.',
      'I don’t chase red flags. I classify them.'
    ]
  },
  {
    id: 'humor-2',
    category: 'Humor',
    label: 'Make me laugh.',
    variants: [
      'I spent hours cleaning a dataset only to realize the typo was in my own SQL query. Character-building experience.',
      'My Random Forest converged faster than some group project discussions.',
      'I’ve seen null values with stronger communication skills than some APIs.'
    ]
  },
  {
    id: 'humor-3',
    category: 'Humor',
    label: 'Any analyst humor?',
    variants: [
      'Correlation isn’t causation... but it is how conspiracy theories get started.',
      'Feature engineering is just politely admitting the original data wasn’t trying very hard.',
      'I don’t fear deadlines. I fear CSV files with mixed date formats.'
    ]
  },
  {
    id: 'humor-4',
    category: 'Humor',
    label: 'One more.',
    variants: [
      'If debugging burned calories, I’d have six-pack abs.',
      'Nothing humbles you faster than a dashboard that’s technically correct and visually terrible.',
      'My models don’t judge people. They assign probabilities.'
    ]
  },
  // CATEGORY 3: Warmth
  {
    id: 'warmth-1',
    category: 'Warmth',
    label: 'Compliment me.',
    variants: [
      'The fact that you’re exploring someone’s work instead of just skimming a résumé already says something good about how you make decisions.',
      'Curiosity is underrated. Most good careers quietly begin with someone asking one more question.',
      'Thanks for spending your time here. Attention is valuable, and I don’t take it for granted.'
    ]
  },
  {
    id: 'warmth-2',
    category: 'Warmth',
    label: 'Tell me something to make me smile.',
    variants: [
      'If you’re figuring things out as you go, you’re in good company. Most interesting careers aren’t built in straight lines.',
      'Every expert has a folder full of old projects they’d rather nobody see. Progress is usually less glamorous than it looks.',
      'The next opportunity that changes everything probably won’t announce itself first. Keep showing up anyway.'
    ]
  },
  {
    id: 'warmth-3',
    category: 'Warmth',
    label: 'I’m feeling stuck.',
    variants: [
      'Being stuck usually means you’re attempting something difficult enough to matter. That’s not the worst place to be.',
      'One finished project teaches more than ten perfect plans. Small progress compounds.',
      'Remember that every polished portfolio started as a folder named something like “final_v2_REAL_final”.'
    ]
  },
  {
    id: 'warmth-4',
    category: 'Warmth',
    label: 'Any advice?',
    variants: [
      'Don’t compare your beginning to someone else’s highlight reel. Compare today’s work to yesterday’s.',
      'Skills grow quietly. One good project at a time is still a strategy.',
      'If you care enough to keep learning, you’re already moving in the right direction. Momentum usually looks ordinary before it looks impressive.'
    ]
  }
];

export default function AskMeAnything({ isOpen, setIsOpen }) {
  const [history, setHistory] = useState([
    {
      sender: 'shreya',
      text: 'Ask me anything about my data analytics background. I’ve pre-loaded some options below.'
    }
  ]);
  const desktopLogRef = useRef(null);
  const mobileLogRef = useRef(null);
  const panelRef = useRef(null);

  // Auto-scroll logs
  useEffect(() => {
    const scrollLog = () => {
      if (desktopLogRef.current) {
        desktopLogRef.current.scrollTo({
          top: desktopLogRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
      if (mobileLogRef.current) {
        mobileLogRef.current.scrollTo({
          top: mobileLogRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    };
    
    scrollLog();
    const rafId = requestAnimationFrame(scrollLog);
    return () => cancelAnimationFrame(rafId);
  }, [history, isOpen]);

  // Click outside to close dialogue panel
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        // Skip closing if click was on the trigger button
        if (event.target.closest('[title="Ask Shreya a question"]') || event.target.closest('.lg\\:hidden')) {
          return;
        }
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const handleAsk = (question) => {
    // Pick random variant to give variety
    const randomIndex = Math.floor(Math.random() * question.variants.length);
    const answer = question.variants[randomIndex];

    setHistory((prev) => [
      ...prev,
      { sender: 'user', text: question.label },
      { sender: 'shreya', text: answer }
    ]);
  };

  const handleReset = () => {
    setHistory([
      {
        sender: 'shreya',
        text: 'Ask me anything about my data analytics background. I’ve pre-loaded some options below.'
      }
    ]);
  };

  return (
    <>
      {/* Desktop Anchored Margin Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-6 top-[12%] w-[400px] max-h-[82vh] bg-bgSurface border border-borderSubtle shadow-2xl p-5 flex flex-col z-40 rounded select-none font-sans"
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-borderSubtle pb-3 mb-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-accent" />
                <span className="text-xs font-mono uppercase tracking-wider text-textPrimary">Ask Shreya</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-bgSurfaceHover rounded text-textMuted hover:text-textPrimary transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat History Log */}
            <div 
              ref={desktopLogRef}
              className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-thin max-h-[380px]"
            >
              {history.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <span className="text-[9px] font-mono text-textMuted uppercase mb-1">
                    {msg.sender === 'user' ? 'Visitor' : 'Shreya'}
                  </span>
                  <motion.div
                    initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.35 }}
                    className={`max-w-[90%] text-xs p-2.5 rounded leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-accent text-white font-medium font-sans'
                        : 'bg-bgPrimary border border-borderSubtle text-textSecondary font-sans'
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Questions list */}
            <div className="border-t border-borderSubtle pt-3 mt-3 flex flex-col gap-1.5 overflow-y-auto max-h-[260px]">
              <span className="text-[9px] font-mono uppercase tracking-widest text-textMuted mb-1 block">
                Select a Question:
              </span>
              {QUESTIONS.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleAsk(q)}
                  className="text-left text-[11px] font-sans text-textSecondary hover:text-accent hover:bg-bgSurfaceHover px-2 py-1.5 rounded border border-transparent hover:border-borderSubtle transition-all duration-200 cursor-pointer"
                >
                  {q.label}
                </button>
              ))}
              
              <button
                onClick={handleReset}
                className="mt-2 flex items-center justify-center gap-1.5 py-1.5 border border-dashed border-borderSubtle hover:border-accent text-[10px] font-mono text-textMuted hover:text-accent uppercase tracking-wider rounded transition-all duration-200 cursor-pointer animate-pulse"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Conversation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer (Bottom Sheet) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black md:hidden z-40"
            />
            
            {/* Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-x-0 bottom-0 max-h-[80vh] bg-bgSurface border-t border-borderSubtle shadow-2xl p-6 rounded-t-2xl md:hidden z-50 flex flex-col font-sans"
            >
              {/* Drawer handle indicator */}
              <div className="w-12 h-1 bg-borderSubtle rounded-full mx-auto mb-4" />
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-borderSubtle pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-accent" />
                  <span className="text-xs font-mono uppercase tracking-wider text-textPrimary">Ask Shreya</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-bgSurfaceHover rounded text-textMuted hover:text-textPrimary transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat History Log */}
              <div 
                ref={mobileLogRef}
                className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-thin min-h-[160px] max-h-[220px]"
              >
                {history.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <span className="text-[9px] font-mono text-textMuted uppercase mb-1">
                      {msg.sender === 'user' ? 'Visitor' : 'Shreya'}
                    </span>
                    <motion.div
                      initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.35 }}
                      className={`max-w-[90%] text-xs p-2.5 rounded leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-accent text-white font-medium font-sans'
                          : 'bg-bgPrimary border border-borderSubtle text-textSecondary font-sans'
                      }`}
                    >
                      {msg.text}
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Questions list */}
              <div className="border-t border-borderSubtle pt-3 mt-3 flex flex-col gap-1.5 overflow-y-auto max-h-[280px]">
                <span className="text-[9px] font-mono uppercase tracking-widest text-textMuted mb-1 block">
                  Select a Question:
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  {QUESTIONS.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => handleAsk(q)}
                      className="text-left text-[11px] font-sans text-textSecondary hover:text-accent hover:bg-bgSurfaceHover px-2.5 py-2 rounded border border-borderSubtle transition-all duration-200 cursor-pointer"
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={handleReset}
                  className="mt-2 flex items-center justify-center gap-1.5 py-2 border border-dashed border-borderSubtle hover:border-accent text-[10px] font-mono text-textMuted hover:text-accent uppercase tracking-wider rounded transition-all duration-200 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Conversation
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
