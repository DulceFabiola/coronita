import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import "./index.css";

const PrimaryLayout = () => {
  return (
    <Container className="main-container">
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default PrimaryLayout;
