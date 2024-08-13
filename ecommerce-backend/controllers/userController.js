const getUserProfile = async (req, res) => {
    try {
      res.json({
        user: req.user,
        message: 'Authenticated successfully',
      });
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  module.exports = {
    getUserProfile,
  };
  