import React from "react";
import SEO from "../components/layout/SEO";

import { RESTORATION_DATA } from "../data/restoration/content";
import HeadLightHeader from "../components/Restoration/HeadLightHeader";
import { Link } from "react-router-dom";
const HeadLight = () => {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
<SEO 
  title="Headlight Restoration Services | Clearer Vision"
  description="Fix cloudy, yellowed, or oxidized headlights. Our professional restoration service improves visibility, safety, and vehicle aesthetics starting from just $40."
  path="/restoration"
/>
      <HeadLightHeader />
      {/* --- CONTENT SECTION --- */}
      <section className="px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: THE VIDEO CARD */}
          {/* LEFT: THE IMAGE CARD */}
         <div className="relative w-full rounded-sm overflow-hidden bg-[#111] border border-white/10 shadow-2xl group">
  <img
    src={RESTORATION_DATA.image}
    alt="Headlight Restoration Process"
    className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
  />

  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>

  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 flex items-center gap-3 pointer-events-none">
    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
    <span className="text-[10px] font-bold uppercase tracking-widest text-white">
      Before / After
    </span>
  </div>
</div>

          {/* RIGHT: THE OPTION DETAILS */}
          <div>
            <span className="text-primary font-mono text-xs uppercase tracking-widest mb-4 block">
              Configuration
            </span>

            {RESTORATION_DATA.options.map((opt, idx) => (
              <div key={idx} className="border-t border-white/10 pt-8">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-4xl font-display font-bold text-white/20">
                    0{idx + 1}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold uppercase">
                    Option {opt.id}
                  </h3>
                </div>

                <h4 className="text-xl font-bold text-white mb-4">
                  {opt.title}
                </h4>

                <p className="text-white/60 text-lg font-light leading-relaxed mb-8 max-w-md">
                  {opt.desc}
                </p>

                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40 mb-8 bg-white/5 px-4 py-2 rounded">
                  <i className="fa-solid fa-clock text-primary"></i>
                  <span>{opt.time}</span>
                </div>

                <div className="flex items-center gap-8">
                  <div>
                    <span className="text-5xl font-display font-bold text-white">
                      {opt.price}
                    </span>
                    <span className="text-sm text-white/40 ml-2">
                      {opt.unit}
                    </span>
                  </div>

                  <Link to={"/booking"}>
                    <button className="group flex items-center gap-6 text-white hover:text-primary transition-colors mt-4">
                      <span className="text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-primary pb-1">
                        Book Now
                      </span>
                      <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeadLight;
