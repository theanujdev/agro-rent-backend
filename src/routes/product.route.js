const productController = require("../controllers/product.controller");
const router = require("express").Router();

router
  .route("/")
  .get(productController.getProducts)
  .post(productController.createProduct);

router
  .route("/:productId")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
