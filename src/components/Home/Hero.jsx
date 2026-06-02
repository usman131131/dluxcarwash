import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import home from "../../../public/videos/hero.webm";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); 
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleCanPlay = () => {
    // Add small delay for smoother transition
    setTimeout(() => setIsVideoLoaded(true), 200);
  };

  const handleUserActivity = () => {
    setShowControls(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (isPlaying) {
      timeoutRef.current = setTimeout(() => setShowControls(false), 2500);
    }
  };

  // ... (Keep existing observer logic) ...
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;
        if (!entry.isIntersecting && !videoRef.current.paused) {
          videoRef.current.pause();
          setIsPlaying(false);
          setShowControls(true);
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // ... (Keep existing toggle logic) ...
  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowControls(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      handleUserActivity();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      handleUserActivity();
    }
  };

  return (
    <header
      id="home"
      className="snap-start relative min-h-[100dvh] grid lg:grid-cols-12 gap-0 overflow-hidden bg-accent pt-20 lg:pt-0"
    >
      {/* LEFT: TEXT (Unchanged) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-7 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 lg:py-32 relative z-10 order-1"
      >
        <div className="mb-6 md:mb-8 flex items-center gap-4">
          <span className="w-8 md:w-12 h-[2px] bg-primary"></span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray">
            Yarraville VIC 3013
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-display font-bold leading-[0.9] mb-6 md:mb-10 text-dark">
          Dlux Hand Car Wash<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-dark">& Detailing</span>
        </h1>
        <p className="max-w-xl text-base md:text-lg text-gray leading-relaxed mb-8 md:mb-12">
          DLux is a boutique hand car wash and detailing brand created by industry experts to care for today’s evolving vehicles.
        </p>
        <div className="flex items-center gap-8">
          <Link to="/driveway-services" className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm md:text-xl font-semibold text-white shadow-md hover:shadow-lg hover:bg-primary/90 transition-all duration-300">
            <span className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20"><i className="fa-solid fa-arrow-right"></i></span>
            <span>Our Services</span>
          </Link>
        </div>
      </motion.div>

      {/* RIGHT: VIDEO + LOADER */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
        ref={containerRef}
        className="lg:col-span-5 h-[100vh] md:h-[50vh] lg:h-auto relative order-2 overflow-hidden group cursor-pointer bg-[#1a1a1a]"
        onClick={handleUserActivity}
        onMouseMove={handleUserActivity}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        <div className="absolute inset-0 w-full h-full">
            
            {/* --- LOADER (Visible until video loads) --- */}
            <div className={`absolute inset-0 z-20 flex items-center justify-center bg-[#111] transition-opacity duration-700 ${isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
               <div className="flex flex-col items-center gap-4">
                  {/* Spinner */}
                  <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
                  {/* Text */}
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40 animate-pulse">Loading Visuals</span>
               </div>
            </div>

            {/* --- VIDEO (Fades in when ready) --- */}
            <video 
                ref={videoRef} 
                className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-90' : 'opacity-0'}`}
                autoPlay 
                muted={isMuted} 
                loop 
                playsInline
                webkit-playsinline="true"
                preload="auto"
                onCanPlay={handleCanPlay} // Triggers fade-in
            >
                <source src={home} type="video/webm" />
                <source src={home.replace('.webm', '.mp4')} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        </div>

        {/* Controls (Only show when loaded) */}
        {isVideoLoaded && (
            <div className={`absolute top-4 right-4 md:top-1/2 md:right-auto md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-30 flex gap-3 transition-opacity duration-500 ${showControls ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <button onClick={togglePlay} className="w-10 h-10 md:w-16 md:h-16 bg-black/60 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors shadow-lg">
                    {isPlaying ? <i className="fa-solid fa-pause text-xs md:text-xl"></i> : <i className="fa-solid fa-play text-xs md:text-xl pl-1"></i>}
                </button>
                <button onClick={toggleMute} className="w-10 h-10 md:w-16 md:h-16 bg-black/60 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors shadow-lg">
                    {isMuted ? <i className="fa-solid fa-volume-xmark text-xs md:text-xl"></i> : <i className="fa-solid fa-volume-high text-xs md:text-xl"></i>}
                </button>
            </div>
        )}

      </motion.div>
    </header>
  );
};

export default Hero;