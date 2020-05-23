import React from "react";
import { Spinner } from "react-rainbow-components";
import { LoadingWrapper } from "./LoadingStyle";

export default function index() {
  return (
    <div className="rainbow-align-content_center rainbow-position_relative rainbow-p-vertical_xx-large">
      <LoadingWrapper>
        <Spinner variant="brand" size="large" />
        <br />
        <br />
        <h1 className="rainbow-font-size-text_medium rainbow-p-top_xx-large rainbow-m-top_xx-large rainbow-m-bottom_large">
          <strong>Loading...</strong>
        </h1>
      </LoadingWrapper>
    </div>
  );
}
