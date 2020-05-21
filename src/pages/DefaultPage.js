import React from "react";
import Hero from "../components/Hero/";
import { Link } from "react-router-dom";
import defaultBcg from "../images/defaultBcg.jpg";
import { Button } from "react-rainbow-components";

export default function DefaultPage() {
  return (
    <React.Fragment>
      <Hero title={"Error 404"} max={true} img={defaultBcg}>
        <h2>
          <strong>Page not found</strong>
        </h2>
        <br />
        <Link to="/" style={{ textDecoration: "none", margin: "2rem" }}>
          <Button label="RETURN HOME" variant="border-filled" />
        </Link>
      </Hero>
    </React.Fragment>
  );
}
