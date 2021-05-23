const express = require("express");
const router = express.Router();
const LocationController = require("../controllers/LocationController");

router.get("/", LocationController.index);
router.get("/:id", LocationController.show);
router.post("/", LocationController.store);
router.put("/:id", LocationController.update);
router.delete("/:id", LocationController.destroy);

module.exports = router;
