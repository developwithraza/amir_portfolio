import React, { useId } from "react";
import { cn } from "../../lib/utils";

export default function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 30,
  className,
  maxOpacity = 0.5,
  duration = 4,
  ...props
}) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/20 stroke-gray-400/20 dark:fill-zinc-800/30 dark:stroke-zinc-700/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {Array.from({ length: numSquares }).map((_, index) => {
          const posX = (index * 7) % 20;
          const posY = (index * 13) % 20;
          return (
            <rect
              strokeWidth="0"
              key={`${index}`}
              width={width - 1}
              height={height - 1}
              x={posX * width + 1}
              y={posY * height + 1}
              className="fill-blue-500/20 dark:fill-cyan-400/20 transition-all duration-1000 animate-pulse"
              style={{
                animationDuration: `${(index % 4) + 2}s`,
                animationDelay: `${index * 0.2}s`,
              }}
            />
          );
        })}
      </svg>
    </svg>
  );
}
