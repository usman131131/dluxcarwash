import React from "react";

const Header = ({ service, image }) => {
  return (
    <div className="relative overflow-hidden bg-black">
      
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={service} 
          className="w-full h-full object-cover opacity-90"
        />
        {/* Gradient Overlay (Top to Bottom Fade) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]"></div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative z-10 pt-32 md:pt-40 lg:pt-52 pb-16 md:pb-20 px-6 md:px-12 lg:px-20 border-b border-white/10">
        <div className="max-w-[1800px] mx-auto grid lg:grid-cols-12 gap-8 md:gap-12 items-end">
          
          {/* Left: Title Section */}
          <div className="lg:col-span-8">
            <span className="text-primary font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-4 md:mb-6 block">
              The Studio
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.9] md:leading-[0.85] text-white">
              {service}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                Menu.
              </span>
            </h1>
          </div>

        
          
        </div>
      </div>
    </div>
  );
};

export default Header;