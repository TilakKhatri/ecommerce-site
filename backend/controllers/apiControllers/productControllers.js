const slugify = require("slugify");
const getCloudinaryConfig = require("../../config/cloudinary/index");
const ProductModel = require("../../models/productModel");

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
    return res.status(200).json({
      success: true,
      products: [...products],
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Retry again.${error}`,
    });
  }
};

const getProductBySlug = async (req, res) => {
  try {
    const product = await ProductModel.findOne({ slug: req.params.slug });
    // console.log("query", product);
    if (product === null) return new Error("Not found");
    return res.status(200).send({
      success: true,
      message: "Product Found successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
      message: "Error while getting single product",
    });
  }
};

const addProduct = async (req, res, next) => {
  try {
    const { name, description, quantity, price, category } = req.body;
    console.log("files", req.files[0].path);
    const slug = slugify(name, { lower: true });
    // console.log("slug", slug);
    // const file = dataUri(req).content;
    const cloudinary = getCloudinaryConfig();

    const result = await cloudinary.uploader.upload(req.files[0].path, {
      resource_type: "image",
    });
    req.body.image = result.secure_url;
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

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    // console.error("Error while creating product:", error);
    return res.status(500).json({
      success: false,
      message: "Error while creating product.",
      error: error.message,
    });
  }
};

const editProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const productUpdateResult = await productModel.findByIdAndUpdate(
      { productId },
      req.body,
      {
        new: true,
      }
    );

    if (productUpdateResult === null) {
      // Product not found or no changes made
      return {
        success: false,
        message: "Product not found or no changes made",
      };
    }
  } catch (error) {
    console.error("Error updating product and category reference:", error);
    return { success: false, message: "Internal Server Error" };
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    // Step 1: Remove the product from the ProductModel
    const productDeletionResult = await productModel.findByIdAndDelete(
      { productId },
      { new: true }
    );

    if (productDeletionResult.deletedCount === 0) {
      // Product not found
      return { success: false, message: "Product not found" };
    }

    // Remove product from category
    const categoryUpdateResult = await categoryModel.findByIdAndUpdate(
      categoryId,
      { $pull: { products: productId } }
    );

    if (categoryUpdateResult === null) {
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

const searchProduct = async (req, res) => {
  try {
    if (!req.query.search) {
      return res.json({
        message: "please enter search query",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: `messages ${error.message}`,
    });
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
