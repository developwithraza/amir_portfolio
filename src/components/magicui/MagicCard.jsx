import React, { useCallback, useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "../../lib/utils";
import { useTheme } from "../../context/ThemeContext";

export default function MagicCard({
  children,
  className = "",
  gradientSize = 250,
  gradientColor,
  gradientOpacity = 0.6,
}) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);
  const { isDark } = useTheme();

  const activeGradient =
    gradientColor ||
    (isDark
      ? "rgba(59, 130, 246, 0.15)"
      : "rgba(99, 102, 241, 0.12)");

  const handleMouseMove = useCallback(
    (e) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex size-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-6 text-black backdrop-blur-xl transition-all duration-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-white dark:hover:shadow-2xl dark:hover:shadow-blue-500/5",
        className
      )}
    >
      <div className="relative z-10 size-full">{children}</div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${activeGradient}, transparent 80%)
          `,
        }}
      />
    </div>
  );
}
