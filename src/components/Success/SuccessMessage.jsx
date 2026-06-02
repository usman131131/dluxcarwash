import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SuccessMessage = ({ title = "Submission Received", message = "Thank you for choosing DLUX. We will be in touch shortly." }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center p-8 md:p-16 min-h-[400px]"
    >
      {/* Animated Checkmark */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20"
      >
        <i className="fa-solid fa-check text-4xl text-primary"></i>
      </motion.div>

      <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
        {title}
      </h2>
      
      <p className="text-white/60 text-lg max-w-md leading-relaxed mb-10">
        {message}
      </p>

      <Link to="/" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors">
        <i className="fa-solid fa-arrow-left text-primary group-hover:-translate-x-1 transition-transform"></i>
        Return Home
      </Link>
    </motion.div>
  );
};

export default SuccessMessage;