import React from "react";
import Header from "../layout/Header";
import detail from "../../assets/detail/detail.webp"
const DetailHeader = () => {
  return (
    <>
      <Header 
      image={detail}
        service="Detailing"
      />
    </>
  );
};

export default DetailHeader;
