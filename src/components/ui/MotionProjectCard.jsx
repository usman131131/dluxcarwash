// src/components/ui/MotionProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function MotionProjectCard({ 
  title, 
  category, 
  imageSrc, // This should be a full-page screenshot
  route 
}) {
  return (
    <div className="group relative w-full cursor-pointer perspective-1000">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-primary/5 transform translate-y-2 translate-x-2 rounded-xl transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

      {/* Main Card Container */}
      <div className="relative bg-secondary rounded-xl overflow-hidden border border-dark/10 shadow-lg">
        
        {/* Fake Browser Header */}
        <div className="h-8 bg-accent border-b border-dark/5 flex items-center px-4 gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors duration-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-dark/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-dark/20" />
          {/* Address Bar Mock */}
          <div className="ml-2 px-3 py-1 bg-white/50 rounded text-[8px] text-dark/40 font-mono w-full max-w-[150px]">
            dlux-auto.com{route}
          </div>
        </div>

        {/* The Window (Viewport) */}
        <div className="relative h-[400px] w-full overflow-hidden bg-gray-100">
          
          {/* The Content Animation */}
          <motion.div
            className="w-full"
            initial={{ y: 0 }}
            whileHover={{ 
              y: "-100%", // Scrolls to the bottom
              transition: { 
                duration: 8, // Adjust speed (15s if image is very long)
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1 // Pause at bottom before restarting
              }
            }}
          >
            {/* The Full Page Screenshot */}
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-auto object-cover" 
            />
          </motion.div>

          {/* Overlay Text (Hidden on Hover, or keep it visible) */}
          <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            {/* Optional: Add content here if you want an overlay before hover */}
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="p-6 bg-secondary border-t border-dark/5 flex justify-between items-end">
          <div>
            <p className="font-display text-sm text-primary uppercase tracking-wider mb-1">
              {category}
            </p>
            <h3 className="font-display text-2xl text-dark">
              {title}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-full border border-dark/10 flex items-center justify-center group-hover:bg-dark group-hover:text-secondary transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 -rotate-45">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}