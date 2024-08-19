import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "./productCard";
import "./index.css";
const ProductList = () => {
  return (
    <Grid
      width="100%"
      overflowX="hidden"
      templateColumns={{
        base: "repeat(2, 50%)",
        sm: "repeat(3, 1fr)",
        md: "repeat(4, 1fr)",
        xl: "repeat(5, 1fr)",
      }}
      gap={{ base: 1, sm: 2 }}
    >
      <GridItem>
        <ProductCard />
      </GridItem>
      <GridItem>
        <ProductCard />
      </GridItem>
      <GridItem>
        <ProductCard />
      </GridItem>
      <GridItem>
        <ProductCard />
      </GridItem>
      <GridItem>
        <ProductCard />
      </GridItem>
    </Grid>
  );
};

export default ProductList;
