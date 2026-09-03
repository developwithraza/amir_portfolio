import React from "react";
import { 
  Layout, Cpu, Palette, ShieldCheck, Radio, Database, 
  Sparkles, CheckCircle, Code, Layers 
} from "lucide-react";
import { skillsData, personalInfo } from "../data/resumeData";
import Marquee from "./magicui/Marquee";
import MagicCard from "./magicui/MagicCard";

const categoryIcons = {
  "Frontend Development": Layout,
  "State Management & Architecture": Cpu,
  "UI & Styling": Palette,
  "APIs & Authentication": ShieldCheck,
  "Real-Time & Cloud Services": Radio,
  "Backend & Integrations": Database,
};

export default function Skills() {
  const halfSkills = Math.ceil(skillsData.highlighted.length / 2);
  const firstRow = skillsData.highlighted.slice(0, halfSkills);
  const secondRow = skillsData.highlighted.slice(halfSkills);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Modern Stack
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400">
            A comprehensive suite of technologies, architectural patterns, and integrations I leverage
            to build production-grade web applications.
          </p>
        </div>

        {/* Magic UI Infinite Marquee Ticker */}
        <div className="relative rounded-2xl bg-slate-100/70 dark:bg-zinc-900/40 border border-slate-200/80 dark:border-zinc-800/80 p-4 mb-16 overflow-hidden backdrop-blur-md">
          {/* Gradient edge masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10" />

          <Marquee pauseOnHover className="[--duration:25s] mb-3">
            {firstRow.map((skill, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-800/90 border border-slate-200 dark:border-zinc-700 shadow-sm text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:border-blue-500 transition-colors"
              >
                <Code className="w-3.5 h-3.5 text-blue-500" />
                <span>{skill}</span>
              </div>
            ))}
          </Marquee>

          <Marquee reverse pauseOnHover className="[--duration:28s]">
            {secondRow.map((skill, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-800/90 border border-slate-200 dark:border-zinc-700 shadow-sm text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:border-cyan-500 transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-cyan-500" />
                <span>{skill}</span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bento Grid: 6 Categorized Skill Clusters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((cat, index) => {
            const Icon = categoryIcons[cat.title] || Code;

            return (
              <MagicCard
                key={index}
                className="flex flex-col justify-between p-6 rounded-2xl"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`p-2.5 rounded-xl bg-gradient-to-tr ${cat.color} text-white shadow-md`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                        {cat.skills.length} core technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center text-xs px-2.5 py-1 rounded-lg bg-slate-100/90 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-zinc-700/60 font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400 font-mono">
                  <span>Proficiency: Advanced</span>
                  <span className="text-emerald-500 font-semibold flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" /> Ready
                  </span>
                </div>
              </MagicCard>
            );
          })}
        </div>

        {/* Key Strengths Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-cyan-500/5 border border-blue-500/20 backdrop-blur-md">
          <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-3">
            Core Architectural Strengths
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {personalInfo.keyStrengths.map((strength, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 font-medium text-slate-700 dark:text-zinc-300 shadow-sm"
              >
                ⚡ {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
