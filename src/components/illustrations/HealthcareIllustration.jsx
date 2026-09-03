import React from "react";
import { motion } from "framer-motion";
import { Eye, Activity, Stethoscope, MapPin } from "lucide-react";

export default function HealthcareIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-blue-500/10 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-cyan-500/20">
      {/* Background glow */}
      <div className="absolute w-40 h-40 bg-cyan-500/15 rounded-full blur-2xl -top-8 -left-8" />

      {/* Main card */}
      <div className="relative z-10 w-full max-w-[280px] bg-white/90 dark:bg-zinc-900/90 rounded-xl border border-slate-200 dark:border-zinc-700/80 p-3 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-2 mb-2">
          <div className="flex items-center space-x-1.5">
            <Eye className="w-3.5 h-3.5 text-cyan-500" />
            <span className="text-[11px] font-semibold text-slate-800 dark:text-zinc-200">Eye Setu Telehealth</span>
          </div>
          <span className="text-[9px] bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400 px-1.5 py-0.5 rounded font-mono">
            ECharts Analytics
          </span>
        </div>

        {/* Animated mini chart */}
        <div className="bg-slate-50 dark:bg-zinc-800/60 p-2 rounded-lg mb-2">
          <div className="flex items-center justify-between text-[9px] text-slate-500 dark:text-zinc-400 mb-1.5">
            <span>Weekly Consultations</span>
            <span className="text-cyan-500 font-semibold">+24.5%</span>
          </div>
          <div className="flex items-end justify-between h-10 gap-1 px-1">
            {[40, 65, 50, 85, 70, 95, 80].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-sm opacity-85"
              />
            ))}
          </div>
        </div>

        {/* Doctor & Location Status */}
        <div className="flex items-center justify-between text-[9px] bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/40 rounded-lg p-1.5">
          <div className="flex items-center space-x-1">
            <Stethoscope className="w-3 h-3 text-blue-500" />
            <span className="text-slate-700 dark:text-zinc-300">Dr. Optometrist Assigned</span>
          </div>
          <span className="flex items-center text-emerald-500 font-semibold">
            <MapPin className="w-2.5 h-2.5 mr-0.5" /> 1.2 km
          </span>
        </div>
      </div>

      {/* Floating pulse badge */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-3 right-3 z-20 bg-white dark:bg-zinc-800 border border-cyan-500/30 px-2 py-1 rounded-full shadow-md flex items-center space-x-1 text-[10px] text-cyan-600 dark:text-cyan-400 font-medium"
      >
        <Activity className="w-3 h-3 text-cyan-500 animate-pulse" />
        <span>Live Vitals</span>
      </motion.div>
    </div>
  );
}
