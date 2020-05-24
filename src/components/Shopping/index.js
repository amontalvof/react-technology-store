import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { ShoppingWrapper } from "./SoppingStyle";

export default function index() {
  return (
    <React.Fragment>
      <br />
      <Title title={"your cart items"} center={true} />
      <br />
      <ShoppingWrapper>
        <CartColumns />
        <br />
        <br />
        <CartList />
        <br />
        <br />
        <CartTotals />
      </ShoppingWrapper>
      <br />
    </React.Fragment>
  );
}
