const express = require("express");
const productRouter = express.Router();
const { getAllProducts, addProduct, getProductById, updateProductById, deleteProductById } = require("../controllers/Product")
productRouter
    .route("/")
    .get(getAllProducts)
    .post(addProduct);


productRouter
    .route("/:id")
    .get(getProductById)
    .put(updateProductById)
    .delete(deleteProductById);

module.exports = productRouter;