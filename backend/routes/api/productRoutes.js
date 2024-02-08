const express = require("express");
const app = express();
const router = express.Router();
const upload = require("../../helpers/multer");

const {
  getProducts,
  searchProduct,
  addProduct,
  deleteProduct,
  editProduct,
  getProductBySlug,
} = require("../../controllers/apiControllers/productControllers");

// app.use(upload.array("images", 4));
router.get("/", getProducts);
router.get("/:slug", getProductBySlug);
router.post("/search", searchProduct);
// router.get("/:id", getProductById);
router.post("/new", upload.array("images"), addProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
