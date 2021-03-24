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
      description: "You expected description? See above",
      price: 9995,
      quantityInCart: 0,
    },
    {
      title: "Ode in Car",
      description: "The hit single. Vinyl single only",
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
  ]);

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
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/shop">
              <Shop items={items} />
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
