const cloudinary = require("cloudinary");

//Cloudinary config
const getCloudinaryConfig = () => {
  cloudinary.config({
<<<<<<< Updated upstream
    cloud_name: process.env.CLOUD_NAME,
=======
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
>>>>>>> Stashed changes
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  return cloudinary;
};

module.exports = getCloudinaryConfig;
