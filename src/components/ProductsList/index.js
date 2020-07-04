import React from "react";
import Product from "../Product";
import { ProductConsumer } from "../../context";
import { ProductsListWrapper } from "./ProductsListStyle";

export default function index({ title }) {
  const titulo = title;
  return (
    <ProductsListWrapper>
      <ProductConsumer>
        {(value) => {
          const { featuredProducts, filteredProducts } = value;
          let myProducts = [];
          if (titulo === "our products") {
            myProducts = filteredProducts;
          } else {
            myProducts = featuredProducts;
          }
          if (myProducts.length === 0) {
            return (
              <div
                className="text-title"
                style={{
                  textAlign: "center",
                  fontSize: "1.5rem",
                  color: "#a6a6a6",
                  marginBottom: "50px",
                }}
              >
                Sorry, no items matched your search.
              </div>
            );
          } else {
            return (
              <div className="flex-container">
                {myProducts.map((item) => {
                  return (
                    <div key={item.id}>
                      <Product product={item} />
                    </div>
                  );
                })}
              </div>
            );
          }
        }}
      </ProductConsumer>
      <br />
    </ProductsListWrapper>
  );
}
