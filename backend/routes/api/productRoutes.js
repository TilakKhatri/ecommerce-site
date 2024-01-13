const router = require("express").Router();
const {
  getProducts,
  addProduct,
  deleteProduct,
  editProduct,
} = require("../../controllers/apiControllers/productControllers");
router.get("/", getProducts);
// router.get("/:slug", getProductBySlug);
// router.post("/search/:query", searchProduct);
// router.get("/:id", getProductById);
router.post("/new", addProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
