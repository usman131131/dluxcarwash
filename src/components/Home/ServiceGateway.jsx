import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceShowcase = ({ data, index }) => {
  const isReversed = index % 2 === 1;

  return (
    <section className="snap-start bg-black py-24 px-6 md:px-12 lg:px-20 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* --- VISUAL COLUMN --- */}
        <motion.div 
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={`relative h-[400px] md:h-[600px] w-full ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative group shadow-2xl border border-white/5">
            
            {/* GIF or IMAGE */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            
            <img
              // Uses data.gif if available, otherwise data.image
              src={ data.image} 
              alt={data.title}
              className="w-full h-full object-cover transition-all duration-[1.5s] scale-105 group-hover:scale-100"
            />

          </div>
          
          {/* Glow Effect */}
          <div className={`absolute -inset-4 bg-primary/20 blur-[100px] -z-10 opacity-30 rounded-full ${isReversed ? 'right-0' : 'left-0'}`}></div>
        </motion.div>

        {/* --- CONTENT COLUMN --- */}
        <motion.div 
          initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`flex flex-col justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}
        >
          {/* Top Accent Line */}
          <div className="w-16 h-1 bg-primary mb-8"></div>

          {/* Subtitle */}
          <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
            {data.subtitle}
          </span>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-[1.1]">
            {data.title}
          </h2>

          {/* Body Text */}
          <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed mb-12 max-w-xl">
            <p>{data.desc1}</p>
            <p>{data.desc2}</p>
          </div>

          {/* Button */}
          <Link to={data.link}>
            <button className="bg-primary text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 shadow-[0_10px_30px_rgba(219,62,51,0.3)] hover:shadow-white/20">
              {data.buttonText}
            </button>
          </Link>

        </motion.div>

      </div>
    </section>
  );
};

export default ServiceShowcase;