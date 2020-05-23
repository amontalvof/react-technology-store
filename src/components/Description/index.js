import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
import Loading from "../Loading";
import { DescriptionWrapper } from "./DescriptionStyle";
import { Button } from "react-rainbow-components";

export default function index() {
  return (
    <ProductConsumer>
      {(value) => {
        const { singleProduct, addToCart, loading } = value;
        //console.log("spv", singleProduct.image);

        if (loading) {
          //console.log("loading");
          return <Loading />;
        }
        const {
          company,
          description,
          id,
          price,
          title,
          image,
          featured,
          forsale,
        } = singleProduct;
        return (
          <DescriptionWrapper>
            <br />
            <div id="content-desc">
              <div id="left-desc">
                <img src={`../${image}`} alt="product" />
              </div>

              <div id="right-desc">
                <br />
                <h2 className="text-title">model: {title}</h2>
                <h3 className="text-title">company: {company}</h3>
                {featured ? (
                  <h3 className="text-title">
                    Price:&nbsp;
                    <div
                      style={{
                        display: "inline-block",
                        textDecoration: "line-through",
                      }}
                    >
                      ${price}
                    </div>
                    &nbsp;&nbsp;
                    <div style={{ display: "inline-block", color: "#80deea" }}>
                      ${price - (price * forsale) / 100}
                    </div>
                  </h3>
                ) : (
                  <h3 className="text-title">
                    Price:&nbsp;
                    <div style={{ display: "inline-block", color: "#80deea" }}>
                      ${price}
                    </div>
                  </h3>
                )}
                <h3 className="text-title">Info about the Product:</h3>
                <p className="text-title">{description}</p>
                <br />
                <div className="botones">
                  <Button
                    style={{ marginBottom: "10px" }}
                    label="ADD TO CART"
                    variant="border-filled"
                    onClick={() => addToCart(id)}
                  />
                  <Link
                    to="/products"
                    style={{ textDecoration: "none", margin: "2rem" }}
                  >
                    <Button
                      label="OUR PRODUCTS"
                      variant="border-filled"
                      style={{ marginBottom: "10px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </DescriptionWrapper>
        );
      }}
    </ProductConsumer>
  );
}
