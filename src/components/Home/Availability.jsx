import React from "react";

const HOURS_DATA = [
  { day: "Monday", time: "9:00am - 5:00pm" },
  { day: "Tuesday", time: "9:00am - 5:00pm" },
  { day: "Wednesday", time: "9:00am - 5:00pm" },
  { day: "Thursday", time: "8:30am - 6:00pm" },
  { day: "Friday", time: "8:30am - 6:00pm" },
  { day: "Saturday", time: "8:30am - 6:00pm" },
  { day: "Sunday", time: "8:30am - 6:00pm" },
];

const Availability = () => (
  <section className="bg-black py-24 md:py-32 relative overflow-hidden flex items-center justify-center px-6">
    
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

    <div className="relative z-10 w-full max-w-2xl">
      
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-1 rounded-full mb-6">
            <i className="fa-solid fa-sun text-primary text-xs animate-spin-slow"></i>
            <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase">
                Season Schedule
            </span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase leading-[0.9]">
          Summer<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            Trading Hours
          </span>
        </h2>
      </div>

      {/* The Schedule List */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 md:p-8">
        <div className="flex flex-col">
            {HOURS_DATA.map((item, idx) => (
                <div 
                    key={idx} 
                    className="flex justify-between items-center py-5 px-4 md:px-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors rounded-lg group"
                >
                    <span className="text-lg md:text-xl font-display font-bold text-white group-hover:text-primary transition-colors">
                        {item.day}
                    </span>
                    
                    {/* Visual Dotted Line */}
                    <div className="flex-grow mx-4 border-b border-dotted border-white/20 relative top-1 hidden md:block"></div>
                    
                    <span className="text-sm md:text-lg font-mono text-white/80">
                        {item.time}
                    </span>
                </div>
            ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center">
        <p className="text-white/40 text-xs md:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            Subject to weather conditions
        </p>
      </div>

    </div>
  </section>
);

export default Availability;