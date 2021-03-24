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
      title: "Ode in C (art)",
      description: "The hit single. Vinyl only",
      price: 129,
      quantityInCart: 0,
    },
    {
      title: "Zesty Odinpops",
      description: "Odin-flavored pop-type food product in zesty variety",
      price: 9,
      quantityInCart: 0,
    },
    {
      title: "Odinware",
      description:
        "Completely safe computer software. Does important and necessary and completely safe things on your computer. Download now",
      price: 29,
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

  function handleAddToCart(event) {
    const clickedIndex = parseInt(event.target.dataset.index);
    const selectedQuantity = parseInt(event.target[0].selectedOptions[0].value);

    setItems(
      items.map((item, index) => {
        if (index === clickedIndex) {
          item.quantityInCart += selectedQuantity;
        }
        return item;
      })
    );
  }

  function handleRemoveFromCart(event) {
    const clickedIndex = parseInt(event.target.dataset.index);

    setItems(
      items.map((item, index) => {
        if (index === clickedIndex) {
          item.quantityInCart = 0;
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
              <Shop
                items={items}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
              />
            </Route>
            <Route path="/cart">
              <Cart
                cartItems={items.filter((item) => item.quantityInCart > 0)}
              />
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
