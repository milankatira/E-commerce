import "./App.css";
import Header from "./components/layout/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import webfont from "webfontloader";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/home/Home";
import ProductDetail from "./components/Product/ProductDetails";
import Product from "./components/Product/Product";
import Search from "./components/Product/Search";

function App() {
  React.useEffect(() => {
    webfont.load({
      google: {
        families: ["Roboto", "Droid sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductDetail} />
      <Route exact path="/products" component={Product} />
      <Route exact path="/products/:keyword" component={Product} />

      <Route exact path="/search" component={Search} />

      <Footer />
    </Router>
  );
}

export default App;
