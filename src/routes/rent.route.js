const rentController = require("../controllers/rent.controller");
const router = require("express").Router();

router.route("/").get(rentController.getRents).post(rentController.createRent);

module.exports = router;
