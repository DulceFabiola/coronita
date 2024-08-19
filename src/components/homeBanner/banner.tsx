import React from "react";
import { Image } from "@chakra-ui/react";
import banner from "../../../src/images/banner.jpg";
import "./index.css";
const HomeBanner = () => {
  return (
    <>
      <Image className="banner" src={banner} alt="Deposito Coronita" />
    </>
  );
};

export default HomeBanner;
