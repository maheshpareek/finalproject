const mongoose = require('mongoose'); // Import mongoose for MongoDB interactions

// Define the schema for a User
const userSchema = new mongoose.Schema({
  // Username for the user, required field and must be unique
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  
  // Password for the user, required field
  password: { 
    type: String, 
    required: true 
  },
  
  // Email address for the user, required field and must be unique
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
}, { timestamps: true }); // Automatically add createdAt and updatedAt timestamps

// Export the User model for use in other parts of the application
module.exports = mongoose.model('User', userSchema);
