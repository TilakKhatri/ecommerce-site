const router = require("express").Router();

const adminAuthController = require("../../controllers/adminControllers/authControllers");
const profileAuthController = require("../../controllers/adminControllers/profileControllers");

/**
 * @DESC login and registration routes for admin
 */
router.post("/login", adminAuthController.login);
router.post("/register", adminAuthController.register);

/**
 * @DESC user profile routes
 */

router.get("/profile/:id", profileAuthController.getProfile);
router.put("/profile/:id", profileAuthController.updateProfile);

module.exports = router;
