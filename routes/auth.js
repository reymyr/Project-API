const db = require("../models");
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// POST /api/auth/register
router.route('/register').post(async (req, res) => {
  const { username, password } = req.body;
  const user = await db.User.findOne({ where: { username } });

  if (user) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hash = await bcrypt.hash(password, 10);
  const newUser = await db.User.create({ username, password: hash });
  const token = jwt.sign({ id: newUser.id }, process.env.SECRET_KEY);
  return res.status(201).json({ token });
});

// POST /api/auth/login
router.route('/login').post(async (req, res) => {
  const { username, password } = req.body;
  const user = await db.User.findOne({ where: { username } });

  if (!user) {
    return res.status(400).json({ message: 'User does not exist' });
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
  return res.status(200).json({ token });
});

module.exports = router;
