import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "./productCard";

const ProductList = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
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
