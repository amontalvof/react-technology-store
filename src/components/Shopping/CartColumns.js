import React from "react";

export default function CartColumns() {
  return (
    <div className="fila-grande-columna">
      <div className="fila-peque text-title" style={{ marginLeft: "50px" }}>
        Product
      </div>
      <div className="fila-peque text-title">Price</div>
      <div className="fila-peque text-title">Amount</div>
      <div className="fila-peque text-title">Remove</div>
      <div className="fila-peque text-title" style={{ marginRight: "50px" }}>
        Total
      </div>
    </div>
  );
}
