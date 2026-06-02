import { PORTFOLIO_DATA } from "../../data/home/content";

const Portfolio = () => {
  return (
    <section id="gallery" className="py-20 bg-dark text-white overflow-hidden relative">
      
      {/* Header Section */}
      <div className="px-6 md:px-20 mb-12 flex flex-col md:flex-row justify-between gap-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold">
          Portfolio
        </h2>
        
        {/* Scroll Indicator */}
        <div className="flex items-center gap-3 text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest animate-pulse">
            <span className="hidden md:inline">Scroll to explore</span>
            <span className="md:hidden">Swipe to explore</span>
            <i className="fa-solid fa-arrow-right text-primary"></i>
        </div>
      </div>

      {/* Gallery Container */}
      <div className="relative w-full">
        
        {/* Right Fade Mask (Visual Cue) */}
        <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-dark to-transparent z-20 pointer-events-none"></div>

        <div className="flex overflow-x-auto gap-4 md:gap-6 px-6 md:px-20 pb-12 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing">
          {PORTFOLIO_DATA.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[85vw] md:min-w-[400px] h-[400px] md:h-[500px] relative group snap-center overflow-hidden"
            >
              <img
                src={item.img}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-105"
                alt={item.title}
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>

              <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="block text-5xl md:text-6xl font-display font-bold opacity-30 group-hover:opacity-100 transition duration-500 text-primary select-none">
                  {item.id}
                </span>
                <p className="font-bold text-lg md:text-xl mt-2 text-white group-hover:text-primary transition-colors">
                    {item.title}
                </p>
              </div>
            </div>
          ))}
          
          {/* End Spacer to allow last item to be fully seen */}
          <div className="min-w-[20px] md:min-w-[60px] shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;