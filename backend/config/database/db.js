const colors = require("colors");
require("dotenv").config();

const mongoose = require("mongoose");

const setupDB = async () => {
  // console.log('I called',process.env.LOCAL_MONGO_URI)
  try {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log(colors.green("Connected to MongoDB")))
      .catch((err) => console.error(colors.red("Connection error"), err));
  } catch (error) {
    console.log("DB url error", error);
  }
};

module.exports = setupDB;
