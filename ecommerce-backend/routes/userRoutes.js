const express = require('express');
const router = express.Router();
const { getUserProfile } = require('../controllers/userController');
const { checkJwt } = require('../middleware/authMiddleware');

// Protected route
router.get('/profile', checkJwt, getUserProfile);

module.exports = router;
