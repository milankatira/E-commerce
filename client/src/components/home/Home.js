import React from "react";
import MouseOutlinedIcon from "@material-ui/icons/MouseOutlined";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  const product = {
    name: "blueT-shirt",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
    price: "4565",
    _id: "wwww",
  };
  return (
    <>
      <div className="banner">
        <p>welcome to ecommerce</p>
        <h1>find amazing product below</h1>
        <a href="#container">
          <button>
            <div>
              scroll <MouseOutlinedIcon />
            </div>
          </button>
        </a>
      </div>
      <h2 className="homeheading">Featured product</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </>
  );
};

export default Home;
