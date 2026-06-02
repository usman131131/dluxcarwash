import React from "react";
import { REVIEWS } from "../../data/home/content";

const Reviews = () => {
  return (
    <section className="bg-[#0a0a0a] py-32 px-6 md:px-20">
      
      <div className="max-w-[1600px] mx-auto">
         
         {/* Header */}
         <div className="text-center mb-20">
            <i className="fa-brands fa-google text-4xl text-white mb-6"></i>
            <h2 className="text-white text-5xl md:text-7xl font-display font-bold mb-4">
               TRUSTED BY<br/><span className="text-transparent stroke-text-white">ENTHUSIASTS.</span>
            </h2>
            <div className="flex justify-center gap-2 text-primary text-xl">
               {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
            </div>
         </div>

         {/* Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 6).map((review, idx) => (
               <div 
                  key={idx} 
                  className="bg-white/5 border border-white/5 p-8 md:p-10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
               >
                  <div className="flex items-center justify-between mb-6">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-red-900 flex items-center justify-center text-white font-bold shadow-lg">
                           {review.name.charAt(0)}
                        </div>
                        <div>
                           <h4 className="text-white text-sm font-bold">{review.name}</h4>
                           <span className="text-white/30 text-[10px] uppercase tracking-widest">Verified Client</span>
                        </div>
                     </div>
                     <i className="fa-solid fa-quote-right text-white/10 text-4xl"></i>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                     "{review.text}"
                  </p>

                  <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                     <div className="flex text-primary text-xs gap-1">
                        {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                     </div>
                     <span className="text-white/20 text-xs font-mono">{review.date}</span>
                  </div>
               </div>
            ))}
         </div>

         <div className="mt-12 text-center">
            <a 
               href="https://www.google.com/maps/place/Dlux+Hand+Car+Wash,+Detailing+%26+Cafe/@-37.8209183,144.8797147,559m/data=!3m1!1e3!4m11!1m2!10m1!1e1!3m7!1s0x6ad66748cbe2bca9:0x1b0f7efa5e1869ca!8m2!3d-37.8209226!4d144.8822896!9m1!1b1!16s%2Fg%2F11c5sbgk4r?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" 
               target="_blank" 
               rel="noreferrer"
               className="inline-block border-b border-primary text-white text-xs font-bold uppercase tracking-widest pb-1 hover:text-primary transition-colors"
            >
               Read All Reviews on Google ↗
            </a>
         </div>

      </div>
    </section>
  );
};

export default Reviews;