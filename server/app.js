const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
require("dotenv").config();

// Initialize Express app
const app = express();

// Configure CORS
const corsOptions = {
  origin: "https://react-ai-chatbot-cvue.vercel.app", // Allow requests from your frontend (update if necessary)
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Connect to database
connectDB();

// Routes
const userRoutes = require("./routes/User");
app.use("/user", userRoutes);

// Basic health check route
app.get("/", (req, res) => {
  res.send("<center><h1>Now Server is Online!</h1></center>");
});

// Export the server for Vercel (serverless)
module.exports = app;
