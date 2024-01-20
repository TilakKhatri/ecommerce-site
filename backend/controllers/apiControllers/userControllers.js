const userModel = require("../../models/userModel");

/**
 * @DESC get,update,detail admin account
 */

const getUserList = async (req, res) => {
  try {
    const user = await userModel.find({}).select("-password");

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User list not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successufully get user list",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
      message: "Error while getting userlist",
    });
  }
};

module.exports = { getUserList };
