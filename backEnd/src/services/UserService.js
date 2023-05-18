const User = require('../models/UserModel');
const { Op } = require('sequelize');


const createUser = async (user) => {
  try {
    const { success } = await findUser(user);
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

const deleteUser = async(user) => {
  try {
    const deletedUser = await User.destroy({
      where: {
        [Op.and]: [
          {email: user.email},
          {password: user.password}
        ]
      }
    });

    if (!deletedUser) {
      throw new Error('User not found');
    };

    return { success: true, message: 'User deleted successfully' };
  } catch (error) {
    console.error(`Error deleting user: ${error.message}`);
    throw new Error(`Failed to delete user: ${error.message}`);
  }
};

const findUser = async (user) => {
  try {
    const foundUser = await User.findOne({ 
      where: {
        [Op.or]: [{name: user.name}, {email: user.email}]
      }
    });

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
  createUser,
  deleteUser,
  findUser
}