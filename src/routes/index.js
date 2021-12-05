const userRoute = require("./user.route");

const router = require("express").Router();

router.use("/users", userRoute);

module.exports = router;
