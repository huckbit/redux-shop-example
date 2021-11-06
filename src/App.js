import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route>404 not found!</Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
