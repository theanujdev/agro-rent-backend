const userRoute = require("./user.route");
const productRoute = require("./product.route");
const rentRoute = require("./rent.route");

const router = require("express").Router();

router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/rents", rentRoute);

module.exports = router;
