import React from "react";
import { Card } from "react-rainbow-components";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function index({ product }) {
  return (
    <ProductConsumer>
      {(value) => {
        const { addToCart, setSingleProduct } = value;
        return (
          <Card
            title={product.title.toUpperCase()}
            footer={
              <div className="rainbow-align-content_space-between">
                <div className="rainbow-flex" style={{ fontSize: "1.2rem" }}>
                  Price:&nbsp;
                  {product.featured ? (
                    <div>
                      <div
                        style={{
                          display: "inline-block",
                          textDecoration: "line-through",
                          color: "#ccc",
                        }}
                      >
                        ${product.price}
                      </div>
                      &nbsp;&nbsp;
                      <div
                        style={{ display: "inline-block", color: "#80deea" }}
                      >
                        $
                        {product.price -
                          (product.price * product.forsale) / 100}
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "inline-block", color: "#80deea" }}>
                      ${product.price}
                    </div>
                  )}
                </div>
                <FaShoppingCart
                  style={{
                    color: "#fafafa",
                    marginLeft: "20px",
                    marginRight: "20px",
                    fontSize: "1.2rem",
                    cursor: "pointer",
                  }}
                  onClick={() => addToCart(product.id)}
                />
              </div>
            }
          >
            <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt="product"
                  style={{ width: "15rem", height: "15rem" }}
                  onClick={setSingleProduct}
                />
              </Link>

              {product.featured ? (
                <h1
                  style={{ color: "#80deea", fontSize: "1.2rem" }}
                  className="rainbow-p-top_large rainbow-font-size-heading_small"
                >
                  {product.forsale}% off
                </h1>
              ) : (
                <h1
                  style={{ color: "#80deea", fontSize: "1.2rem", opacity: "0" }}
                  className="rainbow-p-top_large rainbow-font-size-heading_small"
                >
                  escondido
                </h1>
              )}
            </div>
          </Card>
        );
      }}
    </ProductConsumer>
  );
}
