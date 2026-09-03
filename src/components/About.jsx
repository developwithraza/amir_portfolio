import React from "react";
import { 
  Sparkles, Code2, Rocket, Layers, 
  Shield, Zap 
} from "lucide-react";
import MagicCard from "./magicui/MagicCard";
import OrbitingCircles from "./magicui/OrbitingCircles";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me & Frontend Philosophy
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-400">
            Passionate about bridging high-fidelity design with scalable component architecture,
            rock-solid state management, and silky smooth animations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <MagicCard className="p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <Rocket className="w-5 h-5 text-blue-500 mr-2" />
                Engineering Robust Web Applications
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  I'm a dedicated <strong>Frontend Developer</strong> with <strong>3+ years of hands-on experience</strong> creating
                  responsive, scalable, and high-performance digital products across enterprise dashboards, e-commerce systems,
                  healthcare solutions, and real-time platforms.
                </p>
                <p>
                  My development philosophy centers on <strong>clean architecture</strong>, <strong>reusable modular components</strong>, 
                  and <strong>predictable state workflows</strong> using tools like <em>RTK Query</em> and <em>Redux Toolkit</em>.
                  I believe web applications should not only look modern but also perform exceptionally under heavy traffic.
                </p>
                <p>
                  Whether integrating complex <strong>payment gateways</strong> (HDFC Smart Gateway), building <strong>real-time chats</strong> with Socket.IO,
                  or mapping multi-branch logistics with <strong>Google Maps APIs</strong>, I bring meticulous attention to detail and
                  end-to-end product thinking.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-100 dark:border-zinc-800/80">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
                  <Layers className="w-4 h-4 text-blue-500 mb-1.5" />
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Clean Architecture</h4>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1">Modular, testable, and DRY components</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
                  <Zap className="w-4 h-4 text-amber-500 mb-1.5" />
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Blazing Speed</h4>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1">Sub-second loads & optimized bundles</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
                  <Shield className="w-4 h-4 text-emerald-500 mb-1.5" />
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Role-Based Access</h4>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1">Granular security & protected routes</p>
                </div>
              </div>
            </MagicCard>
          </div>

          {/* Right Column: Orbiting Ecosystem Component */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative flex h-[380px] w-full max-w-[380px] items-center justify-center overflow-hidden rounded-3xl border border-slate-200/80 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 p-6 shadow-xl backdrop-blur-xl">
              {/* Center Core Node */}
              <div className="z-10 flex flex-col items-center justify-center p-4 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 border-4 border-white dark:border-zinc-900">
                <Code2 className="w-8 h-8" />
                <span className="text-[10px] font-bold font-mono mt-1">AMIR</span>
              </div>

              {/* Inner Orbit */}
              <OrbitingCircles radius={65} duration={18} delay={0}>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/15 border border-blue-500/40 text-blue-500 text-[10px] font-bold backdrop-blur-md">
                  RT
                </div>
              </OrbitingCircles>
              <OrbitingCircles radius={65} duration={18} delay={9}>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/15 border border-indigo-500/40 text-indigo-500 text-[10px] font-bold backdrop-blur-md">
                  TS
                </div>
              </OrbitingCircles>

              {/* Outer Orbit */}
              <OrbitingCircles radius={125} duration={26} delay={0} reverse>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-500 text-[11px] font-bold backdrop-blur-md">
                  React
                </div>
              </OrbitingCircles>
              <OrbitingCircles radius={125} duration={26} delay={8} reverse>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800/20 dark:bg-white/10 border border-slate-400/40 text-slate-700 dark:text-zinc-200 text-[11px] font-bold backdrop-blur-md">
                  Next
                </div>
              </OrbitingCircles>
              <OrbitingCircles radius={125} duration={26} delay={16} reverse>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-500 text-[11px] font-bold backdrop-blur-md">
                  API
                </div>
              </OrbitingCircles>
            </div>

            <div className="mt-4 text-center">
              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                Interactive React & State Orbit Ecosystem
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
