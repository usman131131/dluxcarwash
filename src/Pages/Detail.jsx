import React from "react";
import SEO from "../components/layout/SEO";

import { DETAIL_SERVICES } from "../data/detail/content"; // Import new data
import ServiceSection from "../components/Services/PackageSection"; // Reuse component
import DetailHeader from "../components/Details/DetailHeader";

const Detail = () => {
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <SEO 
  title="Car Interior Detailing & Paint Correction"
  description="Restore your vehicle's factory look with our full interior detailing, steam cleaning, and multi-stage paint correction packages."
  path="/detail"
/>
      <DetailHeader />

      {/* --- SERVICE SECTIONS --- */}
      <div className="flex flex-col w-full">
        {DETAIL_SERVICES.map((service, idx) => (
          <ServiceSection key={idx} service={service} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Detail;
