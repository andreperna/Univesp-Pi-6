const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductControler");

router.get("/", ProductController.index);
router.get("/:id", ProductController.show);
router.post("/", ProductController.store);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.destroy);

// router.get("/products", ProductController.index);
// router.post('/products', ProductController.store);
// router.get("/products/:id", ProductController.show);
// router.put('/products/:id', ProductController.update);
// router.delete('/products/:id', ProductController.destroy);

module.exports = router;
