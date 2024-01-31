const multer = require("multer");
const DataUri = require("datauri");
const path = require("path");
console.log("path", path);
/**
 * @DESC uploads directory for the storage configuration of the files received by multer
 */

const fileStorageDirectory = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const fileFilterFunction = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg"
  )
    cb(null, true);
  else cb("Please upload file format: jpeg,jpg,png", false);
};

const upload = multer({
  storage: storage,
  // limits: { fileSize: 29999 },
  fileFilter: fileFilterFunction,
});

module.exports = upload;
