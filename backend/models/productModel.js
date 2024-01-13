const Mongoose = require("mongoose");
const { Schema } = Mongoose;

// Product Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  images: [
    {
      url: {
        type: String,
        required: false,
      },
    },
  ],
  description: {
    type: String,
    trim: true,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("Product", ProductSchema);
