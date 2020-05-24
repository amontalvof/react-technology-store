import React from "react";
import Hero from "../components/Hero";
import cartBcg from "../images/cartBcg.jpg";
import Shopping from "../components/Shopping";

export default function CartPage() {
  return (
    <React.Fragment>
      <Hero img={cartBcg} />
      <Shopping />
    </React.Fragment>
  );
}
