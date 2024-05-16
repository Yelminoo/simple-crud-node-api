const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.controller");
const router = express.Router();

//get all product
router.get("/", getProducts);

//get one product
router.get("/:id", getProduct);

//update
router.put("/:id", updateProduct);

//create product
router.post("/", createProduct);

//delete

router.delete("/:id", deleteProduct);

module.exports = router;
