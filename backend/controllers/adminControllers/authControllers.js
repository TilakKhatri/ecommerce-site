const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../../models/userModel");

const { hashPassword, comparePassword } = require("../../helpers/auth");
const { sendEmailVerification } = require("../../services/nodemailers");
const generateRandomString = require("../../utils/generateRandomString");

dotenv.config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email) {
      return res
        .status(400)
        .json({ error: "You must enter an email address." });
    }

    if (!password) {
      return res.status(400).json({ error: "You must enter a password." });
    }

    const user = await User.findOne({ email });
    // console.log(user);
    if (!user) {
      return res
        .status(400)
        .json({ error: "No user found for this email address." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        error: "Password Incorrect",
      });
    }
    // console.log(user);
    if (user.verified === false) {
      await sendEmailVerification({
        email: user.email,
        verificationToken: user.verificationToken,
      });
      return res.status(403).json({
        message:
          "Email is not verified yet. Please check your email for verification ",
      });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    if (!token) {
      throw new Error();
    }
    res.cookie("cookie", token);
    res.status(200).json({
      success: true,
      message: "Your account is created.",
      token: `Bearer ${token}`,
      user: {
        fullname: user.fullName,
        email: user.email,
        phonenumber: user.phoneNumber,
        role: user.role,
        isAdmin: user.isAdmin,
      },
    });
    // return res.redirect("/dashboard");
  } catch (error) {
    res.status(400).json({
      message: "Your request could not be processed. Please try again.",
    });
  }
};

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ error: "You must enter an email address." });
    }
    if (!password) {
      return res.status(400).json({ error: "You must enter a password." });
    }
    const userExits = await User.findOne({ email });
    if (userExits) {
      return res.json({ error: "Email is already taken" });
    }
    // const user = await User.create({
    //   email,
    //   password: await hashPassword(password),
    //   isAdmin: true,
    //   role: "ADMIN",
    // });
    const hash = await hashPassword(password);
    const newAccount = new User({
      ...req.body,
      isAdmin: true,
      password: hash,
      role: "ADMIN",
    });

    // const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    //   expiresIn: "30d",
    // });
    const randomString = generateRandomString(10);
    const verificationToken = randomString;
    newAccount.verificationToken = verificationToken;

    await newAccount.save();
    await sendEmailVerification({
      email: newAccount.email,
      verificationToken: newAccount.verificationToken,
    });
    res.send("Please check your email to verify your account", null, 200);
    // res.status(200).json({
    //   success: true,
    //   message: "Account created.",
    //   user: {
    //     fullname: newAccount.fullName,
    //     email: newAccount.email,
    //     phonenumber: newAccount.phoneNumber,
    //     role: newAccount.role,
    //     isAdmin: newAccount.isAdmin,
    //   },
    // });
  } catch (error) {
    console.log("error: ", error);
    res.send("Something went wrong");
  }
};

const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status()
    .json({
      message: "You are successfully logout.",
    });
};

module.exports = { login, register, logout };
