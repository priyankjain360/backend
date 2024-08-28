const User = require('../models/userModel');

const createUser = async (name) => {
  const user = new User({ name });
  return await user.save();
};

const getUserById = async (userId) => {
  return await User.findById(userId);
};

const updateUser = async (userId, updateData) => {
  return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
};
