import React from "react";
import { ProductConsumer } from "../../context";
import { FooterWrapper } from "./FooterStyle";

export default function Footer() {
  return (
    <React.Fragment>
      <ProductConsumer>
        {(value) => {
          return (
            <FooterWrapper>
              <div className="socialIcons" style={{ textAlign: "center" }}>
                {value.socialIcons.map((item) => (
                  <a className="iconosSociales" href={item.url} key={item.id}>
                    {item.icon}
                  </a>
                ))}
              </div>
              <div className="derechos" style={{ textAlign: "center" }}>
                <p>
                  Copyright &copy; Andy Montalvo{new Date().getFullYear()}, all
                  rights reserved.
                </p>
              </div>
            </FooterWrapper>
          );
        }}
      </ProductConsumer>
    </React.Fragment>
  );
}
