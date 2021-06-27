const express = require("express");
const router = express.Router();

// router.use("/users-view", require("./usersRoute"));
router.use("/products-view", require("./productsRouteView"));
router.use("/locations-view", require("./locationsRouteView"));
// router.use("/assets-view", require("./assetsRoute"));


module.exports = router;
