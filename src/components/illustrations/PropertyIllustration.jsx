import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, CreditCard, CheckCircle2, MapPin } from "lucide-react";

export default function PropertyIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-rose-500/10 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-amber-500/20">
      {/* Glow */}
      <div className="absolute w-40 h-40 bg-amber-500/15 rounded-full blur-2xl -bottom-10 -left-10" />

      {/* Property Dashboard Card */}
      <div className="relative z-10 w-full max-w-[280px] bg-white/90 dark:bg-zinc-900/90 rounded-xl border border-slate-200 dark:border-zinc-700/80 p-3 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-2 mb-2">
          <div className="flex items-center space-x-1.5">
            <Building2 className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[11px] font-semibold text-slate-800 dark:text-zinc-200">Homies Stay Admin</span>
          </div>
          <span className="text-[9px] bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 px-1.5 py-0.5 rounded font-mono">
            Booking Engine
          </span>
        </div>

        {/* Property preview block */}
        <div className="bg-slate-50 dark:bg-zinc-800/60 p-2 rounded-lg mb-2">
          <div className="flex items-center justify-between text-[10px] font-medium text-slate-700 dark:text-zinc-300">
            <span className="flex items-center">
              <MapPin className="w-3 h-3 text-rose-500 mr-1" />
              Luxury Villa #104
            </span>
            <span className="text-emerald-500 font-bold">Confirmed</span>
          </div>
          <div className="mt-1 flex items-center justify-between text-[9px] text-slate-500">
            <span>Check-in: 14:00</span>
            <span className="font-mono text-slate-700 dark:text-zinc-300">3 Nights</span>
          </div>
        </div>

        {/* Payment flow badge */}
        <div className="flex items-center justify-between bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/40 rounded-lg p-1.5">
          <div className="flex items-center space-x-1.5">
            <CreditCard className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-[9px] text-slate-700 dark:text-zinc-300 font-medium">Payment Gateway</span>
          </div>
          <div className="flex items-center text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            Settled
          </div>
        </div>
      </div>

      {/* Floating interactive calendar badge */}
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-3 right-3 z-20 bg-white dark:bg-zinc-800 border border-amber-500/30 px-2 py-1 rounded-full shadow-md flex items-center space-x-1 text-[10px] text-amber-600 dark:text-amber-400 font-medium"
      >
        <Calendar className="w-3 h-3 text-amber-500" />
        <span>Instant Sync</span>
      </motion.div>
    </div>
  );
}
