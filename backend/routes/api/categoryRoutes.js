const {
  getCategories,
  addCategories,
  getProductsByCategory,
  editCategory,
} = require("../../controllers/apiControllers/categoryControllers");

const { checkAuth, checkRole } = require("../../middlewares/auth_role_checker");
const router = require("express").Router();

router.post("/new", checkAuth, addCategories);
router.get("/", checkAuth, checkRole("ADMIN"), getCategories);
router.get("/:slug", getProductsByCategory);
// router.post("/:name", addProduct);
router.put("/:id", editCategory);
// router.delete("/:id", deleteProduct);

module.exports = router;
