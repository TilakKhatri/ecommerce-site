const slugify = require("slugify");

const ProductModel = require("../../models/productModel");
const { default: mongoose } = require("mongoose");
const categoryModel = require("../../models/categoryModel");
const productModel = require("../../models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
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

const getProductBySlug = async (req, res) => {
  try {
    const product = await ProductModel.findOne({ slug: req.params.slug });
    if (!product) return new Error();
    res.status(200).send({
      success: true,
      message: "Product Found successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: "Error while getting single product",
    });
  }
};

const searchProduct = async (req, res) => {};

const addProduct = async (req, res) => {
  try {
    const { name, description, quantity, price, category } = req.body;

    if (!name || !description || !quantity || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const slug = slugify(name, { lower: true });
    console.log("slug", slug);

    const product = new ProductModel({ ...req.body, slug: slug });
    await product.save();
    console.log(product);

    const categoryId = await categoryModel.findOne({ name: category }, "_id");
    // console.log(categoryId);
    if (!categoryId) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    await categoryModel.findByIdAndUpdate(categoryId, {
      $push: { products: product._id },
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Error while creating product:", error);
    res.status(500).json({
      success: false,
      message: "Error while creating product.",
      error: error.message,
    });
  }
};

const editProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProductData = req.body;

    const productUpdateResult = await productModel.updateOne(
      { _id: productId },
      { $set: updatedProductData }
    );

    if (productUpdateResult.nModified === 0) {
      // Product not found or no changes made
      return {
        success: false,
        message: "Product not found or no changes made",
      };
    }

    // Step 2: Update the product reference in the CategoryModel
    const categoryUpdateResult = await categoryModel.updateMany(
      { "products._id": productId },
      { $set: { "products.$": updatedProductData } }
    );

    if (categoryUpdateResult.nModified === 0) {
      // Product not found in any category or no changes made
      return {
        success: false,
        message: "Product not found in any category or no changes made",
      };
    }

    return {
      success: true,
      message: "Product and category references updated successfully",
    };
  } catch (error) {
    console.error("Error updating product and category reference:", error);
    return { success: false, message: "Internal Server Error" };
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    // Step 1: Remove the product from the ProductModel
    const productDeletionResult = await productModel.deleteOne({
      _id: productId,
    });

    if (productDeletionResult.deletedCount === 0) {
      // Product not found
      return { success: false, message: "Product not found" };
    }

    // Step 2: Remove the product reference from the CategoryModel
    const categoryUpdateResult = await categoryModel.updateMany(
      { products: productId },
      { $pull: { products: productId } }
    );

    if (categoryUpdateResult.nModified === 0) {
      // Product not found in any category
      return { success: false, message: "Product not found in any category" };
    }

    return { success: true, message: "Product has been removed successfully" };
  } catch (error) {
    console.error("Error removing product and category reference:", error);
    return {
      success: false,
      message: "Internal Server Error",
      error: error.message,
    };
  }
};

module.exports = {
  getProducts,
  getProductBySlug,
  searchProduct,
  addProduct,
  editProduct,
  deleteProduct,
};
