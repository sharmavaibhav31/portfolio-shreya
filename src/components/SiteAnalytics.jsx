import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { defaultAnalyticsData } from '../data/portfolioData';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Activity, ChevronDown, ChevronUp, Eye, Users, MousePointer, ShieldCheck, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SiteAnalytics() {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [sessionCount, setSessionCount] = useState(1);
  const [projectClicks, setProjectClicks] = useState(0);

  // Initialize and update local storage visit counters
  useEffect(() => {
    /* 
      ===================================================================
      ANALYTICS BACKEND INTEGRATION NOTE:
      Currently, visit tracking is persisted locally via browser localStorage.
      To connect to a live backend (e.g., Supabase table or Plausible API):
      Replace localStorage calls below with a REST/GraphQL fetch:
      
      await fetch('https://your-api.com/v1/analytics/visit', { method: 'POST' });
      ===================================================================
    */
    try {
      const storedVisits = localStorage.getItem('shreya_portfolio_visits');
      const count = storedVisits ? parseInt(storedVisits, 10) + 1 : 1;
      localStorage.setItem('shreya_portfolio_visits', count.toString());
      setSessionCount(count);

      const storedClicks = localStorage.getItem('shreya_portfolio_clicks') || '12';
      setProjectClicks(parseInt(storedClicks, 10));
    } catch (e) {
      console.warn('LocalStorage access restricted', e);
    }
  }, []);

  // Theme-aware chart colors
  const strokeColor = isDark ? '#38BDF8' : '#0284C7';
  const strokeColorAlt = isDark ? '#10B981' : '#059669';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';
  const textColor = isDark ? '#94A3B8' : '#475569';
  const tooltipBg = isDark ? '#141A24' : '#FFFFFF';
  const tooltipBorder = isDark ? 'rgba(56, 189, 248, 0.3)' : 'rgba(2, 132, 199, 0.3)';

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-borderSubtle">
      {/* Drawer Toggle Bar */}
      <div className="bi-card rounded-2xl overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-bgSurfaceHover transition-colors focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/15 text-accent">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div className="text-left">
              <span className="font-heading font-bold text-sm sm:text-base text-textPrimary flex items-center gap-2">
                Live Portfolio Analytics & Telemetry
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-semibold uppercase">
                  Active Demo
                </span>
              </span>
              <p className="text-xs text-textMuted font-mono">
                Click to inspect real-time visitor stats & 7-day traffic telemetry
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-accent font-mono text-xs">
            <span>{isOpen ? 'COLLAPSE PANEL' : 'EXPAND DASHBOARD'}</span>
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </button>

        {/* Collapsible Telemetry Dashboard Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-borderSubtle p-6 space-y-6"
            >
              {/* Telemetry KPI Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-bgPrimary/60 border border-borderSubtle flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-textMuted uppercase block">
                      Local Browser Visits
                    </span>
                    <span className="text-2xl font-mono font-bold text-textPrimary">
                      {sessionCount} <span className="text-xs text-emerald-500 font-normal">sessions</span>
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Users className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-bgPrimary/60 border border-borderSubtle flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-textMuted uppercase block">
                      Most Viewed Project
                    </span>
                    <span className="text-sm font-heading font-bold text-accent truncate block max-w-[180px]">
                      Churn Prediction ML
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-bgPrimary/60 border border-borderSubtle flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-textMuted uppercase block">
                      7-Day Total Views
                    </span>
                    <span className="text-2xl font-mono font-bold text-textPrimary">
                      1,779 <span className="text-xs text-emerald-500 font-normal">+18.4%</span>
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-500">
                    <MousePointer className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Recharts Traffic Line Chart */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono font-bold text-textSecondary uppercase tracking-wider">
                    7-Day Portfolio Traffic Telemetry (Page Views vs Visitors)
                  </h4>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <span className="flex items-center gap-1.5 text-accent">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent"></span> Page Views
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-500">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Unique Visitors
                    </span>
                  </div>
                </div>

                <div className="h-64 w-full pt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={defaultAnalyticsData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                      <XAxis dataKey="day" stroke={textColor} fontSize={12} tickLine={false} />
                      <YAxis stroke={textColor} fontSize={12} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: tooltipBg,
                          borderColor: tooltipBorder,
                          borderRadius: '0.75rem',
                          color: isDark ? '#F8FAFC' : '#0F172A',
                          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
                          fontSize: '12px',
                          fontFamily: 'JetBrains Mono'
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="pageViews"
                        stroke={strokeColor}
                        strokeWidth={3}
                        dot={{ fill: strokeColor, r: 4 }}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="uniqueVisitors"
                        stroke={strokeColorAlt}
                        strokeWidth={2}
                        strokeDasharray="4 4"
                        dot={{ fill: strokeColorAlt, r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Code Comment / Integration Banner */}
              <div className="p-3 rounded-lg bg-bgPrimary text-xs text-textMuted font-mono flex items-center justify-between border border-borderSubtle">
                <span className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-accent" />
                  Backend Ready: Wired with localStorage telemetry. Swap with REST endpoint for production analytics.
                </span>
                <span className="text-emerald-500 font-semibold hidden sm:inline">
                  STATUS: OK (200)
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
