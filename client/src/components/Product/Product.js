import React, { useEffect } from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../Redux/actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../home/Product";
import { useAlert } from "react-alert";
const Product = ({match}) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  const keyword=match.params.keyword;
  console.log("kk",keyword);
  useEffect(() => {
    dispatch(getProduct(keyword));
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="productheading">Product</h2>
          <div className="products">
            {products?.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Product;
