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
          <Route exact path='/' component={ProductListing} />
          <Route path='/products/:id' component={ProductDetails} />
          <Route>:-( snap ... 404 not found!</Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
