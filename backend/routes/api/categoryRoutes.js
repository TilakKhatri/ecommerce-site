const {
  getCategories,
  addCategories,
} = require("../../controllers/apiControllers/categoryControllers");

const router = require("express").Router();

router.post("/new", addCategories);
router.get("/", getCategories);
// router.post("/:name", addProduct);
// router.put("/:id", editProduct);
// router.delete("/:id", deleteProduct);

module.exports = router;
