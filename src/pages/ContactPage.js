import React from "react";
import Hero from "../components/Hero/";
import contactBcg from "../images/contactBcg.jpg";
import Form from "../components/Form";

export default function ContactPage() {
  return (
    <React.Fragment>
      <Hero img={contactBcg}></Hero>
      <br />
      <Form />
      <br />
    </React.Fragment>
  );
}
