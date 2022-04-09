import "./App.css";
import Header from "./components/layout/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import webfont from "webfontloader";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/home/Home";
import ProductDetail from "./components/Product/ProductDetails";
import Product from "./components/Product/Product";
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

      <Footer />
    </Router>
  );
}

export default App;
