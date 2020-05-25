import React, { Component } from "react";
// CSS
import "./App.css";

// PAGES
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import Default from "./pages/DefaultPage";
// ROUTER
import { Route, Switch } from "react-router-dom";
// COMPONENTS
import Sidebar from "./components/Sidebar/";
import Sidecart from "./components/Sidecart/";
import Navbar from "./components/Navbar/";
import Footer from "./components/Footer/";

import { Application } from "react-rainbow-components";

const theme = {
  rainbow: {
    palette: {
      brand: "#80deea",
      mainBackground: "#303030",
    },
  },
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Application theme={theme}>
          {/* navbar, sidebar, cart, footer */}
          <Navbar />
          <Sidebar />
          <Sidecart />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/products" exact component={Products} />
            <Route path="/product/:id" component={SingleProduct} />
            <Route path="/cart" exact component={Cart} />
            <Route component={Default} />
          </Switch>

          <Footer />
        </Application>
      </React.Fragment>
    );
  }
}

export default App;
