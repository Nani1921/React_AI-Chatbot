const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // Add this line
const connectDB = require("./config/db");
require("dotenv").config();

// Initialize Express app
const app = express();

app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

connectDB();

app.get("/", (req, res) => {
  res.send("<center><h1>Welcome to DDD University</h1></center>");
});

const userRoutes = require("./routes/User");
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
