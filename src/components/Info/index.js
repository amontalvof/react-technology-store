import React from "react";
import Title from "../Title/";
import { InfoWrapper } from "./InfoStyle";
import aboutBcg from "../../images/aboutBcg.jpg";

export default function InfoStyle() {
  return (
    <InfoWrapper>
      <br />
      <div id="content">
        <div id="left">
          <img src={aboutBcg} alt="about company" />
        </div>

        <div id="right">
          <Title title="about us"></Title>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis facilis fugit doloremque temporibus eaque neque debitis
            aut animi eligendi quos unde eos consectetur dolores aliquid vel
            quae ea ducimus minus qui, atque asperiores! Tempore quibusdam
            minima laborum, dolor quas, ducimus eveniet, velit maxime aspernatur
            facilis commodi qui? Excepturi, iusto accusantium repellendus
            voluptatibus veniam deleniti! Laborum fugiat, nostrum inventore
            necessitatibus eum rem voluptates dolor facilis eius aut, numquam
            aliquid voluptate ipsam molestiae beatae ex.
          </p>
        </div>
      </div>
    </InfoWrapper>
  );
}
