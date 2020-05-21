import React from "react";
import { TitleWrapper } from "./TitleStyle";

export default function index({ title, center }) {
  return (
    <TitleWrapper center={center}>
      <h2 className="text-tile">
        <strong>{title}</strong>
      </h2>
      <div className="title-underline"></div>
    </TitleWrapper>
  );
}
