import React from "react";
import HomeBanner from "../../components/homeBanner/banner";
import { Container } from "@chakra-ui/react";
import ProductList from "../../components/products/productList";
const HomePage = () => {
  return (
    <Container>
      <HomeBanner />
      <ProductList />
    </Container>
  );
};

export default HomePage;
