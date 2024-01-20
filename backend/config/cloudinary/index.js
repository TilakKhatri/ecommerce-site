const cloudinary = require("cloudinary");

//Cloudinary config
const getCloudinaryConfig = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
  return cloudinary;
};

module.exports = getCloudinaryConfig;
