import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-dark text-accent px-6 md:px-20 pt-0 pb-12 relative overflow-hidden">
    {/* Main Grid */}
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 border-t border-white/10 pt-16 md:pt-20 pb-16 md:pb-20">
      {/* --- LEFT COLUMN: CTA --- */}
      <div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-8 md:mb-12 text-white">
          READY TO
          <br />
          <span className="text-primary">SHINE?</span>
        </h2>

        <div className="flex flex-col gap-4 md:gap-6">
          {/* Call Button */}
          {/* <a
            href="tel:0393149645"
            className="flex items-center justify-between p-6 md:p-8 border border-white/20 hover:bg-primary hover:border-primary hover:text-white transition group"
          >
            <span className="text-lg md:text-xl font-bold">
              Call Us During Trading Hours
            </span>
            <span className="text-lg md:text-xl font-mono">
              +61 430 585 538
            </span>
          </a> */}
          {/* Text Button */}
          <a
            href="https://wa.me/61410111190"
            className="flex items-center justify-between p-6 md:p-8 border border-white/20 hover:bg-primary hover:border-primary hover:text-white transition group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-lg md:text-xl font-bold">Call Now</span>
            <span className="text-lg md:text-xl font-mono">0410 111 190</span>
          </a>

          {/* Email Button */}
          <a
            href="mailto:info@dluxwash.com.au"
            className="flex items-center justify-between p-6 md:p-8 border border-white/20 hover:bg-primary hover:border-primary hover:text-white transition group"
          >
            <span className="text-lg md:text-xl font-bold">Email</span>
            <span className="text-base md:text-xl font-mono break-all md:break-normal">
              info@dluxwash.com.au
            </span>
          </a>
        </div>
      </div>

      {/* --- RIGHT COLUMN: INFO --- */}
      <div className="flex flex-col justify-between gap-12 lg:gap-0">
        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 md:gap-12">
          {/* Quick Links (New) */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-primary">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-lg md:text-xl text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/driveway-services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/detail"
                  className="hover:text-white transition-colors"
                >
                  Detailing
                </Link>
              </li>
              <li>
                <Link
                  to="/protect"
                  className="hover:text-white transition-colors"
                >
                  Protection
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Hours Stack */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-primary">
                Location
              </h4>
              <p className="text-lg md:text-xl leading-relaxed text-white/80">
                321-325 Williamstown Rd
                <br />
                Yarraville, VIC 3013
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-primary">
                Hours
              </h4>
              <p className="text-lg md:text-xl leading-relaxed text-white/80">
                Open 7 Days
                <br />
                9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-8 md:mt-16 border-t border-white/5 pt-8">
          <div className="flex justify-between items-end">
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-4 text-primary">
                Social
              </h4>
              <div className="flex gap-6 text-2xl md:text-3xl">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/dluxhandcarwash/"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/dluxwash/"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 border-t border-white/5">
      <p>&copy; {new Date().getFullYear()} DLUX Hand Car Wash</p>
      <p className="text-center md:text-right">Melbourne, Australia</p>
    </div>
  </footer>
);

export default Footer;
