// controllers/UserController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new user
const registerUser = async (req, res) => {
  const { username, email, password } = req.body; // Use username here, not name

  try {
    // Check if a user with the given username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: "User with this username or email already exists" });
    }

    // Create and save the new user
    const newUser = new User({ username, email, password });

    // Save the user to the database
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};


const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET, // Ensure you have a JWT_SECRET in your .env file
      { expiresIn: "1h" } // Token expiration time
    );

    // Set the token in an HTTP-only cookie
    res.cookie("token", token, { httpOnly: true });

    return res.status(200).json({
      message: "Login successful",
      token, // Return token for authorization in frontend
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Logout
const logoutUser = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.status(200).json({ message: "Logout successful" });
};



// Get user profile (protected route)
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password"); // Exclude password from the profile
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser, logoutUser, getUserProfile };
