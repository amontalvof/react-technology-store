import React, { Component } from "react";
import { FacilitiesWrapper } from "./FacilitiesStyle";
import { FaShippingFast, FaRedo, FaDollarSign } from "react-icons/fa";

export class index extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaRedo />,
        title: "30 days return policy",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, modi.",
      },
      {
        id: 2,
        icon: <FaDollarSign />,
        title: "Secure payment",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, modi.",
      },
      {
        id: 3,
        icon: <FaShippingFast />,
        title: "Fast shipping",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, modi.",
      },
    ],
  };
  render() {
    return (
      <FacilitiesWrapper>
        <table>
          <tr>
            {this.state.services.map((item) => {
              return (
                <th style={{ textAlign: "center" }}>
                  <div className="service-icon">{item.icon}</div>
                  <div className="service-title">
                    <strong>{item.title}</strong>
                  </div>
                  <div className="service-text">{item.text}</div>
                </th>
              );
            })}
          </tr>
        </table>
      </FacilitiesWrapper>
    );
  }
}

export default index;
