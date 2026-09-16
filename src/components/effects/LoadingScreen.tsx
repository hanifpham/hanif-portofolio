import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Total sequence time is ~1400ms. We'll trigger the exit at 1500ms.
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
    onComplete();
  };

  // Easing from existing components
  const ease = [0.22, 1, 0.36, 1] as any;

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: { 
      opacity: 0, 
      transition: { duration: 0.6, ease } 
    }
  };

  const markVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.92 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease } 
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 0.5, 
      scale: 1, 
      transition: { delay: 0.4, duration: 1, ease } 
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { delay: 0.6, duration: 0.6, ease } 
    },
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="loading-screen"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#050507]"
        >
          {/* Ambient Glow */}
          <motion.div
            variants={glowVariants}
            initial="hidden"
            animate="visible"
            className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#5B8CFF] blur-3xl"
          />

          {/* Logo Container */}
          <div className="relative z-10 flex items-center gap-4">
            <motion.img
              variants={markVariants}
              initial="hidden"
              animate="visible"
              src="/images/brand/hanif-mark.svg"
              alt="H Mark"
              className="w-14 h-14"
            />
            
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="overflow-hidden"
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-[#F5F5F7] font-sans">
                HANIF<span className="text-[#8B5CF6]">.</span>
              </h1>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
