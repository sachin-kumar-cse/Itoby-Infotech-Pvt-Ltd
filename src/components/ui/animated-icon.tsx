import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  hoverEffect?: "bounce" | "spin" | "pulse" | "wiggle";
}

const hoverAnimations = {
  bounce: { y: [0, -8, 0], transition: { duration: 0.5, ease: "easeOut" } },
  spin: { rotate: 360, transition: { duration: 0.6, ease: "easeInOut" } },
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
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const CountUp = ({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: CountUpProps) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {prefix}
        <motion.span
          initial={0}
          whileInView={end}
          viewport={{ once: true }}
          transition={{ duration, ease: "easeOut" }}
        >
          {end}
        </motion.span>
        {suffix}
      </motion.span>
    </motion.span>
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
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};
