const router = require("express").Router();
const userControllers = require("../../controllers/apiControllers/userControllers");

router.get("/list", userControllers.getUserList);

module.exports = router;
