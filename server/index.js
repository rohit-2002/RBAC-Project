import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import cors from "cors";
import { signup, signin } from "./controller/user.js";
import services from "./controller/services.js";

// Load environment variables
dotenv.config();

const app = express();

// Use environment variable for PORT or fallback to 3000 for local development
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Backend is working properly!");
});

app.post("/signup", signup);
app.post("/signin", signin);
app.use("/service", services);

// Connect to MongoDB
connectDB();

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
