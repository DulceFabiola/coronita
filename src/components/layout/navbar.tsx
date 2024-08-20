import React from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import logo from "../../../src/images/logo-Corona.png";
import Search from "../search/search";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <Container className="nav-container">
      <Grid templateColumns="repeat(4, 1fr)" gap={1} className="grid">
        <GridItem className="box-left">
          <Link to="/">
            <Image src={logo} alt="Coronita" width="60px" objectFit="cover" />
          </Link>
        </GridItem>
        <GridItem colStart={2} colEnd={4} className="box">
          <Search />
        </GridItem>
        <GridItem colStart={4} className="box-rigt">
          <VscAccount />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Navbar;
