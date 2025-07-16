const User = require('../models/Users');
const { generateToken, hashPassword, comparePassword } = require('../auth/authService');

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashed = await hashPassword(password);
  const user = new User({ name, email, password: hashed, role });
  await user.save();
  res.status(201).json({ token: generateToken(user) });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await comparePassword(password, user.password))) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }
  res.json({ token: generateToken(user) });
};

module.exports = { register, login };
