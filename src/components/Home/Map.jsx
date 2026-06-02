import React from "react";

const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2433.5251059568145!2d144.8822896!3d-37.820922599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1764391874598!5m2!1sen!2s";
const DIRECTIONS_URL = "https://www.google.com/maps/place/Dlux+Hand+Car+Wash,+Detailing+%26+Cafe/@-37.8209183,144.8797147,559m/data=!3m2!1e3!4b1!4m9!1m2!10m1!1e1!3m5!1s0x6ad66748cbe2bca9:0x1b0f7efa5e1869ca!8m2!3d-37.8209226!4d144.8822896!16s%2Fg%2F11c5sbgk4r?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D";

const Map = () => (
  <section id="contact" className="bg-accent border-t border-dark/10 py-24">
    {/* Header Section */}
    <div className="max-w-4xl mx-auto text-center px-8 mb-16">
      <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase">
        Visit The Lab
      </span>
      <h2 className="text-5xl md:text-7xl font-display font-bold text-dark mt-6 mb-4">
        WHERE TO FIND US
      </h2>
      <p className="text-gray text-lg">
        Stop by for a coffee while we purify your machine.
      </p>
    </div>

    {/* Full Width Map Container */}
    <div className="relative h-[600px] w-full bg-gray-200 border-y border-dark/10">
      <iframe
        src={MAP_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" // Added security policy
        title="DLUX Location Map" // Added accessibility title
        className="absolute inset-0 w-full h-full map-filter opacity-90 hover:opacity-100 transition duration-700"
      ></iframe>

      {/* Floating Info Card */}
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-20 bg-dark text-accent p-8 shadow-2xl border-l-4 border-primary max-w-xs md:max-w-sm backdrop-blur-md bg-dark/95">
        <div className="flex items-start justify-between mb-4">
          <p className="font-display font-bold text-3xl">DLUX</p>
          <i className="fa-solid fa-location-dot text-primary text-xl"></i>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          321-325 Williamstown Rd
          <br />
          Yarraville, VIC 3013
        </p>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-bold uppercase tracking-widest text-primary hover:text-white border-b border-primary pb-1 transition-colors"
        >
          Get Directions
        </a>
      </div>
    </div>
  </section>
);

export default Map;