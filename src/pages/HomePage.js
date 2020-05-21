import React from "react";
import { ProductConsumer } from "../context";
import Hero from "../components/Hero/";
import { Link } from "react-router-dom";
import mainBcg from "../images/mainBcg.jpg";
import { Button } from "react-rainbow-components";

export default function HomePage() {
  return (
    <React.Fragment>
      <Hero title={"amazing devices"} max={true} img={mainBcg}>
        <br />
        <Link to="/products" style={{ textDecoration: "none", margin: "2rem" }}>
          <Button label="OUR PRODUCTS" variant="border-filled" />
        </Link>
      </Hero>
    </React.Fragment>
  );
}
