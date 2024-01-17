const slugify = require("slugify");

const categoryModel = require("../../models/categoryModel");

const getProductsByCategory = async (req, res) => {
  try {
    const products = await categoryModel.find({});
    if (!products) {
      return res.status(404).json({
        message: `Cannot find Products.`,
      });
    }
    res.status(200).json({
      success: true,
      products: [...products],
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Retry again.${error}`,
    });
  }
};

const addCategories = async (req, res) => {
  try {
    const { name, description } = req.body;
    console.log(name,description)
    if (!name || !description) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const slug = slugify(name, { lower: true });
    const category = new categoryModel({ ...req.body, slug: slug });

    try {
      await category.save();
      res.status(201).json({
        success: true,
        message: "Successfully created",
        products,
      });
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error (probably duplicate name or slug)
        res.status(400).json({
          success: false,
          message: "Category with the same name or slug already exists",
          error: error.message,
        });
      } else {
        // Other error
        throw error; // Rethrow the error to be caught by the outer catch block
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Error while creating category.",
      success: false,
      error,
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find({});

    if (categories.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No categories found.",
      });
    }

    res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error. Please try again later.",
      error: error.message,
    });
  }
};

module.exports = {
  getProductsByCategory,
  addCategories,
  getCategories,
};
