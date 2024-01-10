const express = require("express");
const colors = require("colors");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");

const setupDB = require("./config/database/db");
const Routes = require("./routes/index");

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

//  middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: true,
  })
);
app.use(cors());

// database setup
setupDB();
// routes
app.use("", Routes);

app.listen(port, () => {
  console.log(
    colors.blue(
      `Listening on port ${port}. Visit http://localhost:${port}/ in your browser.`
    )
  );
});
