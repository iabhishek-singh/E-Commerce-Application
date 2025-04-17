// Import Express, the User model, and JWT for token generation
import express from 'express';
import User from "../Model/user.model.js";
import jwt from 'jsonwebtoken';

// Create a new router instance
const router = express.Router();

// User Registration route (POST /register)
router.post('/register', async (req, res) => {
  // Extract email and password from the request body
  const { email, password } = req.body;

  try {
    // Check if a user with the provided email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user document with the provided data
    const user = new User({ email, password });
    await user.save();

    // Generate a JWT token with the user's ID (expires in 1 hour)
    const token = jwt.sign({ userId: user._id }, 'jwtSecret', { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (err) {
     // If an error occurs, return a 500 status
    res.status(500).json({ message: 'Server error' });
  }
});

// User Login (POST /login)
router.post('/login', async (req, res) => {
  // Extract email and password from the request body
  const { email, password } = req.body;

  try {
     // Look up the user by email
    const user = await User.findOne({ email });
    // If user doesn't exist or password doesn't match, return an error
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

     // Generate a JWT token for the logged-in user
    const token = jwt.sign({ userId: user._id }, 'jwtSecret', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    // If an error occurs, return a 500 status
    res.status(500).json({ message: 'Server error' });
  }
});

// Export the router so it can be used in server.js
export default router;
