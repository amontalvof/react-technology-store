import React from "react";
import mainBcg from "../../images/mainBcg.jpg";
import { HeroWrapper } from "./HeroStyle";

export default function index({ img, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">
          <strong>{title}</strong>
        </h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

index.defaultProps = {
  img: mainBcg,
};
