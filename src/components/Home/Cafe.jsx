import React from 'react';
import cafe from "../../assets/home/cafe.webp";

const Cafe = () => (
  <section id="cafe" className="grid lg:grid-cols-2 bg-accent">
    
    {/* Image Side */}
    <div className="relative h-[400px] md:h-[500px] lg:h-auto overflow-hidden group order-1">
      <img
        src={cafe}
        alt="Cafe Interior"
        className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition duration-500"></div>
      
      {/* Badge */}
      <div className="absolute bottom-6 right-6 md:top-8 md:left-8 md:right-auto md:bottom-auto z-20">
        <span className="bg-white text-dark px-4 py-2 font-bold uppercase tracking-widest text-[10px] md:text-xs shadow-lg">
          DLUX Coffee
        </span>
      </div>
    </div>

    {/* Content Side */}
    <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white order-2">
      <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
         The Experience
      </span>
      
      <h2 className="text-4xl md:text-6xl font-display font-bold text-dark mb-6 leading-[0.9]">
        WORK.<br/>RELAX.<br/>REPEAT.
      </h2>
      
      <div className="w-12 h-1 bg-primary mb-8"></div>

      <div className="space-y-6 text-gray leading-relaxed text-base md:text-lg">
        <p>
          Our café is designed for the modern driver. Warm in winter, cool in summer. 
          Use the downtime to catch up on emails or simply disconnect.
        </p>
        <p className="hidden md:block">
          Our food is prepared & baked instore daily. The perfect place to wait while we restore your car.
        </p>
      </div>

      <div className="mt-10 flex flex-row gap-8 md:gap-12 items-center">
        <div className="text-center group cursor-default">
          <i className="fa-solid fa-mug-hot text-2xl md:text-3xl text-dark mb-2 group-hover:text-primary transition-colors"></i>
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray">Espresso</p>
        </div>
        <div className="w-px h-8 bg-dark/10"></div>
        <div className="text-center group cursor-default">
          <i className="fa-solid fa-wifi text-2xl md:text-3xl text-dark mb-2 group-hover:text-primary transition-colors"></i>
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray">WiFi</p>
        </div>
        <div className="w-px h-8 bg-dark/10"></div>
        
      </div>
    </div>

  </section>
);

export default Cafe;