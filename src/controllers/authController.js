// src/controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel'); // You need to create a user model similar to eventModel

// Register a new user
exports.registerUser = async (req, res) => {
  // User registration logic
};

// Login a user
exports.loginUser = async (req, res) => {
  // User login logic
};

// Middleware to verify JWT
exports.verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};
