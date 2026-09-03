import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Particles({
  className = "",
  quantity = 35,
  staticity = 50,
  ease = 50,
}) {
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const { isDark } = useTheme();
  const color = isDark ? "#60a5fa" : "#3b82f6";

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    const dpr = window.devicePixelRatio || 1;
    let canvasWidth = 0;
    let canvasHeight = 0;
    const circles = [];
    const mouse = { x: 0, y: 0 };

    const resizeCanvas = () => {
      canvasWidth = container.offsetWidth;
      canvasHeight = container.offsetHeight;
      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const createCircle = () => {
      const pSize = Math.floor(Math.random() * 2) + 1.2;
      return {
        x: Math.floor(Math.random() * canvasWidth),
        y: Math.floor(Math.random() * canvasHeight),
        translateX: 0,
        translateY: 0,
        size: pSize,
        alpha: 0,
        targetAlpha: parseFloat((Math.random() * 0.4 + 0.1).toFixed(1)),
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
        magnetism: 0.1 + Math.random() * 4,
      };
    };

    const drawCircle = (circle) => {
      ctx.translate(circle.translateX, circle.translateY);
      ctx.beginPath();
      ctx.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.globalAlpha = circle.alpha;
      ctx.fill();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initCanvas = () => {
      resizeCanvas();
      circles.length = 0;
      for (let i = 0; i < quantity; i++) {
        circles.push(createCircle());
      }
    };

    const remapValue = (value, start1, stop1, start2, stop2) => {
      const rel = (value - start1) / (stop1 - start1);
      return start2 + rel * (stop2 - start2);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];
        const edge = [
          circle.x + circle.translateX - circle.size,
          canvasWidth - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasHeight - circle.y - circle.translateY - circle.size,
        ];
        const closestEdge = Math.min(...edge);
        const remapLogarithm = parseFloat(
          remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
        );

        if (remapLogarithm > 1) {
          circle.alpha += 0.02;
          if (circle.alpha > circle.targetAlpha) {
            circle.alpha = circle.targetAlpha;
          }
        } else {
          circle.alpha = circle.targetAlpha * remapLogarithm;
        }

        circle.x += circle.dx;
        circle.y += circle.dy;
        circle.translateX +=
          (mouse.x / (staticity / circle.magnetism) - circle.translateX) / ease;
        circle.translateY +=
          (mouse.y / (staticity / circle.magnetism) - circle.translateY) / ease;

        if (
          circle.x < -circle.size ||
          circle.x > canvasWidth + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasHeight + circle.size
        ) {
          circles[i] = createCircle();
        }

        drawCircle(circle);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - canvasWidth / 2;
      const y = e.clientY - rect.top - canvasHeight / 2;
      mouse.x = x;
      mouse.y = y;
    };

    initCanvas();
    animate();

    window.addEventListener("resize", initCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", initCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [color, quantity, staticity, ease]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
