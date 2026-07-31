import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroDashboard from './components/HeroDashboard';
import Experience from './components/Experience';
import ProjectsGrid from './components/ProjectsGrid';
import SkillCloud from './components/SkillCloud';
import Certifications from './components/Certifications';
import ProjectMap from './components/ProjectMap';
import SiteAnalytics from './components/SiteAnalytics';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bgPrimary text-textPrimary transition-colors duration-200 selection:bg-accent selection:text-white">
        <Navbar />
        <main>
          <HeroDashboard />
          <Experience />
          <ProjectsGrid />
          <SkillCloud />
          <Certifications />
          <ProjectMap />
          <SiteAnalytics />
        </main>
        <ContactFooter />
      </div>
    </ThemeProvider>
  );
}
