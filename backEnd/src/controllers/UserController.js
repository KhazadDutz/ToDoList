const User = require('../services/UserService');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const newUser = await User.createUser({ name, email, password });
    console.log(newUser, "é nois que voa bruxao");
    
    return res.status(201).json({ 
      success: true,
      message: 'User created successfully',
      data: newUser
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { email, password } = req.body

    await User.deleteUser({email, password});

    return res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { email, password, dataToUpdate } = req.body;

    await User.updateUser({ email, password, dataToUpdate });

    return res.status(200).json({ 
      success: true,
      message: 'User updated successfully'
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createUser,
  deleteUser,
  updateUser
}