import React from "react";
import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <Container className="footer-container">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem className="box-item">
          <Text className="title">Conócenos</Text>
        </GridItem>
        <GridItem className="box-item">
          <Text className="title">Preguntas frecuentes</Text>
        </GridItem>
        <GridItem className="box-item">
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
      <Text className="subtitle">Depósito Coronita</Text>
    </Container>
  );
};

export default Footer;
