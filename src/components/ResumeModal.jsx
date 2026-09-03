import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { personalInfo, skillsData, experiencesData, educationData } from "../data/resumeData";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-zinc-800 flex flex-col overflow-hidden"
        >
          {/* Top action toolbar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950/60">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <h3 className="text-sm font-semibold text-slate-800 dark:text-zinc-100">
                Amir Ansari — Resume Preview
              </h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="flex items-center space-x-1 text-xs px-3 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-50 transition"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-zinc-800 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content Container */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-800 dark:text-zinc-200 font-sans print:p-0">
            {/* Header */}
            <div className="border-b border-slate-200 dark:border-zinc-800 pb-6">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                {personalInfo.name}
              </h1>
              <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-cyan-400 mt-1">
                {personalInfo.title}
              </p>
              
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3 text-xs text-slate-600 dark:text-zinc-400">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center hover:text-blue-500">
                  <Mail className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  {personalInfo.email}
                </a>
                <span className="flex items-center">
                  <Phone className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  {personalInfo.phone}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                Professional Summary
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-zinc-300 whitespace-pre-line">
                {personalInfo.summary}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-3 flex items-center">
                <Briefcase className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                Professional Experience
              </h4>
              <div className="space-y-4">
                {experiencesData.map((exp, i) => (
                  <div key={i} className="border-l-2 border-blue-500/30 pl-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                        {exp.role} — <span className="text-blue-600 dark:text-cyan-400">{exp.company}</span>
                      </h5>
                      <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                        {exp.period} | {exp.location}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-zinc-300 list-disc pl-4">
                      {exp.responsibilities.slice(0, 5).map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                Highlighted Skills
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {skillsData.highlighted.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700 font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2 flex items-center">
                <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-purple-500" />
                Education
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60">
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">{edu.degree}</h5>
                    <p className="text-xs text-blue-600 dark:text-cyan-400">{edu.institution}</p>
                    <p className="text-[10px] text-slate-500 font-mono mt-1">{edu.period} • {edu.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
