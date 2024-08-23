import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import "./index.css";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <Container className="error-container">
      <Heading>ERROR</Heading>
      <Text fontSize="xl">404</Text>
      <Link to="/">Volver al inicio</Link>
    </Container>
  );
};

export default PageNotFound;
