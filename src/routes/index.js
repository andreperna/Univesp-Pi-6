const express = require("express");
const router = express.Router();

router.use("/users", require("./usersRoute"));
router.use("/products", require("./productsRoute"));
router.use("/locations", require("./locationsRoute"));
router.use("/assets", require("./assetsRoute"));

module.exports = router;
