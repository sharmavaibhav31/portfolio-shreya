import React from 'react';
import { Database, AlertTriangle, ArrowLeft, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound({ onReturn }) {
  return (
    <div className="min-h-screen bg-bgPrimary text-textPrimary flex items-center justify-center p-6 bg-dashboard-grid">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bi-card rounded-2xl p-8 sm:p-12 max-w-lg w-full text-center space-y-6 shadow-2xl"
      >
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block">
            404 ERROR // QUERY EXCEPTION
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-textPrimary">
            Dataset Not Found
          </h1>
          <p className="text-sm text-textSecondary font-mono leading-relaxed pt-1">
            The metric or endpoint you requested returned a null record set. Verify the routing parameters or navigate back to the main dashboard.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-bgPrimary border border-borderSubtle text-xs font-mono text-textMuted text-left space-y-1">
          <div><span className="text-accent">STATUS:</span> 404 NOT_FOUND</div>
          <div><span className="text-accent">QUERY_ID:</span> 0x8F9A2B</div>
          <div><span className="text-accent">LOCATION:</span> /undefined-route</div>
        </div>

        <button
          onClick={onReturn || (() => window.location.href = '/')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/25 focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Dashboard</span>
        </button>
      </motion.div>
    </div>
  );
}
