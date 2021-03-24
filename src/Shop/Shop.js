import React from "react";
import Item from "./Item";

export default function Shop(props) {
  return (
    <div>
      <div>
        <h3>Look for things to fill your Odincart.</h3>
        <p className="lead">Remember, none of this is real.</p>
      </div>
      <div className="shop">
        {props.items.map((item, index) => {
          return (
            <Item
              title={item.title}
              description={item.description}
              price={item.price}
              onAddToCart={props.onAddToCart}
              onRemoveFromCart={props.onRemoveFromCart}
              index={index}
              key={index}
              quantityInCart={item.quantityInCart}
            />
          );
        })}
      </div>
    </div>
  );
}
