// routes/User.js
const express = require("express");
const { registerUser, loginUser, logoutUser, getUserProfile } = require("../controllers/UserController");
const authMiddleware = require("../middleware/authMiddleware"); // Corrected path

const router = express.Router();

// Routes
router.post("/register", registerUser);    // Register a new user
router.post("/login", loginUser);          // Login a user
router.post("/logout", logoutUser);        // Logout a user
router.get("/profile", authMiddleware, getUserProfile); // Protected route to fetch user profile

module.exports = router;
