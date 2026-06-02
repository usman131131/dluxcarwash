import React, { useEffect } from "react"; // Import useEffect
import { motion } from "framer-motion";

const doorTransition = {
  duration: 0.8,
  ease: [0.76, 0, 0.24, 1],
};

const leftDoorVariants = {
  initial: { x: "0%" },
  animate: { x: "-100%", transition: doorTransition },
  exit: { x: "0%", transition: doorTransition },
};

const rightDoorVariants = {
  initial: { x: "0%" },
  animate: { x: "100%", transition: doorTransition },
  exit: { x: "0%", transition: doorTransition },
};

const contentVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.4, duration: 0.4 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const AnimatedPage = ({ children }) => {
  
  // --- SCROLL FIX ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Runs once when this component mounts (after previous page unmounts)

  return (
    <>
      {/* --- LEFT DOOR --- */}
      <motion.div
        className="fixed top-0 left-0 w-1/2 h-[100dvh] bg-[#0f0f0f] z-[9999] flex items-center justify-end overflow-hidden border-r border-white/10 will-change-transform pointer-events-none"
        variants={leftDoorVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <span className="text-white font-display font-bold text-4xl md:text-9xl tracking-tighter pr-1 select-none">
          DL
        </span>
      </motion.div>

      {/* --- RIGHT DOOR --- */}
      <motion.div
        className="fixed top-0 right-0 w-1/2 h-[100dvh] bg-[#0f0f0f] z-[9999] flex items-center justify-start overflow-hidden border-l border-white/10 will-change-transform pointer-events-none"
        variants={rightDoorVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <span className="text-white font-display font-bold text-4xl md:text-9xl tracking-tighter pl-1 flex select-none">
          UX<span className="text-primary">.</span>
        </span>
      </motion.div>

      {/* --- CONTENT LAYER --- */}
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full"
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimatedPage;