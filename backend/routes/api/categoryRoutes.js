const upload = require("../../helpers/multer");

const {
  getCategories,
  addCategories,
  getProductsByCategory,
  editCategory,
  searchCategory,
} = require("../../controllers/apiControllers/categoryControllers");

const { checkAuth, checkRole } = require("../../middlewares/auth_role_checker");
const router = require("express").Router();
router.post("/", searchCategory);
router.use(checkAuth);
router.post("/new", upload.single("image"), addCategories);
router.get("/", checkRole("ADMIN"), getCategories);
router.get("/:slug", getProductsByCategory);
// router.post("/:name", addProduct);
router.put("/:id", editCategory);
// router.delete("/:id", deleteProduct);

module.exports = router;
