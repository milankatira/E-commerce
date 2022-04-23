import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: product.rating,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };
  return (
    <Link className="productCard" to={`product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />{" "}
        <span>
          ({product.numOfReviews}
          Review)
        </span>
      </div>

      <span>{`rs${product.price}`}</span>
    </Link>
  );
};

export default Product;
