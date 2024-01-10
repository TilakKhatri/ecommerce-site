const express = require("express");

const apiRoutes = require("./api/index");
const adminRoutes = require("./adminRoutes/adminRoutes");

const router = express.Router();

router.use("/api/v1", apiRoutes);
router.use("/api/admin", adminRoutes);

module.exports = router;
