import React from "react";
import { Drawer } from "react-rainbow-components";
import { ProductConsumer } from "../../context";
import SidecartWrapper from "./SidecartStyle";

export default function index() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, closeCart, cart } = value;
        return (
          <SidecartWrapper>
            <Drawer
              header="Cart Items"
              slideFrom="right"
              isOpen={cartOpen}
              onRequestClose={closeCart}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              esse doloribus harum omnis tenetur accusamus quas molestiae porro
              quae nulla amet possimus sit, dolores, accusantium veritatis,
              officiis ut ducimus velit!
            </Drawer>
          </SidecartWrapper>
        );
      }}
    </ProductConsumer>
  );
}
