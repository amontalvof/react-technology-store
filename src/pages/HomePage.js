import React from "react";
import Hero from "../components/Hero/";
import { Link } from "react-router-dom";
import mainBcg from "../images/mainBcg.jpg";
import { Button } from "react-rainbow-components";
import Facilities from "../components/Facilities";
import Forsale from "../components/Forsale";

export default function HomePage() {
  return (
    <React.Fragment>
      <Hero title={"amazing devices"} max={true} img={mainBcg}>
        <br />
        <Link to="/products" style={{ textDecoration: "none", margin: "2rem" }}>
          <Button label="OUR PRODUCTS" variant="border-filled" />
        </Link>
      </Hero>
      <Facilities />
      <Forsale title={"sale products"} />
    </React.Fragment>
  );
}
