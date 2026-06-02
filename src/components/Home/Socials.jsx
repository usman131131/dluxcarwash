import React, { useState, useRef, useEffect } from "react";
import { SOCIAL_REELS } from "../../data/home/content";

const Socials = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);

  // --- SCROLL OBSERVER ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && activeVideoIndex !== null) {
          if (videoRefs.current[activeVideoIndex]) {
            videoRefs.current[activeVideoIndex].pause();
            videoRefs.current[activeVideoIndex].currentTime = 0;
          }
          setActiveVideoIndex(null);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [activeVideoIndex]);

  // --- HANDLERS ---
  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (activeVideoIndex === index) {
      video.pause();
      setActiveVideoIndex(null);
    } else {
      // Pause others
      videoRefs.current.forEach((vid, i) => {
        if (vid && i !== index) {
          vid.pause();
          vid.currentTime = 0;
        }
      });

      video.muted = false;
      // iOS needs a tiny delay to register the user interaction before play()
      setTimeout(() => {
        video.play().catch((e) => console.log("Play failed", e));
      }, 50);
      
      setActiveVideoIndex(index);
    }
  };

  const handleVideoEnd = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].currentTime = 0;
      videoRefs.current[index].pause();
    }
    setActiveVideoIndex(null);
  };

  return (
    <section ref={containerRef} className="py-24 bg-black overflow-hidden relative">
      
      {/* Header */}
      <div className="px-6 md:px-20 mb-12 flex justify-between items-end text-white relative z-10">
        <h2 className="text-4xl md:text-7xl font-display font-bold leading-none">THE FEED</h2>
        <a href="https://www.instagram.com/dluxhandcarwash/" target="_blank" rel="noreferrer" className="hidden md:block text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-white transition-colors">
          View Instagram
        </a>
      </div>

      {/* Scroll Container */}
      <div className="flex gap-6 md:gap-10 px-6 md:px-20 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8">
        {SOCIAL_REELS.map((reel, index) => (
          <div
            key={index}
            onClick={() => handleVideoClick(index)}
            className="min-w-[280px] md:min-w-[400px] bg-[#111] border-r-[12px] border-black relative cursor-pointer snap-center group overflow-hidden shrink-0"
          >
            
            {/* Top Holes */}
            <div className="absolute top-0 w-full h-8 flex justify-between px-2 bg-black z-30 items-center">
               {[...Array(6)].map((_, i) => <div key={i} className="w-3 h-4 bg-white/10 rounded-sm"></div>)}
            </div>

            {/* --- MEDIA CONTAINER --- */}
            <div className="h-[450px] md:h-[650px] w-full relative bg-black">
              
              {/* 1. VIDEO (Bottom Layer z-0) */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={reel.video}
                playsInline
                webkit-playsinline="true" // Crucial for iOS
                preload="auto" // Changed from metadata
                muted={activeVideoIndex !== index}
                onEnded={() => handleVideoEnd(index)}
                className="w-full h-full object-cover absolute inset-0 z-0"
              />

              {/* 2. IMAGE COVER (Top Layer z-10) */}
              {/* This image MUST exist in your data. If it's null, you get a black screen. */}
              <div 
                className={`absolute inset-0 z-10 w-full h-full transition-opacity duration-500 pointer-events-none ${activeVideoIndex === index ? 'opacity-0' : 'opacity-100'}`}
              >
                 <img 
                    src={reel.img} 
                    alt="Reel Thumbnail" 
                    className="w-full h-full object-cover"
                 />
                 {/* Dark Overlay */}
                 <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* 3. PLAY ICON (Layer z-20) */}
              <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-300 ${activeVideoIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                 <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl">
                    <i className="fa-solid fa-play text-2xl ml-1"></i>
                 </div>
                 <span className="mt-4 text-[10px] font-bold uppercase tracking-widest text-white">Watch Reel</span>
              </div>

              {/* 4. SOUND ICON (Active State z-30) */}
              <div className={`absolute top-12 right-4 z-30 transition-opacity duration-300 ${activeVideoIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                 <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <i className="fa-solid fa-volume-high text-xs"></i>
                 </div>
              </div>

            </div>

            {/* Bottom Holes */}
            <div className="absolute bottom-0 w-full h-8 flex justify-between px-2 bg-black z-30 items-center">
               {[...Array(6)].map((_, i) => <div key={i} className="w-3 h-4 bg-white/10 rounded-sm"></div>)}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Socials;