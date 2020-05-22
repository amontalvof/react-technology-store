import React from "react";
import Product from "../Product";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import { ForsaleWrapper } from "./ForsaleStyle";

export default function index({ title }) {
  const anchoPantalla = window.screen;
  //console.log(Number(anchoPantalla.width));
  const titulo = title;
  //console.log(titulo);

  return (
    <div>
      <br />
      <Title title={title} center="true" />
      <br />
      <ForsaleWrapper>
        <ProductConsumer>
          {(value) => {
            const { featuredProducts, storedProducts } = value;
            let myProducts = [];
            if (titulo == "our products") {
              myProducts = storedProducts;
            } else {
              myProducts = featuredProducts;
            }

            let contador = -1;
            if (myProducts.length > 0) {
              if (Number(anchoPantalla.width) > 500) {
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
                              <div>
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
