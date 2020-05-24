import React from "react";
import { FaTrashAlt, FaPlusSquare, FaMinusSquare } from "react-icons/fa";

export default function CartItem({
  cartItem,
  incrementCart,
  decrementCart,
  removeCart,
}) {
  const { id, title, count, total, image } = cartItem;
  return (
    <React.Fragment>
      <div
        className="fila-peque text-title izq"
        style={{ textAlign: "center" }}
      >
        <img width="30%" src={`../${image}`} alt="cart product" />
        <div style={{ marginBottom: "20px" }}>
          <h6
            style={{
              color: "#a6a6a6",
              textTransform: "uppercase",
              fontSize: "0.7rem",
            }}
          >
            {title}
          </h6>
        </div>
      </div>
      <div className="fila-peque text-title">
        {cartItem.featured ? (
          <div>
            <h5>Price:</h5>&nbsp;
            <div
              style={{
                display: "inline-block",
                textDecoration: "line-through",
                color: "#ccc",
              }}
            >
              ${cartItem.price}
            </div>
            &nbsp;&nbsp;
            <div style={{ display: "inline-block", color: "#80deea" }}>
              ${cartItem.price - (cartItem.price * cartItem.forsale) / 100}
            </div>
          </div>
        ) : (
          <div style={{ display: "inline-block", color: "#80deea" }}>
            <h5>Price:</h5> ${cartItem.price}
          </div>
        )}
      </div>
      <div className="fila-peque text-title">
        <span className="conteo" onClick={() => decrementCart(id)}>
          <FaMinusSquare />
        </span>{" "}
        &nbsp;
        {count} &nbsp;
        <span className="conteo" onClick={() => incrementCart(id)}>
          <FaPlusSquare />
        </span>
      </div>
      <div className="fila-peque text-title">
        <span className="basura" onClick={() => removeCart(id)}>
          <FaTrashAlt />
        </span>
      </div>
      <div className="fila-peque text-title der" style={{ color: "#80deea" }}>
        <h5>Total:</h5> ${total}
      </div>
    </React.Fragment>
  );
}
