const mongoose = require('mongoose'); // Import mongoose for MongoDB interactions

// Define the schema for a Product
const productSchema = new mongoose.Schema({
  // Name of the product, required field
  name: {
    type: String,
    required: true,
  },
  
  // Description of the product, required field
  description: {
    type: String,
    required: true,
  },
  
  // Pricing of the product, required field
  pricing: {
    type: Number,
    required: true,
  },
  
  // URL or path to the product image, optional field with a default value
  image: {
    type: String,
    default: '', // Default value is an empty string in case no image is provided
  },
  
  // Category to which the product belongs, required field
  category: {
    type: String,
    required: true,
  },
  
  // Number of items available in stock, required field
  stock: {
    type: Number,
    required: true,
  },
}, { timestamps: true }); // Automatically add createdAt and updatedAt timestamps

// Create a Mongoose model named 'Product' using the productSchema
const Product = mongoose.model('Product', productSchema);

// Export the Product model for use in other parts of the application
module.exports = Product;
