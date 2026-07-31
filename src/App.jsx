import React, { lazy, Suspense, useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import HeroDashboard from './components/HeroDashboard';
import Experience from './components/Experience';
import ProjectsGrid from './components/ProjectsGrid';
import SkillCloud from './components/SkillCloud';
import Certifications from './components/Certifications';
import SiteAnalytics from './components/SiteAnalytics';
import ContactFooter from './components/ContactFooter';
import MapSkeleton from './components/MapSkeleton';

// Lazy-load heavier geospatial Map component for optimized initial page rendering
const ProjectMap = lazy(() => import('./components/ProjectMap'));

export default function App() {
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    // Check path for unexpected route testing
    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      setIs404(true);
    }
  }, []);

  if (is404) {
    return (
      <ThemeProvider>
        <NotFound onReturn={() => { setIs404(false); window.history.pushState({}, '', '/'); }} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bgPrimary text-textPrimary transition-colors duration-200 selection:bg-accent selection:text-white relative">
        {/* Viewport Scroll Progress Bar */}
        <ScrollProgress />

        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="space-y-4">
          <HeroDashboard />
          <Experience />
          <ProjectsGrid />
          <SkillCloud />
          <Certifications />
          
          {/* Lazy Loaded Map Component with Suspense Skeleton */}
          <Suspense fallback={<MapSkeleton />}>
            <ProjectMap />
          </Suspense>

          <SiteAnalytics />
        </main>

        {/* Footer */}
        <ContactFooter />
      </div>
    </ThemeProvider>
  );
}
