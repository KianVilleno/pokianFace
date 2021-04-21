import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";

import ShopPage from "./components/pages/shop/shop.component";
import HomePage from "./components/pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./components/pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
