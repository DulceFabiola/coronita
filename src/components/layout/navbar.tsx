import React from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import logo from "../../../src/images/logo-Corona.png";
import Search from "../search/search";

const Navbar = () => {
  return (
    <Container className="nav-container">
      <Grid templateColumns="repeat(3, 1fr)" gap={2} className="grid">
        <GridItem className="box-left">
          <Image src={logo} alt="Coronita" width="60px" objectFit="cover" />
        </GridItem>
        <GridItem className="box">
          <Search />
        </GridItem>
        <GridItem colStart={3} className="box-rigt">
          <VscAccount />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Navbar;
