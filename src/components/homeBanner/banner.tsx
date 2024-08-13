import React from "react";
import { Container, Image } from "@chakra-ui/react";
import banner from "../../../src/images/banner.jpg";
import "./index.css";
const HomeBanner = () => {
  return (
    <Container>
      <Image className="banner" src={banner} alt="Deposito Coronita" />
    </Container>
  );
};

export default HomeBanner;
