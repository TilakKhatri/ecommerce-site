const slugify = require("slugify");

const categoryModel = require("../../models/categoryModel");
const productModel = require("../../models/productModel");

const getProductsByCategory = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    if (!category) {
      return res.status(404).json({
        message: `Cannot find category.`,
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully get",
      category,
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
    console.log(name, description);
    if (!name || !description) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const slug = slugify(name, { lower: true });
    const category = new categoryModel({ ...req.body, slug: slug });

    try {
      // check if any product is available for this category

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
    const categories = await categoryModel.find({}).select("-products");

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

const editCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const category = await categoryModel.findById(categoryId);
    console.log(category);
    if (!category) return new Error();
    const categoryUpdateResult = await categoryModel.updateOne(
      { _id: categoryId },
      { $set: updatedCategoryData }
    );
    const productUpdateResult = await productModel.updateMany(
      {
        category: category.name,
      },
      {
        $set: {
          category: categoryUpdateResult.name,
        },
      }
    );
    console.log(categoryUpdateResult, productUpdateResult);
    return res.status(200).json({
      success: true,
      message: "Category updated successfully",
      productUpdateResult,
      categoryUpdateResult,
    });
  } catch (error) {
    return { success: false, message: "Internal Server Error" };
  }
};
sdsasad

module.exports = {
  getProductsByCategory,
  addCategories,
  getCategories,
  editCategory,
};
