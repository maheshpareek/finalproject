const Product = require('../models/product'); // Import the Product model
const upload = require('../middleware/uploadMiddleware'); // Import the upload middleware for handling file uploads

// @desc    Get all products
// @route   GET /api/products
// @access  Public
// This function handles the retrieval of all products from the database
const getProducts = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find({});
    // Send the products as a JSON response
    res.json(products);
  } catch (error) {
    // Handle any errors that occur during the operation
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get a single product by ID
// @route   GET /api/products/:id
// @access  Public
// This function handles retrieving a specific product by its ID
const getProductById = async (req, res) => {
  try {
    // Fetch the product by ID from the database
    const product = await Product.findById(req.params.id);
    if (product) {
      // Send the product data as a JSON response if found
      res.json(product);
    } else {
      // Send a 404 response if the product is not found
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    // Handle any errors that occur during the operation
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a new product (Admin)
// @route   POST /api/products
// @access  Private/Admin
// This function handles the creation of a new product
const createProduct = async (req, res) => {
  // Destructure product details from the request body
  const { name, description, pricing, category, stock } = req.body;
  // Get the image path from the uploaded file, if available
  const image = req.file ? req.file.path : '';

  try {
    // Create a new Product instance with the provided data
    const product = new Product({
      name,
      description,
      pricing,
      image,
      category,
      stock,
    });

    // Save the product to the database
    const createdProduct = await product.save();
    // Send a 201 status with the created product as JSON
    res.status(201).json(createdProduct);
  } catch (error) {
    // Handle any errors that occur during the operation
    res.status(400).json({ message: 'Invalid product data' });
  }
};

// @desc    Update a product (Admin)
// @route   PUT /api/products/:id
// @access  Private/Admin
// This function handles updating an existing product
const updateProduct = async (req, res) => {
  // Destructure updated product details from the request body
  const { name, description, pricing, category, stock } = req.body;
  // Get the image path from the uploaded file, if available
  const image = req.file ? req.file.path : '';

  try {
    // Find the product by ID in the database
    const product = await Product.findById(req.params.id);

    if (product) {
      // Update product fields with new data
      product.name = name;
      product.description = description;
      product.pricing = pricing;
      // Use the new image if uploaded, otherwise keep the existing one
      product.image = image || product.image;
      product.category = category;
      product.stock = stock;

      // Save the updated product to the database
      const updatedProduct = await product.save();
      // Send the updated product as a JSON response
      res.json(updatedProduct);
    } else {
      // Send a 404 response if the product is not found
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    // Handle any errors that occur during the operation
    res.status(400).json({ message: 'Invalid product data' });
  }
};

// @desc    Delete a product (Admin)
// @route   DELETE /api/products/:id
// @access  Private/Admin
// This function handles deleting a product by its ID
const deleteProduct = async (req, res) => {
  try {
    // Find the product by ID in the database
    const product = await Product.findById(req.params.id);

    if (product) {
      // Delete the product from the database
      await Product.findByIdAndDelete(req.params.id);
      // Send a success message
      res.json({ message: 'Product removed' });
    } else {
      // Send a 404 response if the product is not found
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    // Handle any errors that occur during the operation
    console.error(`Error occurred while deleting product: ${error.message}`);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Export all the functions to be used in other parts of the application
module.exports = {
  getProducts,
  getProductById,
  createProduct: [upload.single('image'), createProduct], // Apply the upload middleware for image handling
  updateProduct: [upload.single('image'), updateProduct], // Apply the upload middleware for image handling
  deleteProduct,
};
