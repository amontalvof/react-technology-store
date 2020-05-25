import React from "react";
import Hero from "../components/Hero/";
import productsBcg from "../images/productsBcg.jpg";
import Forsale from "../components/Forsale";
import Title from "../components/Title";
import Filter from "../components/Filter";

export default function ProductsPage() {
  return (
    <React.Fragment>
      <Hero img={productsBcg} />
      <br />
      <Title title={"our products"} center="true" />
      <br />
      <Filter />
      <Forsale title="our products" />
    </React.Fragment>
  );
}
