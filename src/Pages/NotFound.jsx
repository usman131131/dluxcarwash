import React from "react";
import SEO from "../components/layout/SEO";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden px-6">
      <SEO 
  title="Page Not Found | 404 Error"
  description="The page you are looking for does not exist. Return to the DLUX homepage to explore our detailing services."
  path="/404"
/>
      
      {/* Background Noise */}
     
      
      {/* Glitch Effect Text (Behind) */}
      <div className="absolute select-none pointer-events-none">
         <h1 className="text-[20vw] md:text-[30vw] font-black text-white/10 font-display leading-none tracking-tighter blur-sm animate-pulse">
            404
         </h1>
      </div>

      <div className="relative z-10 text-center max-w-lg">
         <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-6 block">
            System Error
         </span>
         
         <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Lost in the<br/>
            <span className="text-transparent stroke-text-white">Details.</span>
         </h2>
         
         <p className="text-white/60 text-lg leading-relaxed mb-10">
            The page you are looking for has been moved, deleted, or possibly never existed.
         </p>

         <Link to="/" className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] group">
            <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
            Return to Home
         </Link>
      </div>

    </div>
  );
};

export default NotFound;