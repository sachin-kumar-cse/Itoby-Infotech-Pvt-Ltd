import { useEffect, useRef } from "react";

export const CyberCursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Skip cursor trail on mobile touch screens or reduced motion preference
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let isRunning = false;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }

    const particles: Particle[] = [];
    let primaryHsl = "75 100% 50%";

    const updatePrimaryColor = () => {
      primaryHsl = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || "75 100% 50%";
    };
    updatePrimaryColor();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        const progress = p.life / p.maxLife;
        const alpha = Math.max(0, 1 - progress);
        const radius = p.size * (1 - progress * 0.5);

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${primaryHsl} / ${alpha * 0.6})`;
        ctx.fill();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        isRunning = false;
        animationFrameId = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mouseX,
          y: mouseY,
          size: Math.random() * 3 + 1.5,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          life: 0,
          maxLife: Math.random() * 25 + 20,
        });
      }

      if (!isRunning) {
        isRunning = true;
        updatePrimaryColor();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-70 hidden lg:block"
    />
  );
};
