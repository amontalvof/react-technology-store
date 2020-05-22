import React from "react";
import Hero from "../components/Hero/";
import productsBcg from "../images/productsBcg.jpg";
import Forsale from "../components/Forsale";

export default function ProductsPage() {
  return (
    <React.Fragment>
      <Hero img={productsBcg} />
      <Forsale title="our products" />
    </React.Fragment>
  );
}
