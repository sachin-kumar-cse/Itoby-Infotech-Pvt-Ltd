import { motion, TargetAndTransition } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  hoverEffect?: "bounce" | "spin" | "pulse" | "wiggle";
}

const hoverAnimations: Record<string, TargetAndTransition> = {
  bounce: { y: [0, -8, 0], transition: { duration: 0.5 } },
  spin: { rotate: 360, transition: { duration: 0.6 } },
  pulse: { scale: [1, 1.2, 1], transition: { duration: 0.4 } },
  wiggle: { rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } },
};

export const AnimatedIcon = ({
  icon: Icon,
  size = 24,
  className = "",
  hoverEffect = "pulse",
}: AnimatedIconProps) => {
  return (
    <motion.div
      whileHover={hoverAnimations[hoverEffect]}
      className={`inline-flex items-center justify-center ${className}`}
    >
      <Icon size={size} />
    </motion.div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

export const FloatingElement = ({
  children,
  delay = 0,
  duration = 3,
  distance = 10,
  className = "",
}: FloatingElementProps) => {
  return (
    <motion.div
      animate={{ y: [-distance, distance, -distance] }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface MorphingShapeProps {
  className?: string;
}

export const MorphingShape = ({ className = "" }: MorphingShapeProps) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-[80px] ${className}`}
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }}
    />
  );
};
