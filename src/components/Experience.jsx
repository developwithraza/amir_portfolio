import React from "react";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2, Sparkles, Building } from "lucide-react";
import { experiencesData } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400">
            Proven track record of engineering scalable frontend applications, admin dashboards,
            and real-time workflows for dynamic tech teams.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-zinc-800 ml-4 sm:ml-32 md:ml-40 space-y-12">
          {experiencesData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline Pin Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 dark:bg-cyan-400 border-4 border-white dark:border-zinc-950 shadow-md" />

              {/* Date Badge positioned for desktop view */}
              <div className="sm:absolute sm:-left-36 md:-left-44 top-0.5 text-left sm:text-right mb-2 sm:mb-0">
                <span className="inline-block text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-lg border border-blue-200 dark:border-blue-800">
                  {exp.period}
                </span>
                <span className="block text-[11px] font-mono text-slate-400 mt-1">
                  {exp.duration}
                </span>
              </div>

              {/* Content Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-zinc-900/70 border border-slate-200/80 dark:border-zinc-800 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-zinc-800 pb-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 mt-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-xs font-mono text-slate-500 dark:text-zinc-400">
                    <span className="flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {exp.location}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                    Key Responsibilities & Contributions:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Environment Badges */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800/80">
                  <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500 block mb-2">
                    Environment & Tools:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.environment.map((env, eIdx) => (
                      <span
                        key={eIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700/60"
                      >
                        {env}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
