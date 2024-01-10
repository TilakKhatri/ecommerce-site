const router = require("express").Router();
const {
  login,
  register,
  emailVerify,
} = require("../../controllers/apiControllers/authControllers");

router.post("/login", login);
router.post("/register", register);
router.post("/verify/:token", emailVerify);
// router.get("/verify/:id", (req, res) => res.send("hello"));

module.exports = router;
