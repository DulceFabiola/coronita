import React from "react";
import HomeBanner from "../../components/homeBanner/banner";
import ProductList from "../../components/products/productList";
import "./index.css";
const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <ProductList />
    </>
  );
};

export default HomePage;
