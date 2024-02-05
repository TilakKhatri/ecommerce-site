const { hashPassword } = require("../../helpers/auth");
const userModel = require("../../models/userModel");
const generateRandomString = require("../../utils/generateRandomString");

const { sendEmailVerification } = require("../../services/nodemailers");

/**
 * @DESC get,update,detail admin account
 */

const getUserList = async (req, res) => {
  try {
    const user = await userModel.find({}).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User list not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Successufully get user list",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
      message: "Error while getting userlist",
    });
  }
};

const getMerchantList = async () => {
  try {
    const user = await userModel.find({ role: "MERCHANT" }).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Merchant list not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Successufully get merchant list",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
      message: "Error while getting merchantlist",
    });
  }
};

const createMerchant = async () => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: false,
        message: "Required all fields",
      });
    }
    const userExits = await userModel.findOne({ email });
    // console.log(user);
    if (userExits) {
      return res.status(400).json({ error: "user already exists." });
    }
    const hash = await hashPassword(password);
    const newAccount = new User({
      ...req.body,
      isAdmin: true,
      password: hash,
      role: "MERCHANT",
    });

    const randomString = generateRandomString(10);
    newAccount.verificationToken = randomString;
    await newAccount.save();
    // send email for verification
    await sendEmailVerification({
      email: newAccount.email,
      verificationToken: newAccount.verificationToken,
    });
    res.send("Please check your email to verify your account", null, 200);
  } catch (err) {
    return res.status(500).json({
      success: false,
      err,
      message: "Internal Error",
    });
  }
};

const getMerchantById = async () => {
  try {
    const merchantId = req.params.id;
    const merchant = await userModel.findById(merchantId);
    if (merchant !== null) {
      return res.status(200).json({
        data: merchant,
      });
    }
  } catch (err) {
    return res.status(500).json({
      err,
      message: "Internal Error",
    });
  }
};

module.exports = {
  getUserList,
  getMerchantList,
  createMerchant,
  getMerchantById,
};
