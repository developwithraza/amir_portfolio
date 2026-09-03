import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Globe, Sparkles, MapPin, Calendar } from "lucide-react";
import { educationData, languagesData } from "../data/resumeData";
import MagicCard from "./magicui/MagicCard";

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Languages
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400">
            Solid foundations in computer science principles, software engineering, and bilingual communication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Degrees Grid */}
          <div className="lg:col-span-8 space-y-6">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <MagicCard className="p-6 sm:p-8 rounded-2xl">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-start space-x-3.5">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {item.degree}
                        </h3>
                        <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400">
                          {item.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start sm:items-end text-xs font-mono text-slate-500 dark:text-zinc-400">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1 text-slate-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center mt-0.5">
                        <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 pt-4 mt-2">
                    {item.description}
                  </p>
                </MagicCard>
              </motion.div>
            ))}
          </div>

          {/* Languages & Core Competencies Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <MagicCard className="p-6 rounded-2xl">
              <div className="flex items-center space-x-2.5 mb-5 pb-3 border-b border-slate-100 dark:border-zinc-800">
                <Globe className="w-5 h-5 text-blue-500" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Languages
                </h3>
              </div>

              <div className="space-y-4">
                {languagesData.map((lang, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-800 dark:text-zinc-200">
                        {lang.language}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-zinc-400">
                        {lang.level}
                      </span>
                    </div>
                    {/* Visual rating dots */}
                    <div className="flex space-x-1.5 pt-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className={`h-2 flex-1 rounded-full ${
                            dot <= lang.rating
                              ? "bg-blue-600 dark:bg-cyan-400"
                              : "bg-slate-200 dark:bg-zinc-800"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800/80 text-xs text-slate-500 dark:text-zinc-400">
                <p className="italic">
                  "Ready to collaborate with cross-functional global teams in English and Hindi."
                </p>
              </div>
            </MagicCard>

            {/* Academic Declaration */}
            <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-zinc-900/40 border border-slate-200/80 dark:border-zinc-800/80 text-xs text-slate-500 dark:text-zinc-400">
              <span className="font-semibold text-slate-700 dark:text-zinc-300 block mb-1">
                Verified Credentials
              </span>
              All degree credentials, mark sheets, and experience letters available upon request.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
