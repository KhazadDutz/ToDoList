const User = require('../models/UserModel');

const createUser = async (user) => {
  try {
    const { success } = await findUserByName(user.name);
    if (success) {
      throw new Error('User already registered');
    }
    const createdUser = await User.create(user);
    return { success: true, message: 'User created successfully', user: createdUser };
  } catch (error) {
    console.error(`Error creating user: ${error.message}`);
    throw new Error(`Failed to create user: ${error.message}`);
  };
};


const findUserByName = async (name) => {
  try {
    const foundUser = await User.findOne({ where: {name} });
    if (!foundUser) {
      return { 
        success: false,
        message: 'User not found'
      };
    }
    return { 
      success: true, 
      message: 'User found successfully', 
      user: foundUser 
    };
  } catch (error) {
    console.error(`Error finding user: ${error}`);
    throw new Error('Error finding user')
  };
};

module.exports = {
  createUser
}