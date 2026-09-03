import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { personalInfo } from "../data/resumeData";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import WordRotate from "./magicui/WordRotate";
import ShimmerButton from "./magicui/ShimmerButton";
import HeroIllustration from "./illustrations/HeroIllustration";
import AnimatedGridPattern from "./magicui/AnimatedGridPattern";

export default function Hero({ onOpenResume }) {
  const rotatingWords = [
    "React.js Developer",
    "Next.js Developer",
    "Frontend Specialist",
    "Modern Web Architect",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden"
    >
      {/* Background Animated Grid Pattern */}
      <AnimatedGridPattern
        numSquares={25}
        maxOpacity={0.15}
        duration={3}
        className="[mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-medium shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-zinc-300 flex flex-wrap items-center gap-2">
                <span>Passionate</span>
                <WordRotate
                  words={rotatingWords}
                  className="gradient-text font-extrabold"
                  duration={2400}
                />
              </div>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
              React.js & Next.js Developer with <strong>3+ years of experience</strong> crafting
              high-performance web apps, scalable enterprise dashboards, role-based access systems,
              and real-time features using <strong>TypeScript, Redux Toolkit, and WebSockets</strong>.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 dark:text-zinc-400 pt-1">
              <span className="flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-rose-500" />
                Ghaziabad / Noida / Remote
              </span>
              <span className="flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-500" />
                Production-Tested Architecture
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#projects">
                <ShimmerButton
                  background="linear-gradient(135deg, #2563eb, #4f46e5)"
                  shimmerColor="#60a5fa"
                  className="text-white text-sm font-semibold shadow-lg shadow-blue-500/25 px-6 py-3"
                >
                  <span className="flex items-center space-x-2">
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </ShimmerButton>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center space-x-2 px-5 py-3 rounded-full border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-zinc-700 transition shadow-sm hover:scale-[1.02] active:scale-98"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Resume</span>
              </button>

              <div className="flex items-center space-x-2 pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-full border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-zinc-700 transition shadow-sm hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-full border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-300 dark:hover:border-cyan-800 transition shadow-sm hover:scale-105"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Me"
                  className="p-3 rounded-full border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-300 dark:hover:border-cyan-800 transition shadow-sm hover:scale-105"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80 dark:border-zinc-800/80">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-zinc-900/50 border border-slate-200/60 dark:border-zinc-800/60">
                  <div className="text-xl sm:text-2xl font-black gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 dark:text-zinc-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: High-tech Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
