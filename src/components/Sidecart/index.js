import React from "react";
import { Drawer } from "react-rainbow-components";
import { ProductConsumer } from "../../context";
import SidecartWrapper from "./SidecartStyle";
import { Link } from "react-router-dom";
import { Button } from "react-rainbow-components";

export default function index() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
        return (
          <SidecartWrapper>
            <Drawer
              header="Cart Items"
              slideFrom="right"
              isOpen={cartOpen}
              onRequestClose={closeCart}
            >
              <ul style={{ textAlign: "center" }}>
                {cart.map((item) => {
                  return (
                    <li key={item.id} className="cart-item">
                      <img
                        width="15%"
                        src={`../${item.image}`}
                        alt="cart product"
                      />
                      <div style={{ marginBottom: "20px" }}>
                        <h6
                          style={{
                            color: "#a6a6a6",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.title}
                        </h6>
                        <h6
                          style={{
                            color: "#a6a6a6",
                            fontWeight: "bold",
                            letterSpacing: "0.3rem",
                            textTransform: "capitalize",
                          }}
                        >
                          amount: {item.count}
                        </h6>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div style={{ textAlign: "center" }}>
                <h4
                  style={{
                    textTransform: "capitalize",
                    fontSize: "1.5rem",
                    color: "#80deea",
                  }}
                >{`cart total: $${cartTotal}`}</h4>
              </div>

              <br />
              <div style={{ textAlign: "center" }}>
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", margin: "2rem" }}
                >
                  <Button
                    label="MY CART"
                    variant="outline-brand"
                    onClick={closeCart}
                  />
                </Link>
              </div>
            </Drawer>
          </SidecartWrapper>
        );
      }}
    </ProductConsumer>
  );
}
