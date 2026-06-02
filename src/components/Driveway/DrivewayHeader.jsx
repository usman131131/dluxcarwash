import React from "react";
import Header from "../layout/Header";
import drivewayimage from "../../assets/drive/drivewayimage.webp"
const DrivewayHeader = () => {
  return (
    <>
      <Header 
      image={drivewayimage}
        service="Driveway"
      />
    </>
  );
};

export default DrivewayHeader;
