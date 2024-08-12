import React from "react";
import Navbar from "./navbar";
import Footer from "../footer";
import { Container } from "@chakra-ui/react";
import "./index.css";

const PrimaryLayout: React.FC<{ children: React.ReactNode }> = () => {
  return (
    <Container className="main-container">
      <Navbar />
      <Footer />
    </Container>
  );
};

export default PrimaryLayout;
