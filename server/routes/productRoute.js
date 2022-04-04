const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsDetails,
} = require("../controller/productController");
const { isAuthenticUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/product/new")
  .post(isAuthenticUser, authorizeRoles("admin"), createProduct);

router
  .route("/product/:id")
  .put(isAuthenticUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticUser, authorizeRoles("admin"), deleteProduct)
  .get(getProductsDetails);

module.exports = router;
