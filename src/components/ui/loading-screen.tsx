import { motion } from "framer-motion";

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo Animation */}
        <motion.div
          className="relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center"
            animate={{
              boxShadow: [
                "0 0 0px hsl(75 100% 50% / 0.3)",
                "0 0 40px hsl(75 100% 50% / 0.5)",
                "0 0 0px hsl(75 100% 50% / 0.3)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-2xl font-display font-bold text-primary-foreground">
              i
            </span>
          </motion.div>
        </motion.div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Text */}
        <motion.p
          className="text-muted-foreground text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};
