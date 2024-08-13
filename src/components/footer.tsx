import React from "react";
import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <Container className="footer-container">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <Text className="title">Conócenos</Text>
        </GridItem>
        <GridItem>
          <Text className="title">Preguntas y ayuda</Text>
        </GridItem>
        <GridItem>
          <Text className="title">Redes sociales</Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem>
              <FaFacebookSquare />
            </GridItem>
            <GridItem>
              <AiFillTikTok />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
      <Text className="italic-title">
        @2024 Copyright. Todos los derechos reservados Depósito Coronita
      </Text>
    </Container>
  );
};

export default Footer;
