import React from "react";
import CartItem from "./CartItem";
import { ProductConsumer } from "../../context";

export default function CartList() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cart, incrementCart, decrementCart, removeCart } = value;
        if (cart.length === 0) {
          return (
            <div style={{ textAlign: "center" }}>
              <h1
                className="text-title"
                style={{
                  fontSize: "2rem",
                  color: "#a6a6a6",
                  textTransform: "capitalize",
                }}
              >
                your cart is currently empty
              </h1>
            </div>
          );
        } else {
          return (
            <React.Fragment>
              {cart.map((item) => (
                <div>
                  <div className="fila-grande-columna-lista">
                    <CartItem
                      key={item.id}
                      cartItem={item}
                      incrementCart={incrementCart}
                      decrementCart={decrementCart}
                      removeCart={removeCart}
                    />
                  </div>
                  <hr
                    style={{
                      marginRight: "50px",
                      color: "#222",
                      backgroundColor: "#222",
                      height: 1,
                      marginLeft: "50px",
                    }}
                  />
                </div>
              ))}
            </React.Fragment>
          );
        }
      }}
    </ProductConsumer>
  );
}
