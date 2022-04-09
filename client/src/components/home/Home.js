import React, { useEffect } from "react";
import MouseOutlinedIcon from "@material-ui/icons/MouseOutlined";
import "./Home.css";
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProduct, clearErrors } from "../../Redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch,alert,error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Ecommerce" />
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
            {products?.map((product) => (
              <Product product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
