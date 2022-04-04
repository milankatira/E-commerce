const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsDetails,
} = require("../controller/productController");
const { isAuthenticUser } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(isAuthenticUser, createProduct);

router
  .route("/product/:id")
  .put(isAuthenticUser, updateProduct)
  .delete(isAuthenticUser, deleteProduct)
  .get(getProductsDetails);

module.exports = router;
