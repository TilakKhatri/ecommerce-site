const Mongoose = require("mongoose");
const { Schema } = Mongoose;
const roles = require("../constants/index");
// User Schema
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      min: 10,
      max: 10,
      required: false,
    },
    fullName: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Please enter a valid password"],
      minlength: [8, "Minimum password length must be 6 characters"],
    },
    isAdmin: {
      type: String,
      default: false,
    },
    role: {
      type: String,
      default: roles.Customer,
      enum: [roles.Customer, roles.Admin, roles.Merchant],
    },
    verified: {
      type: Boolean,
      required: true,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    updated: Date,
    created: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("User", UserSchema);
