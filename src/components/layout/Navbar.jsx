import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import driveway from "../../assets/drive/drivewayimage.webp";
import ceramic from "../../assets/protect/ceramic.webp";
import detail from "../../assets/detail/detail.webp";
import headlight from "../../assets/restoration/headlight.webp"
import homeheader from "../../assets/home/homeheader.webp"
const NAV_ITEMS = [
  {
    title: "Home",
    href: "/",
    img: homeheader,
  },
  {
    title: "Driveway Services",
    href: "/driveway-services",
    img: driveway,
  },
  {
    title: "Detailing",
    href: "/detail",
    img: detail,
  },
  {
    title: "Protect",
    href: "/protect",
    img: ceramic,
  },
  {
    title: "Headlight Restoration",
    href: "/restoration",
    img: headlight,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredImg, setHoveredImg] = useState(NAV_ITEMS[0].img);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile
  const location = useLocation();
  const closeMenu = () => setIsOpen(false);

  // 1. Detect Mobile Screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 2. Handle Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // --- ANIMATION VARIANTS (HYBRID) ---
  // Mobile: Simple opacity fade (Fast)
  // Desktop: Standard fade (Smooth)
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: isMobile ? 0.25 : 0.4 }, // Faster on mobile
    },
    exit: {
      opacity: 0,
      transition: { duration: isMobile ? 0.2 : 0.3 },
    },
  };

  // Items stagger only on Desktop. On Mobile they appear instantly.
  const itemVariants = {
    hidden: { x: isMobile ? 0 : -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: isMobile ? 0 : 0.1 + i * 0.05, duration: 0.4 },
    }),
  };

  return (
    <>
      <style>{`
        .dlux-scrollbar::-webkit-scrollbar { width: 4px; }
        .dlux-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .dlux-scrollbar::-webkit-scrollbar-thumb { background: #DB3E33; border-radius: 0px; }
      `}</style>

      {/* --- TOP BAR --- */}
      <nav
        className={`fixed top-0 left-0 w-full h-20 md:h-24 z-50 flex justify-between items-center px-4 md:px-12 transition-all duration-300 ${
          isScrolled || isOpen
            ? "bg-dark/95 backdrop-blur-md border-b border-white/5" // Optimized blur
            : "bg-dark"
        }`}
      >
        <Link
          to="/"
          className="text-lg md:text-2xl font-display font-bold tracking-tighter text-white relative z-50 shrink-0"
          onClick={() => setIsOpen(false)}
        >
          DLUX<span className="text-primary">.</span>
        </Link>

        <div className="flex items-center gap-2 md:gap-6 relative z-50">
          {/* Book Now */}
          <Link
            onClick={closeMenu}
            to="/booking"
            className="flex items-center gap-3 px-3 md:px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
              <span className="hidden md:inline">Book Now</span>
              <span className="md:hidden">Book</span>
            </span>
          </Link>

          {/* Contact Us */}
          <Link
            onClick={closeMenu}
            to="/contact"
            className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>{" "}
            <span className="inline text-[10px] font-bold uppercase tracking-widest text-white/80">
              Contact
            </span>
          </Link>

          {/* Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-3 relative z-50 ml-2"
          >
            <span className="hidden md:block font-bold uppercase tracking-widest text-xs text-white group-hover:text-primary transition-colors">
              {isOpen ? "Close" : "Menu"}
            </span>
            <div
              className={`w-10 h-10 rounded-full border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 text-white backdrop-blur-sm ${
                isScrolled
                  ? "border-white/20 bg-dark/20"
                  : "border-white/30 bg-white/10"
              }`}
            >
              <i
                className={`fa-solid ${
                  isOpen ? "fa-xmark" : "fa-bars-staggered"
                } text-xs transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
              ></i>
            </div>
          </button>
        </div>
      </nav>

      {/* --- FULL SCREEN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex bg-[#0f0f0f] h-[100dvh] w-full will-change-opacity"
          >
            {/* LEFT SIDE */}
            <div className="relative z-10 w-full lg:w-5/12 h-full flex flex-col pt-28 pb-8">
              <div className="flex-grow overflow-y-auto dlux-scrollbar px-6 md:px-12 lg:px-20 overscroll-contain">
                <div className="flex flex-col w-full pb-12">
                  {NAV_ITEMS.map((item, idx) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <motion.div
                        key={idx}
                        custom={idx}
                        variants={itemVariants} // Staggered on desktop, Instant on mobile
                        className="border-b border-white/10 relative group will-change-transform"
                      >
                        <Link
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          onMouseEnter={() => setHoveredImg(item.img)}
                          className="flex items-center justify-between py-6 w-full group cursor-pointer"
                        >
                          <div className="flex items-center gap-6">
                            <span
                              className={`text-[10px] md:text-xs font-mono transition-colors ${
                                isActive
                                  ? "text-primary font-bold"
                                  : "text-primary/50 group-hover:text-primary"
                              }`}
                            >
                              0{idx + 1}
                            </span>
                            <span
                              className={`font-display font-bold text-2xl md:text-3xl lg:text-4xl transition-all duration-300 uppercase tracking-tight ${
                                isActive
                                  ? "text-primary translate-x-2 italic"
                                  : "text-white/70 group-hover:text-white group-hover:translate-x-2"
                              }`}
                            >
                              {item.title}
                            </span>
                          </div>
                          <span
                            className={`text-primary text-sm transition-all duration-300 ${
                              isActive
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100"
                            }`}
                          >
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isMobile ? 0.1 : 0.4 }}
                className="px-6 md:px-12 lg:px-20 pt-6 border-t border-white/10 flex justify-between items-center"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:info@dluxwash.com.au"
                    className="text-sm text-white hover:text-primary transition"
                  >
                    info@dluxwash.com.au
                  </a>
                </div>
                <div className="flex gap-6 text-white/50">
                  <i className="fa-brands fa-instagram hover:text-white transition cursor-pointer"></i>
                  <i className="fa-brands fa-tiktok hover:text-white transition cursor-pointer"></i>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE (Desktop Only) */}
            <div className="hidden lg:block w-7/12 h-full relative overflow-hidden border-l border-white/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={hoveredImg}
                  src={hoveredImg}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 w-full h-full object-cover grayscale will-change-transform"
                  alt="Menu Preview"
                />
              </AnimatePresence>
              <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col items-end gap-2 z-10 opacity-30 mix-blend-overlay">
                <div className="w-[2px] h-24 bg-white"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-white writing-vertical-lr">
                  Est. 2020
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-90"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
