import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home.js";
import Shop from "./Shop/Shop.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/shop" component={Shop} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
