import React from "react";
import Hero from "../components/Hero";
import singleProductBcg from "../images/singleProductBcg.jpg";
import Description from "../components/Description";

export default function SingleProductPage() {
  return (
    <React.Fragment>
      <Hero img={singleProductBcg} title="single product" />
      <br />
      <Description />
    </React.Fragment>
  );
}
