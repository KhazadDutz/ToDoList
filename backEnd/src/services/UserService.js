const User = require('../models/UserModel');

const createUser = async (user) => {
  try {
    const createdUser = await User.create(user);

    return { success: true, message: 'User created successfully', user: createdUser };
  } catch (error) {
    console.error(`Error creating user: ${error}`);
    return { success: false, error: 'Failed to create user' };
  }
};


module.exports = {
  createUser
}