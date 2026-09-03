import React from "react";
import { motion } from "framer-motion";
import { Shield, MessageSquare, Heart } from "lucide-react";

export default function DaycareIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-cyan-500/10 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-indigo-500/20">
      {/* Background radial glow */}
      <div className="absolute w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl -top-10 -right-10" />

      {/* Main dashboard wireframe */}
      <div className="relative z-10 w-full max-w-[280px] bg-white/90 dark:bg-zinc-900/90 rounded-xl border border-slate-200 dark:border-zinc-700/80 p-3 shadow-lg">
        {/* Module Header with Role Switcher */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-2 mb-2.5">
          <div className="flex items-center space-x-1.5">
            <Shield className="w-3.5 h-3.5 text-indigo-500" />
            <span className="text-[11px] font-semibold text-slate-800 dark:text-zinc-200">RBAC: 4 Modules</span>
          </div>
          <span className="text-[9px] bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded font-mono">
            Admin / Staff / Parent
          </span>
        </div>

        {/* Roles grid */}
        <div className="grid grid-cols-2 gap-1.5 mb-2.5">
          <div className="bg-slate-50 dark:bg-zinc-800/60 p-1.5 rounded-lg flex items-center space-x-2">
            <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-[10px] font-bold">
              A
            </div>
            <div>
              <p className="text-[9px] font-medium text-slate-700 dark:text-zinc-300">Admin</p>
              <p className="text-[8px] text-slate-400">Full Rights</p>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-zinc-800/60 p-1.5 rounded-lg flex items-center space-x-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-[10px] font-bold">
              T
            </div>
            <div>
              <p className="text-[9px] font-medium text-slate-700 dark:text-zinc-300">Teacher</p>
              <p className="text-[8px] text-slate-400">Class Logs</p>
            </div>
          </div>
        </div>

        {/* Real-time chat ticker */}
        <div className="bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/40 rounded-lg p-1.5 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] text-slate-600 dark:text-zinc-300 font-mono">Socket.IO Live Chat</span>
          </div>
          <MessageSquare className="w-3 h-3 text-indigo-500" />
        </div>
      </div>

      {/* Floating interactive badge */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-3 right-3 z-20 bg-white dark:bg-zinc-800 border border-indigo-500/30 px-2 py-1 rounded-full shadow-md flex items-center space-x-1 text-[10px] text-indigo-600 dark:text-indigo-400 font-medium"
      >
        <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
        <span>Child Safety</span>
      </motion.div>
    </div>
  );
}
