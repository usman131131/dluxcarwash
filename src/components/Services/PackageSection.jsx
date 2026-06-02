import React from "react";
import { Link } from "react-router-dom";

const ServiceSection = ({ service, index }) => {
  const isReversed = index % 2 === 1;

  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-16 md:py-24 border-b border-white/5 last:border-0 group/section">
      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* --- 1. VISUAL COLUMN (Image or Video) --- */}
        <div
          className={`lg:col-span-5 relative w-full order-1 ${
            isReversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
        <div className="relative w-full overflow-hidden rounded-sm shadow-2xl">
  {service.video ? (
    <video
      src={service.video}
      className="w-full h-[400px] md:h-[500px] lg:h-[800px] object-cover object-center transition-all duration-[1.5s] ease-out"
      autoPlay
      muted
      loop
      playsInline
      disablePictureInPicture
    />
  ) : (
    <img
      src={service.image}
      alt={service.title}
      className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center transition-all duration-[1.5s] ease-out"
    />
  )}

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

  {/* Badge */}
  <div className="absolute top-6 left-6 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full pointer-events-none">
    <span className="h-1.5 w-1.5 bg-primary rounded-full animate-pulse"></span>
    <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
      No. 0{index + 1}
    </span>
  </div>
</div>

        </div>

        {/* --- 2. CONTENT COLUMN --- */}
        <div
          className={`lg:col-span-7 flex flex-col justify-center order-2 ${
            isReversed ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-12"
          }`}
        >
          {/* Header */}
          <div className="mb-8 mt-8 lg:mt-0">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase mb-4 leading-[0.9]">
              {service.title}
            </h2>
            <p className="text-primary text-lg md:text-xl font-sans italic opacity-90">
              {service.tagline}
            </p>
          </div>

          {/* Description */}
          <div className="mb-10 pl-6 border-l border-white/10">
            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-12 py-8 border-y border-white/5">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
              Service Inclusions
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {service.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-white/80 font-light"
                >
                  <span className="text-primary mt-[2px]">/</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & Action Area */}
          <div>
            {typeof service.prices === "object" ? (
              <div className="grid grid-cols-3 gap-6 sm:gap-4 mb-10">
                <div>
                  <span className="text-[10px] uppercase text-white/30 block mb-1 tracking-widest">Sedan</span>
                  <span className="text-3xl md:text-4xl font-display font-bold text-white">${service.prices.sedan}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-white/30 block mb-1 tracking-widest">SUV</span>
                  <span className="text-3xl md:text-4xl font-display font-bold text-white/60">${service.prices.suv}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-white/30 block mb-1 tracking-widest">Large</span>
                  <span className="text-3xl md:text-4xl font-display font-bold text-white/60">${service.prices.large}</span>
                </div>
              </div>
            ) : (
              <div className="mb-10">
                <span className="text-[10px] uppercase text-white/30 block mb-1 tracking-widest">Starting From</span>
                <span className="text-4xl md:text-5xl font-display font-bold text-white">{service.prices}</span>
              </div>
            )}

            {service.addons && service.addons.length > 0 && (
              <div className="mb-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">Available Upgrades</span>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/50 font-sans">
                  {service.addons.map((addon, i) => (
                    <span key={i} className="group/addon flex items-center gap-2 hover:text-white transition-colors cursor-default">
                      {addon.name} <span className="text-white/30 group-hover/addon:text-primary transition-colors">(+${addon.price})</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Link to="/booking">
              <button className="group w-full md:w-auto flex items-center justify-between md:justify-start gap-6 bg-white text-black px-8 py-4 hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <span className="text-xs font-bold uppercase tracking-widest">Book Now</span>
                <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;