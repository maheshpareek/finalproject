const multer = require('multer'); // Import multer for handling file uploads
const path = require('path'); // Import path module for handling file and directory paths

// Configure Multer storage options
const storage = multer.diskStorage({
  // Specify the destination directory for uploaded files
  destination: function (req, file, cb) {
    cb(null, '../uploads/'); // Save uploaded files in the 'uploads' directory
  },
  // Specify the filename for uploaded files
  filename: function (req, file, cb) {
    // Generate a unique filename by appending the current date to the original file extension
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

// Define a file filter to limit acceptable file types
const fileFilter = (req, file, cb) => {
  // Accept only image files with MIME types 'image/jpeg' or 'image/png'
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true); // Accept the file
  } else {
    // Reject files with other MIME types and return an error
    cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
  }
};

// Initialize the multer middleware with the defined storage and file filter options
const upload = multer({
  storage: storage, // Use the custom storage configuration
  fileFilter: fileFilter // Use the custom file filter configuration
});

// Export the configured multer instance for use in other parts of the application
module.exports = upload;
