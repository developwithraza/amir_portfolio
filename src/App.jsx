import React, { useState } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import Particles from "./components/magicui/Particles";
import Meteors from "./components/magicui/Meteors";

function PortfolioContent() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-blue-500 selection:text-white transition-colors duration-300">
      {/* Background Interactive Particles */}
      <Particles quantity={40} ease={60} staticity={45} className="z-0" />

      {/* Dark mode celestial meteors */}
      {isDark && <Meteors number={16} className="z-0 opacity-40" />}

      {/* Ambient background glow accents */}
      <div className="pointer-events-none fixed top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="pointer-events-none fixed bottom-1/4 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

      {/* Main App Bar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
