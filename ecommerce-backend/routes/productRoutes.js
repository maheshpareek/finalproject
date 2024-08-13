const express = require('express'); // Import Express to create a router
const router = express.Router(); // Create a new router instance
const {
  getProducts,       // Controller function to get all products
  getProductById,    // Controller function to get a single product by ID
  createProduct,     // Controller function to create a new product
  updateProduct,     // Controller function to update an existing product
  deleteProduct,     // Controller function to delete a product
} = require('../controllers/productController'); // Import the product controller functions

// Public routes
router.route('/').get(getProducts); // Route to get all products (accessible to everyone)
router.route('/:id').get(getProductById); // Route to get a product by ID (accessible to everyone)

// Admin routes
router.route('/').post(createProduct); // Route to create a new product (admin access required)
router.route('/:id').put(updateProduct).delete(deleteProduct); // Routes to update and delete a product by ID (admin access required)

// Export the router to be used in other parts of the application
module.exports = router;
