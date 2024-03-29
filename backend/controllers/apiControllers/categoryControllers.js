const slugify = require("slugify");

const getCloudinaryConfig = require("../../config/cloudinary/index");

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
    if (!name || !description || !req.file) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    // check for file

    // const file = dataUri(req).content;
    const cloudinary = getCloudinaryConfig();

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });

    req.body.image = result.secure_url;

    const slug = slugify(name, { lower: true });
    const category = new categoryModel({
      ...req.body,
      slug: slug,
    });

    // check if any product is available for this category

    await category.save();
    res.status(201).json({
      success: true,
      message: "Successfully created",
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
      res.status(500).json({
        success: false,
        message: "Internal error",
        error: error.message,
      });
    }
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
    // console.log(category);
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
    // console.log(categoryUpdateResult, productUpdateResult);
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

const searchCategory = async (req, res) => {
  try {
    console.log("search", req.query.search);
    const search = req.query.search;
    const categories = await categoryModel.find({
      name: { $regex: `${search}`, $options: "i" },
    });
    console.log(categories);
    return res.json(categories);
  } catch (error) {
    return { success: false, message: "Internal Server Error" };
  }
};

module.exports = {
  getProductsByCategory,
  addCategories,
  getCategories,
  editCategory,
  searchCategory,
};
