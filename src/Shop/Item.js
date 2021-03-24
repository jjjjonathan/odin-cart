import React from "react";

export default function Item(props) {
  return (
    <div className="item-card">
      <h4 className="item-title">{props.title}</h4>
      <p className="item-description">{props.description}</p>
      <p className="price">${props.price}</p>
      <button
        data-index={props.index}
        type="button"
        onClick={props.onAddToCartClick}
      >
        Add to cart
      </button>
    </div>
  );
}
