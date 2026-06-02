import React from "react";
import SEO from "../components/layout/SEO";

import { PROTECTION_SERVICES } from "../data/protect/content";
import ServiceSection from "../components/Services/PackageSection";
import ProtectHeader from "../components/Protect/ProtectHeader";
const Protection = () => {
  return (
<div className="bg-[#050505] text-white min-h-screen">
<SEO 
  title="Ceramic Coating & Paint Protection"
  description="Protect your car with 9H Ceramic Coating. Long-lasting shine, hydrophobic protection, and scratch resistance for new and used cars."
  path="/protect"
/>
      {/* --- PAGE HEADER --- */}
   <ProtectHeader/>

      {/* --- SERVICE SECTIONS --- */}
      <div className="flex flex-col w-full">
        {PROTECTION_SERVICES.map((service, idx) => (
          <ServiceSection key={idx} service={service} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Protection;
