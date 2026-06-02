import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. IMPORT YOUR SEPARATE SCREENSHOTS ---
import screen1 from "../assets/screens/screen1.png"; 
import screen2 from "../assets/screens/screen2.png"; 
import screen3 from "../assets/screens/screen3.png";
import screen4 from "../assets/screens/screen4.png";
import screen5 from "../assets/screens/screen5.png";
// Add more if you have them!

// --- 2. CONFIGURATION ---
const IMAGES = [screen1, screen2, screen3,screen4,screen5];
const SLIDE_DURATION = 4000; // 4 Seconds per slide (Smooth reading time)

export default function ProShowcase() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload Images
  useEffect(() => {
    const promises = IMAGES.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });
    Promise.all(promises).then(() => setIsLoaded(true));
  }, []);

  // Cycle Slides
  useEffect(() => {
    if (!isLoaded) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isLoaded]);

  // Alternating Zoom Logic (Zoom In vs Zoom Out)
  const isEven = index % 2 === 0;

  if (!isLoaded) return <div className="bg-black h-screen w-full" />;

  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden flex items-center justify-center">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* --- LAYER 1: AMBIENT BACKGROUND (Blur) --- */}
          {/* This ensures the screen is always filled with color, no black bars */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img 
              src={IMAGES[index]} 
              className="w-full h-full object-cover opacity-30 blur-3xl scale-125"
              animate={{ scale: isEven ? 1.3 : 1.2 }} // Subtle breathing effect
              transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
            />
          </div>

          {/* --- LAYER 2: THE MAIN IMAGE (Clear Aspect Ratio) --- */}
          {/* object-contain ensures the WHOLE image fits on screen */}
          <motion.div 
            className="relative z-10 h-[85vh] w-[90vw] flex items-center justify-center shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <motion.img 
               src={IMAGES[index]} 
               className="h-full w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
               // The Ken Burns Effect (Zoom In/Out)
               initial={{ scale: isEven ? 1 : 1.05 }}
               animate={{ scale: isEven ? 1.05 : 1 }}
               transition={{ 
                 duration: SLIDE_DURATION / 1000 + 1, 
                 ease: "linear" 
               }}
             />
          </motion.div>

        </motion.div>

        {/* --- LAYER 3: THE CURTAIN WIPE (Transition) --- */}
        <motion.div
          key={`curtain-${index}`}
          className="absolute inset-0 z-50 pointer-events-none"
        >
          {/* Black Wipe */}
          <motion.div 
            className="absolute inset-0 bg-black origin-left"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          
          {/* Brand Color Wipe (Accent) */}
          <motion.div 
            className="absolute inset-0 bg-[#DB3E33] origin-left"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </AnimatePresence>

    </div>
  );
}