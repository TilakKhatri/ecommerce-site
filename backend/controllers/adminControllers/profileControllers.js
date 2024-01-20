const userModel = require("../../models/userModel");

/**
 * @DESC get,update,detail admin account
 */

const getProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) return new Error("error");

    const user = await userModel
      .findById(userId)
      .select([
        "-password",
        "-verificationToken",
        "-resetPasswordToken",
        "-resetPasswordExpires",
      ]);

    if (!user) {
      res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successuflly get user",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
      message: "Error while getting profile details",
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedProfileData = req.body;

    const profileUpdateResult = await userModel.updateOne(
      { _id: userId },
      { $set: updatedProfileData }
    );

    if (profileUpdateResult.nModified === 0) {
      // Product not found or no changes made
      return {
        success: false,
        message: "User not found or no changes made",
      };
    }
    res.status(201).json({
      success: true,
      message: "Successfully updated profile",
      profileUpdateResult,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
      message: "Error while getting profile details",
    });
  }
};

module.exports = { getProfile, updateProfile };
