import React from "react";
import SEO from "../components/layout/SEO";
import DrivewayHeader from "../components/Driveway/DrivewayHeader";
import ServiceSection from "../components/Services/PackageSection";
import { SERVICES } from "../data/services/content";

const DrivewayServices = () => {
  return (
    <>
      <div className="bg-[#050505] text-white">
         <SEO 
        title="Mobile Car Detailing Services"
        description="We bring the studio to you. Professional mobile car detailing and driveway car wash services in Melbourne. No power or water needed."
        path="/driveway-services"
      />
        <DrivewayHeader />
        <div className="flex flex-col w-full">
          {SERVICES.map((service, idx) => (
            <ServiceSection key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DrivewayServices;
