const User = require('../models/UserModel');
const { validateUser } = require('../helpers/UserHelpers');

const createUser = async (user) => {
  try {
    const isValidUser = validateUser(user);
    if (!isValidUser) {
      throw new Error('Invalid user');
    }

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