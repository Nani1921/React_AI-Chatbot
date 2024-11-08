const express = require("express");
const { registerUser, loginUser, logoutUser, getUserProfile } = require("../controllers/UserController");
const authMiddleware = require("../middleware/authMiddleware"); // Corrected path

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", authMiddleware, getUserProfile); // Protected route to fetch user profile

module.exports = router;
