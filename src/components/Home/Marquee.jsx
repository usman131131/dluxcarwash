import React from "react";

const Marquee = () => (
  // Reduced padding on mobile (py-3 vs py-6)
  <div className="border-y border-dark/10 py-3 md:py-6 overflow-hidden bg-primary text-white select-none">
    <div className="flex whitespace-nowrap animate-marquee items-center">
      {[...Array(4)].map((_, i) => (
        <React.Fragment key={i}>
          {/* Responsive text size and margins */}
          <span className="text-xl md:text-3xl font-display font-bold mx-4 md:mx-8">
            HEADLIGHT RESTORATION</span>
          <span className="text-xl md:text-3xl font-display font-bold mx-4 md:mx-8 text-dark italic opacity-50">
            ///
          </span>
          <span className="text-xl md:text-3xl font-display font-bold mx-4 md:mx-8">
            PH NEUTRAL SOAPS
          </span>
          <span className="text-2xl md:text-3xl font-display font-bold mx-4 md:mx-8 text-dark italic opacity-50">
            ///
          </span>
          <span className="text-xl md:text-3xl font-display font-bold mx-4 md:mx-8">
            CERAMIC COATING
          </span>
          <span className="text-2xl md:text-3xl font-display font-bold mx-4 md:mx-8 text-dark italic opacity-50">
            ///
          </span>
          <span className="text-xl md:text-3xl font-display font-bold mx-4 md:mx-8">
            PAINT CORRECTION
          </span>
          <span className="text-2xl md:text-3xl font-display font-bold mx-4 md:mx-8 text-dark italic opacity-50">
            ///
          </span>
          <span className="text-xl md:text-3xl font-display font-bold mx-4 md:mx-8">
            INTERIOR RESTORATION
          </span>
          <span className="text-xl md:text-3xl font-display font-bold mx-4 md:mx-8 text-dark italic opacity-50">
            ///
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default Marquee;
