const router = require("express").Router();
const userControllers = require("../../controllers/apiControllers/userControllers");

router.get("/list", userControllers.getUserList);
router.get("/merchant", userControllers.getMerchantList);
router.post("/merchant/new", userControllers.createMerchant);
router.get("/merchant/:id", userControllers.getMerchantById);

module.exports = router;
