import React from "react";
import { ProductConsumer } from "../../context";
import { Button } from "react-rainbow-components";

export default function CartTotals() {
  return (
    <ProductConsumer>
      {(value) => {
        const { clearCart, cartTax, cartSubTotal, cartTotal } = value;
        return (
          <div>
            <div style={{ textAlign: "center" }}>
              <Button
                shaded
                label="Clear Cart"
                variant="destructive"
                onClick={() => clearCart()}
              ></Button>
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
              <h4
                style={{
                  textTransform: "capitalize",
                  fontSize: "1.5rem",
                  color: "#80deea",
                }}
              >{`cart subtotal: $${cartSubTotal}`}</h4>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4
                style={{
                  textTransform: "capitalize",
                  fontSize: "1.5rem",
                  color: "#80deea",
                }}
              >{`cart tax: $${cartTax}`}</h4>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4
                style={{
                  textTransform: "capitalize",
                  fontSize: "1.5rem",
                  color: "#80deea",
                }}
              >{`cart total: $${cartTotal}`}</h4>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
