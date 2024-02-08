const express = require("express");
const colors = require("colors");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const morgan = require("morgan");
const multer = require("multer");
const bodyParser = require("body-parser");

const setupDB = require("./config/database/db");
const Routes = require("./routes/index");
const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

//  middlewares
// Custom middleware to log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: true,
  })
);
app.use(cors());
const upload = require("./helpers/multer");
// database setup
setupDB();
app.post("/uploads", upload.array("images"), async (req, res, next) => {
  // check whether r,nexeq.file contians the file
  // if not multer is failed to parse so notify the client
  console.log(req.body);
  console.log(req.files);
  console.log(req.file);
  // successfull completion
  res.status(201).send("Files uploaded successfully");
});
// routes
app.use("", Routes);

app.listen(port, () => {
  console.log(
    colors.blue(
      `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
    )
  );
});
