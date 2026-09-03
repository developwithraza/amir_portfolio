import React from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Zap, Database } from "lucide-react";

export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center select-none">
      {/* Background ambient glowing rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl -z-10 animate-pulse-slow" />
      
      {/* Outer concentric decorative dashed orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-blue-500/20 dark:border-cyan-400/20 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute w-[75%] h-[75%] rounded-full border border-dotted border-purple-500/20 dark:border-indigo-400/20 pointer-events-none"
      />

      {/* Main Terminal Window in Center */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="relative z-10 w-[84%] bg-slate-900/90 dark:bg-zinc-950/90 rounded-2xl border border-slate-700/60 dark:border-zinc-800 shadow-2xl backdrop-blur-xl overflow-hidden p-4"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-xs font-mono text-slate-400 ml-2">AmirAnsari.tsx</span>
          </div>
          <div className="flex items-center text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping mr-1.5" />
            v3.0.0 Ready
          </div>
        </div>

        {/* Code Content */}
        <div className="font-mono text-xs leading-relaxed space-y-1.5 text-left text-slate-300">
          <p className="text-purple-400">
            <span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span> = &#123;
          </p>
          <p className="pl-4">
            <span className="text-slate-400">name:</span> <span className="text-emerald-300">"Amir Ansari"</span>,
          </p>
          <p className="pl-4">
            <span className="text-slate-400">role:</span> <span className="text-emerald-300">"Frontend Specialist"</span>,
          </p>
          <p className="pl-4">
            <span className="text-slate-400">coreStack:</span> [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Next.js"</span>, <span className="text-cyan-300">"TypeScript"</span>],
          </p>
          <p className="pl-4">
            <span className="text-slate-400">architecture:</span> [<span className="text-yellow-300">"Redux Toolkit"</span>, <span className="text-yellow-300">"RTK Query"</span>],
          </p>
          <p className="pl-4">
            <span className="text-slate-400">realTime:</span> <span className="text-rose-400">"Socket.IO & WebSockets"</span>,
          </p>
          <p className="pl-4">
            <span className="text-slate-400">cleanCode:</span> <span className="text-blue-400">true</span>,
          </p>
          <p className="text-purple-400">&#125;;</p>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center text-emerald-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
              Build succeeded: 0 errors
            </span>
            <span className="text-slate-500">100% Client satisfaction</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Satellite Card 1: React & Next.js Node (Top Left) */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2 -left-2 sm:left-2 z-20 flex items-center space-x-2.5 bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-700/70 p-2.5 rounded-xl shadow-lg backdrop-blur-md"
      >
        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
          <Code2 className="w-5 h-5 animate-spin-slow" />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-800 dark:text-zinc-100">React & Next.js</div>
          <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-ping" />
            SSR + Hydration
          </div>
        </div>
      </motion.div>

      {/* Floating Satellite Card 2: RTK & State Engine (Top Right) */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -top-2 right-0 sm:right-2 z-20 flex items-center space-x-2.5 bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-700/70 p-2.5 rounded-xl shadow-lg backdrop-blur-md"
      >
        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
          <Cpu className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-800 dark:text-zinc-100">Redux Toolkit</div>
          <div className="text-[10px] text-purple-500 dark:text-purple-300 font-mono">RTK Query Cached</div>
        </div>
      </motion.div>

      {/* Floating Satellite Card 3: Realtime WebSockets (Bottom Left) */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-3 left-0 sm:left-4 z-20 flex items-center space-x-2.5 bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-700/70 p-2.5 rounded-xl shadow-lg backdrop-blur-md"
      >
        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
          <Zap className="w-5 h-5 animate-bounce" />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-800 dark:text-zinc-100">Socket.IO Real-time</div>
          <div className="text-[10px] text-slate-500 dark:text-zinc-400 font-mono">Low Latency Chat</div>
        </div>
      </motion.div>

      {/* Floating Satellite Card 4: Payments & APIs (Bottom Right) */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-2 -right-2 sm:right-2 z-20 flex items-center space-x-2.5 bg-white/90 dark:bg-zinc-900/90 border border-slate-200 dark:border-zinc-700/70 p-2.5 rounded-xl shadow-lg backdrop-blur-md"
      >
        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
          <Database className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-800 dark:text-zinc-100">REST & HDFC Gateway</div>
          <div className="text-[10px] text-blue-500 dark:text-cyan-400 font-mono">Secure Workflows</div>
        </div>
      </motion.div>
    </div>
  );
}
