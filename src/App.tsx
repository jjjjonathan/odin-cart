import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart, { QuantityChangeHandler } from './components/Cart';
import {
  AddToCartHandler,
  RemoveFromCartHandler,
} from './components/CartStatus';
import './App.css';

const App = () => {
  const [items, setItems] = useState([
    {
      title: 'Odinfeathers',
      description: 'Faux feathers in pastel gradients',
      price: 595,
      quantityInCart: 0,
    },
    {
      title: 'The Nondescript Odinstone',
      description: 'If you expected description, See above',
      price: 9995,
      quantityInCart: 0,
    },
    {
      title: 'Ode in C (art)',
      description: 'The hit single. Vinyl only',
      price: 129,
      quantityInCart: 0,
    },
    {
      title: 'Zesty Odinpops',
      description: 'Odin-flavored pop-type food product in zesty variety',
      price: 9,
      quantityInCart: 0,
    },
    {
      title: 'Odinware',
      description:
        'Completely safe computer software. Does important and necessary and completely safe things on your computer. Download now',
      price: 29,
      quantityInCart: 0,
    },
    {
      title: 'Odincart',
      description:
        'Virtual shopping cart. Contains no real products nor is it itself a real product',
      price: 299,
      quantityInCart: 0,
    },
    {
      title: 'Non-Odin Stone with Description',
      description:
        'A rock without Odin properties. Slight discount over Odin version',
      price: 9989,
      quantityInCart: 0,
    },
  ]);

  const handleAddToCart: AddToCartHandler = (
    selectedIndex,
    selectedQuantity,
  ) => {
    setItems(
      items.map((item, index) => {
        if (index === selectedIndex) {
          item.quantityInCart += selectedQuantity;
        }
        return item;
      }),
    );
  };

  const handleRemoveFromCart: RemoveFromCartHandler = (selectedIndex) => {
    setItems(
      items.map((item, index) => {
        if (index === selectedIndex) {
          item.quantityInCart = 0;
        }
        return item;
      }),
    );
  };

  const handleQuantityChange: QuantityChangeHandler = (
    selectedIndex,
    newQuantity,
  ) => {
    setItems(
      items.map((item, index) => {
        if (index === selectedIndex) {
          return { ...item, quantityInCart: newQuantity };
        } else {
          return item;
        }
      }),
    );
  };

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
                items={items}
                onQuantityChange={handleQuantityChange}
                onRemoveFromCart={handleRemoveFromCart}
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
};

export default App;
