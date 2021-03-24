import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home.js";
import Shop from "./Shop/Shop.js";
import Cart from "./Cart/Cart";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    {
      title: "Odinfeathers",
      description: "Faux feathers in pastel gradients",
      price: 595,
      quantityInCart: 0,
    },
    {
      title: "The Nondescript Odinstone",
      description: "If you expected description, See above",
      price: 9995,
      quantityInCart: 0,
    },
    {
      title: "Ode in Cart",
      description: "The hit single. Vinyl only",
      price: 39,
      quantityInCart: 0,
    },
    {
      title: "Odincart",
      description:
        "Virtual shopping cart. Contains no real products nor is it itself a real product",
      price: 299,
      quantityInCart: 0,
    },
    {
      title: "Non-Odin Stone with Description",
      description:
        "A rock without Odin properties. Slight discount over Odin version",
      price: 9989,
      quantityInCart: 0,
    },
  ]);

  function handleAddToCartClick(event) {
    const clickedIndex = event.target.dataset.index;
    console.log(clickedIndex);
    setItems(
      items.map((item, index) => {
        if (index === parseInt(clickedIndex)) {
          item.quantityInCart += 1;
        }
        return item;
      })
    );
  }

  return (
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/cart">
                  Cart
                  <span className="cart-pill">
                    {items.reduce((accumulator, item) => {
                      // console.log(item.title, item.quantityInCart);
                      return accumulator + item.quantityInCart;
                    }, 0)}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/shop">
              <Shop items={items} onAddToCartClick={handleAddToCartClick} />
            </Route>
            <Route path="/cart">
              <Cart items={items} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
