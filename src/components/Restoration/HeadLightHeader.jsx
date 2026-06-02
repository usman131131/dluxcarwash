import React from "react";
import Header from "../layout/Header";
import headlight from "../../assets/restoration/headlight.webp"
const HeadLightHeader = () => {
  return (
    <>
      <Header image={headlight} service="Restoration" />
    </>
  );
};

export default HeadLightHeader;
