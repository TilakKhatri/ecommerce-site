const router = require("express").Router();

const authRoutes = require("./authRoutes");
const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const userRoutes = require("./userRoutes");
// const userRoutes = require('./user');
// const addressRoutes = require('./address');
// const newsletterRoutes = require('./newsletter');
// const categoryRoutes = require('./category');
// const brandRoutes = require('./brand');
// const contactRoutes = require('./contact');
// const merchantRoutes = require('./merchant');
// const cartRoutes = require('./cart');
// const orderRoutes = require('./order');
// const reviewRoutes = require('./review');
// const wishlistRoutes = require('./wishlist');

// auth routes
router.use("/auth", authRoutes);

// product routes
router.use("/product", productRoutes);
// category routes
router.use("/category", categoryRoutes);

/**
 * @DESC user routes
 */

router.use("/user", userRoutes);

/*
// user routes
// address routes
router.use('/address', addressRoutes);

// newsletter routes
router.use('/newsletter', newsletterRoutes);


// category routes
router.use('/category', categoryRoutes);

// brand routes
router.use('/brand', brandRoutes);

// contact routes
router.use('/contact', contactRoutes);

// merchant routes
router.use('/merchant', merchantRoutes);

// cart routes
router.use('/cart', cartRoutes);

// order routes
router.use('/order', orderRoutes);

// Review routes
router.use('/review', reviewRoutes);

// Wishlist routes
router.use('/wishlist', wishlistRoutes);
*/
module.exports = router;
