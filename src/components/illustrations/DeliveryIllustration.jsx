import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Truck, CreditCard, Receipt, Clock } from "lucide-react";

export default function DeliveryIllustration() {
  return (
    <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-emerald-500/20">
      {/* Glow */}
      <div className="absolute w-40 h-40 bg-emerald-500/15 rounded-full blur-2xl -bottom-8 -right-8" />

      {/* Main card */}
      <div className="relative z-10 w-full max-w-[280px] bg-white/90 dark:bg-zinc-900/90 rounded-xl border border-slate-200 dark:border-zinc-700/80 p-3 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-zinc-800 pb-2 mb-2">
          <div className="flex items-center space-x-1.5">
            <ShoppingBag className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[11px] font-semibold text-slate-800 dark:text-zinc-200">Express Delivery & KOT</span>
          </div>
          <span className="text-[9px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded font-mono">
            HDFC Gateway
          </span>
        </div>

        {/* Live order progress bar */}
        <div className="bg-slate-50 dark:bg-zinc-800/60 p-2 rounded-lg mb-2">
          <div className="flex items-center justify-between text-[9px] text-slate-600 dark:text-zinc-300 mb-1.5">
            <span className="font-mono">Order #84920</span>
            <span className="text-emerald-500 font-semibold flex items-center">
              <Clock className="w-2.5 h-2.5 mr-1" /> 18 Mins ETA
            </span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-zinc-700 h-1.5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "20%" }}
              animate={{ width: "75%" }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="bg-emerald-500 h-full rounded-full"
            />
          </div>
        </div>

        {/* Payment & KOT status */}
        <div className="grid grid-cols-2 gap-1.5">
          <div className="flex items-center space-x-1 bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/40 p-1.5 rounded-lg text-[9px]">
            <Receipt className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            <span className="text-slate-700 dark:text-zinc-300 font-mono">KOT Generated</span>
          </div>
          <div className="flex items-center space-x-1 bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/40 p-1.5 rounded-lg text-[9px]">
            <CreditCard className="w-3 h-3 text-blue-500" />
            <span className="text-slate-700 dark:text-zinc-300 font-mono">HDFC Paid</span>
          </div>
        </div>
      </div>

      {/* Floating delivery badge */}
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-3 left-3 z-20 bg-white dark:bg-zinc-800 border border-emerald-500/30 px-2 py-1 rounded-full shadow-md flex items-center space-x-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium"
      >
        <Truck className="w-3 h-3 text-emerald-500" />
        <span>Branch Dispatched</span>
      </motion.div>
    </div>
  );
}
