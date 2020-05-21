import React from "react";
import Title from "../Title";
import { FormWrapper } from "./FormStyle";
import { Input } from "react-rainbow-components";
import { Textarea } from "react-rainbow-components";
import { Button } from "react-rainbow-components";

export default function index() {
  return (
    <FormWrapper>
      <div className="contact-form">
        <Title title="contact us"></Title>
        <br />
        <form>
          {/*noValidate*/}
          <Input
            label="Name"
            required
            placeholder="e.g: John Smith"
            type="text"
          />
          <br />
          <Input
            label="Email"
            required
            placeholder="e.g: johnsmith@gmail.com"
            type="email"
          />
          <br />
          <Input
            label="Subject"
            required
            placeholder="e.g: important message!"
            type="text"
          />
          <br />
          <Textarea
            label="Message"
            required
            rows={4}
            placeholder="e.g: Hello, this is an important message."
          />
          <br />
          <div style={{ textAlign: "right" }}>
            <Button label="SEND" variant="border-filled" />
          </div>
        </form>
      </div>
    </FormWrapper>
  );
}
