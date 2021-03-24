import React, { useState } from "react";
import Item from "./Item";

export default function Shop(props) {
  const [items, setItems] = useState([
    {
      title: "Odinfeathers",
      description: "Faux feathers in pastel gradients",
      price: 595,
    },
    {
      title: "The Nondescript Odinstone",
      description: "You expected description? See above",
      price: 9995,
    },
    {
      title: "Ode in Car",
      description: "The hit single. Vinyl single only",
      price: 39,
    },
    {
      title: "Odincart",
      description:
        "Virtual shopping cart. Contains no real products nor is it itself a real product",
      price: 299,
    },
  ]);

  return (
    <div>
      <div>
        <h3>Look for things to fill your Odincart.</h3>
        <p className="lead">Remember, none of this is real.</p>
      </div>
      <div className="shop">
        {items.map((item) => {
          return <Item title={item.title} description={item.description} />;
        })}
      </div>
    </div>
  );
}
