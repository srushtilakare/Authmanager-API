const User = require('../models/Users');

const getUserById = async (id) => {
  return await User.findById(id).select('-password');
};

module.exports = { getUserById };
