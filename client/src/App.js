import "./App.css";
import Header from "./components/layout/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import webfont from "webfontloader";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/home/Home";
import ProductDetail from "./components/Product/ProductDetails";
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
      <Footer />
    </Router>
  );
}

export default App;
