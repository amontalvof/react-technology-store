import React from "react";
import { BadgeOverlay } from "react-rainbow-components";
import { NavWrapper } from "./NavbarStyle";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { ProductConsumer } from "../../context";
import logo from "../../images/logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cartItems, handleSidebar, handleCart } = value;
          return (
            <NavWrapper>
              <div className="nav-center">
                <FaBars className="nav-icons" onClick={handleSidebar} />
                <div style={{ marginRight: "1.1rem", marginLeft: "1.1rem" }}>
                  <div className="nav-logo">
                    <img src={logo} alt="technology logo" width="15%" />
                    <h1>
                      <strong>&nbsp;Technology Store</strong>
                    </h1>
                  </div>
                </div>
                {cartItems < 1 ? (
                  <FaShoppingCart className="nav-icons" onClick={handleCart} />
                ) : (
                  <BadgeOverlay value={cartItems} position="bottom-right">
                    <FaShoppingCart
                      className="nav-icons"
                      onClick={handleCart}
                    />
                  </BadgeOverlay>
                )}
              </div>
            </NavWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Navbar;
