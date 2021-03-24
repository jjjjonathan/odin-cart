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
        {props.items.map((item) => {
          return <Item title={item.title} description={item.description} />;
        })}
      </div>
    </div>
  );
}
