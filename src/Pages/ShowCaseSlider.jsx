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
const SLIDE_DURATION = 1500; // 1.5 Seconds per slide (Fast & Punchy)

// --- 3. ANIMATION STYLES (The "Montage" Logic) ---
// We alternate between Zoom In and Zoom Out to keep it dynamic
const ANIMATIONS = [
  // Style A: "The Punch In" (Scale Up)
  {
    initial: { scale: 1, opacity: 0 },
    animate: { scale: 1.15, opacity: 1 },
    exit: { opacity: 0 }, // Fast fade out
  },
  // Style B: "The Pull Back" (Scale Down)
  {
    initial: { scale: 1.15, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { opacity: 0 },
  },
  // Style C: "The Pan" (Dynamic Slide)
  {
    initial: { scale: 1.1, x: "5%", opacity: 0 },
    animate: { scale: 1.1, x: "0%", opacity: 1 },
    exit: { opacity: 0 },
  }
];

export default function FastShowcaseSlider() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload images for instant playback
  useEffect(() => {
    const promises = IMAGES.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
    Promise.all(promises).then(() => setIsLoaded(true));
  }, []);

  // Timer Logic
  useEffect(() => {
    if (!isLoaded) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isLoaded]);

  // Select animation based on index
  const currentAnim = ANIMATIONS[index % ANIMATIONS.length];

  if (!isLoaded) return <div className="h-screen bg-neutral-900" />;

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <AnimatePresence mode="popLayout">
        
        {/* --- THE IMAGE --- */}
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={currentAnim.initial}
          animate={currentAnim.animate}
          exit={currentAnim.exit}
          transition={{
            // "EaseOut" makes it start fast and slow down (The "Professional" feel)
            duration: SLIDE_DURATION / 1000 + 0.2, 
            ease: [0.25, 1, 0.5, 1], 
            opacity: { duration: 0.2 } // Fade in very fast
          }}
        >
          <img
            src={IMAGES[index]}
            className="w-full h-full object-cover"
            alt="Showcase"
          />
        </motion.div>

        {/* --- THE FLASH EFFECT (Camera Shutter) --- */}
        {/* A subtle white flash creates a high-energy transition */}
        <motion.div
          key={`flash-${index}`}
          className="absolute inset-0 bg-white pointer-events-none z-50"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

      </AnimatePresence>

      {/* --- OPTIONAL: THIN PROGRESS BAR --- */}
      {/* Helps viewer know how fast it's moving */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-50">
        <motion.div
          key={`bar-${index}`}
          className="h-full bg-[#DB3E33]" // Primary Color
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
        />
      </div>

    </div>
  );
}