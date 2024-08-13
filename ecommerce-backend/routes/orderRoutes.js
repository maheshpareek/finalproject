const express = require('express'); // Import Express to create a router
const router = express.Router(); // Create a new router instance
const Order = require('../models/order'); // Import the Order model

// Route to create a new order
router.post('/', async (req, res) => {
  try {
    // Create a new Order instance using the data from the request body
    const order = new Order(req.body);
    
    // Save the order to the database
    await order.save();
    
    // Respond with a success message and the created order details
    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    // Log the error to the console for debugging purposes
    console.error('Error placing order:', error);
    
    // Respond with a 500 status and a failure message if an error occurs
    res.status(500).json({ message: 'Failed to place order' });
  }
});

// Export the router to be used in other parts of the application
module.exports = router;
