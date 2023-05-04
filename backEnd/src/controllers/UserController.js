const User = require('../models/UserModel');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({ name, email, password });

    res.status(201).json({ success: true, message: 'User created successfully', data: newUser });
  } catch (error) {
    console.error(`Error creating user: ${error}`)
    res.status(500).json({ success: false, error: 'Failed to create user' });
  }
};

module.exports = {
  createUser
}