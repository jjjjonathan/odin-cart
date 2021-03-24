import React from "react";

export default function Item(props) {
  return (
    <div className="item-card">
      <h4 className="item-title">{props.title}</h4>
      <p className="item-description">{props.description}</p>
      <p className="price">${props.price}</p>
      <label htmlFor="quantity">Qty:</label>

      <select name="quantity" id="quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
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
