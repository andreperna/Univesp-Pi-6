const express = require("express");
const router = express.Router();
const AssetController = require("../controllers/AssetController");

router.get("/", AssetController.index);
router.get("/:id", AssetController.show);
router.post("/", AssetController.store);
router.put("/:id", AssetController.update);
router.delete("/:id", AssetController.destroy);

module.exports = router;