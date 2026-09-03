import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-2xl max-h-[85vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-zinc-800 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950/60">
            <div>
              <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-cyan-400 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-zinc-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable details */}
          <div className="overflow-y-auto p-6 space-y-5">
            {/* Tagline */}
            <p className="text-sm font-medium text-slate-700 dark:text-zinc-300 italic border-l-2 border-blue-500 pl-3">
              "{project.tagline}"
            </p>

            {/* Quick Metadata */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/60 dark:border-zinc-700/60">
                <span className="text-slate-400 block text-[10px]">Role</span>
                <span className="font-semibold text-slate-800 dark:text-zinc-200">{project.role}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/60 dark:border-zinc-700/60">
                <span className="text-slate-400 block text-[10px]">Project Duration</span>
                <span className="font-semibold text-slate-800 dark:text-zinc-200">{project.duration}</span>
              </div>
              {project.modules && (
                <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/60 dark:border-zinc-700/60">
                  <span className="text-slate-400 block text-[10px]">Access Modules</span>
                  <span className="font-semibold text-slate-800 dark:text-zinc-200 truncate block">
                    {project.modules}
                  </span>
                </div>
              )}
            </div>

            {/* Project Overview */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-1.5">
                Project Overview
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
                {project.overview}
              </p>
            </div>

            {/* Key Responsibilities */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                Key Architecture & Responsibilities
              </h4>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-zinc-300">
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Tags */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-800/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-3 border-t border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950/60 flex justify-end">
            <button
              onClick={onClose}
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-300 dark:hover:bg-zinc-700 transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
