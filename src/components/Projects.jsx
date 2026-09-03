import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projectsData } from "../data/resumeData";
import BorderBeam from "./magicui/BorderBeam";
import DaycareIllustration from "./illustrations/DaycareIllustration";
import PropertyIllustration from "./illustrations/PropertyIllustration";
import HealthcareIllustration from "./illustrations/HealthcareIllustration";
import DeliveryIllustration from "./illustrations/DeliveryIllustration";
import ProjectModal from "./ProjectModal";

const illustrationComponents = {
  daycare: DaycareIllustration,
  property: PropertyIllustration,
  healthcare: HealthcareIllustration,
  delivery: DeliveryIllustration,
};

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filterCategories = ["All", "Enterprise SaaS & Realtime", "Booking & FinTech", "Healthcare & Analytics", "E-Commerce & Logistics"];

  const filteredProjects =
    selectedFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production Projects & Systems
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400">
            Real-world enterprise web applications built with scalable React.js & Next.js architectures,
            real-time communication, payment gateways, and sophisticated dashboards.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                selectedFilter === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 dark:bg-zinc-800/80 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-zinc-700/60"
              }`}
            >
              {cat === "All" ? "All Projects" : cat.split("&")[0].trim()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const Illustration = illustrationComponents[project.illustration] || DaycareIllustration;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  key={project.id}
                  className="group relative flex flex-col justify-between rounded-2xl bg-white/80 dark:bg-zinc-900/70 border border-slate-200/80 dark:border-zinc-800 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Border Beam for first 2 featured items */}
                  {index < 2 && (
                    <BorderBeam
                      size={250}
                      duration={14}
                      delay={index * 4}
                      colorFrom="#3b82f6"
                      colorTo="#06b6d4"
                    />
                  )}

                  <div>
                    {/* Visual Animated Illustration Header */}
                    <div className="p-4 pb-0">
                      <Illustration />
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-slate-500 dark:text-zinc-500 bg-slate-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded">
                          {project.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                        {project.tagline}
                      </p>

                      {/* Metrics Pill Row */}
                      <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800/80">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="text-center p-1.5 rounded-lg bg-slate-50 dark:bg-zinc-800/50">
                            <span className="block text-[10px] text-slate-400">{m.label}</span>
                            <span className="text-[11px] font-semibold text-slate-800 dark:text-zinc-200 truncate block">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.techStack.slice(0, 5).map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 5 && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-400">
                            +{project.techStack.length - 5}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer / View Details button */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700/80 bg-slate-50 dark:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 text-xs font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black hover:border-transparent transition-all shadow-sm group-hover:border-blue-500/40"
                    >
                      <span>Explore Architecture & Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
}
