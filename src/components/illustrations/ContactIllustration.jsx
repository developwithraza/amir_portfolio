import React from "react";
import { motion } from "framer-motion";
import { Send, Radio, CheckCircle2 } from "lucide-react";

export default function ContactIllustration() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center select-none mx-auto">
      {/* Background glow and circular ripples */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-indigo-500/20 blur-3xl -z-10 animate-pulse-slow" />
      
      {/* Concentric radar circles */}
      {[240, 180, 120].map((size, index) => (
        <motion.div
          key={index}
          style={{ width: size, height: size }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, delay: index * 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute rounded-full border border-dashed border-blue-500/30 dark:border-cyan-400/30 pointer-events-none"
        />
      ))}

      {/* Center glowing orb with Send icon */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 p-0.5 shadow-2xl shadow-blue-500/30 flex items-center justify-center"
      >
        <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-[22px] flex items-center justify-center">
          <Send className="w-10 h-10 text-blue-600 dark:text-cyan-400 -translate-y-0.5 translate-x-0.5" />
        </div>
      </motion.div>

      {/* Floating badge 1: Rapid Response */}
      <motion.div
        animate={{ x: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 right-4 z-20 flex items-center space-x-2 bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-700/80 p-2.5 rounded-xl shadow-lg backdrop-blur-md"
      >
        <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
          <Radio className="w-4 h-4 animate-pulse" />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-800 dark:text-zinc-100">Response Time</div>
          <div className="text-[10px] text-emerald-500 font-mono">&lt; 2 Hours Guaranteed</div>
        </div>
      </motion.div>

      {/* Floating badge 2: Active Availability */}
      <motion.div
        animate={{ x: [5, -5, 5] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        className="absolute bottom-8 left-4 z-20 flex items-center space-x-2 bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-700/80 p-2.5 rounded-xl shadow-lg backdrop-blur-md"
      >
        <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500">
          <CheckCircle2 className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-800 dark:text-zinc-100">Immediate Joiner</div>
          <div className="text-[10px] text-blue-500 dark:text-cyan-400 font-mono">Full-time / Contract</div>
        </div>
      </motion.div>
    </div>
  );
}
