const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { hashPassword } = require("../../helpers/auth");
const userModel = require("../../models/userModel");
const { sendEmailVerification } = require("../../services/nodemailers");

dotenv.config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ message: "You must enter an email address." });
    }

    if (!password) {
      return res.status(400).json({ message: "You must enter a password." });
    }

    const user = await userModel.findOne({ email });
    // console.log("user", user);
    if (!user) {
      return res
        .status(400)
        .send({ message: "No user found for this email address." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Password Incorrect",
      });
    }
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
      expiresIn: "90d",
    });
    if (!token) {
      throw new Error();
    }

    res.status(200).json({
      success: true,
      token: `Bearer ${token}`,
      user: {
        fullname: user.fullName,
        email: user.email,
        phonenumber: user.phoneNumber,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({
      // error: "Your request could not be processed. Please try again.",
      message: error,
    });
  }
};

const register = async (req, res) => {
  try {
    const { fullname, email, password, phonenumber } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ message: "You must enter an email address." });
    }

    if (!fullname) {
      return res
        .status(400)
        .json({ message: "You must enter your full name." });
    }

    if (!password) {
      return res.status(400).json({ message: "You must enter a password." });
    }
    const userExits = await User.findOne({ email });
    if (userExits) {
      return res.json({ message: "Email is already taken" });
    }
    const user = await User.create({
      fullName: fullname,
      email,
      password: await hashPassword(password),
      phoneNumber: phonenumber,
    });

    const verificationToken = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    // console.log(verificationToken);
    // const url = `http://localhost:5000/api/v1/auth/verify/${verificationToken}`;
    // transporter.sendMail({
    //   to: email,
    //   subject: "Verify Account",
    //   html: `Click <a href = '${url}'>here</a> to confirm your email.`,
    // });

    // res.status(201).json({
    //   message: `Sent a verification email to ${email}`,
    // });
    res.status(200).json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        phonenumber: user.phoneNumber,
        role: user.role,
      },
      verificationToken,
    });
  } catch (error) {
    res.status(400).json({
      message: "Your request could not be processed. Please try again.",
    });
  }
};

const emailVerify = async (req, res) => {
  const { token } = req.params;

  // console.log("token from emailverify: ", token);
  try {
    console.log("token from emailverify: ", token);

    const user = await User.findOne({ verificationToken: token });
    console.log("user", user);
    if (!user) {
      return res.status(400).json({ message: "Token Expired" });
    }

    user.verified = true;
    user.verificationToken = undefined;
    await user.save();
    res.status(200).json({
      success: true,
      message: "Account verified",
    });
  } catch (error) {
    res.status(503).json({
      success: false,
      message: "verification failed.",
    });
  }
};

module.exports = { login, register, emailVerify };
