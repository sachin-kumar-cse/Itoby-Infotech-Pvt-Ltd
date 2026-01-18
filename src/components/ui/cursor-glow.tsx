import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const CursorGlow = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150);
      cursorY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      style={{
        background: "transparent",
      }}
    >
      <motion.div
        className="w-[300px] h-[300px] rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          background:
            "radial-gradient(circle, hsl(75 100% 50% / 0.06) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
};
