const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/**
 * @DESC Verify JWT from authorization header Middleware
 */
const checkAuth = (req, res, next) => {
  req.user = null;
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.end("error");
  }
  // Bearer token
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log("verifying");
    if (err) return res.sendStatus(403); //invalid token
    req.user = decoded; //for correct token
    next();
  });
};

/**
 * @DESC Check Role Middleware
 */
const checkRole =
  (roles = []) =>
  async (req, res, next) => {
    if (!req.user) {
      return res.redirect("/login");
    }
    // console.log("usr rle", req.user);
    const userData = await userModel.findById(req.user._id);
    // console.log("userdata", userData);
    if (!roles.includes(userData.role)) return res.end("Unauthorized");

    return next();
  };

module.exports = { checkAuth, checkRole };
