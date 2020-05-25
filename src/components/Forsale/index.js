import React from "react";
import Product from "../Product";
import { ProductConsumer } from "../../context";
import { ForsaleWrapper } from "./ForsaleStyle";

export default function index({ title }) {
  const anchoPantalla = window.screen;
  //console.log(Number(anchoPantalla.width));
  const titulo = title;
  //console.log(titulo);

  return (
    <div>
      <ForsaleWrapper>
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
              let contador = -1;
              if (Number(anchoPantalla.width) >= 1200) {
                return myProducts.map((product) => {
                  contador = contador + 1;
                  if (contador % 3 === 0) {
                    //console.log(contador, contador % 3);
                    let slicedProducts = myProducts.slice(
                      contador,
                      contador + 3
                    );
                    //console.log(slicedProducts);
                    return (
                      <div>
                        <div className="fila-grande">
                          {slicedProducts.map((item) => {
                            //console.log(item);
                            return (
                              <div className="computadora">
                                <Product key={item.id} product={item} />
                              </div>
                            );
                          })}
                        </div>
                        <br />
                      </div>
                    );
                  }
                });
              } else if (
                Number(anchoPantalla.width) > 500 &&
                Number(anchoPantalla.width) < 1200
              ) {
                return myProducts.map((product) => {
                  contador = contador + 1;
                  if (contador % 2 === 0) {
                    //console.log(contador, contador % 3);
                    let slicedProducts = myProducts.slice(
                      contador,
                      contador + 2
                    );
                    //console.log(slicedProducts);
                    return (
                      <div>
                        <div className="fila-grande">
                          {slicedProducts.map((item) => {
                            //console.log(item);
                            return (
                              <div className="tablet">
                                <Product key={item.id} product={item} />
                              </div>
                            );
                          })}
                        </div>
                        <br />
                      </div>
                    );
                  }
                });
              } else {
                return myProducts.map((product) => {
                  return (
                    <div style={{ margin: "1rem" }}>
                      <Product key={product.id} product={product} />
                    </div>
                  );
                });
              }
            }
          }}
        </ProductConsumer>
      </ForsaleWrapper>
      <br />
    </div>
  );
}
