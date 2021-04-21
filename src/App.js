import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";

import ShopPage from "./components/pages/shop/shop.component";
import HomePage from "./components/pages/homepage/homepage.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
