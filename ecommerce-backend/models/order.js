const mongoose = require('mongoose'); // Import mongoose for MongoDB interactions

// Define the schema for an Order
const orderSchema = new mongoose.Schema({
  // Customer's name, required field
  customerName: { type: String, required: true },
  
  // Customer's email, required field
  customerEmail: { type: String, required: true },
  
  // Shipping address for the order, required field
  shippingAddress: { type: String, required: true },
  
  // Array of items in the order
  items: [
    {
      // Unique identifier for each item, using MongoDB ObjectId type
      _id: mongoose.Schema.Types.ObjectId,
      
      // Name of the item
      name: String,
      
      // Price of the item
      price: Number,
      
      // Quantity of the item ordered
      quantity: Number,
    },
  ],
  
  // Total amount for the order, required field
  totalAmount: { type: Number, required: true },
}, { timestamps: true }); // Automatically add createdAt and updatedAt timestamps

// Create a Mongoose model named 'Order' using the orderSchema
const Order = mongoose.model('Order', orderSchema);

// Export the Order model for use in other parts of the application
module.exports = Order;
