const router = require("express").Router();

const adminAuthController = require("../../controllers/adminControllers/authControllers");

router.post("/login", adminAuthController.login);
router.post("/register", adminAuthController.register);

module.exports = router;
