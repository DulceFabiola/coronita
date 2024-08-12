import React from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import logo from "../../../src/images/logo-Corona.png";
import Search from "../search/search";

const Navbar = () => {
  return (
    <Container>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem className="logo">
          <Image src={logo} alt="Coronita" width="60px" objectFit="cover" />
        </GridItem>
        <GridItem className="logo">
          <Search />
        </GridItem>
        <GridItem colStart={3} className="logo">
          <VscAccount />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Navbar;
