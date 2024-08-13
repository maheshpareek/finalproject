const mongoose = require('mongoose'); // Import the mongoose library for MongoDB interactions

// Define an asynchronous function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to the database using the connection string from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    // Log a success message to the console with the host name of the connected database
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If an error occurs during connection, log the error message
    console.error(`Error: ${error.message}`);
    
    // Exit the process with failure code 1 to indicate an unsuccessful connection
    process.exit(1);
  }
};

// Export the connectDB function so it can be used in other parts of the application
module.exports = connectDB;
