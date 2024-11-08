const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure that username is unique
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4, // Minimum length for password
  },
});

// Pre-save hook to hash the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
