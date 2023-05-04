const User = require('../services/UserService');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const newUser = await User.createUser({ name, email, password });
    
    return res.status(201).json({ 
      success: true,
      message: 'User created successfully',
      data: newUser
    });
  } catch (error) {
    console.error(error.message)
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createUser
}