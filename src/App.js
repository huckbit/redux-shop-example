import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route path="/product/:id" component={Product} />
          <Route>404 not found!</Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
