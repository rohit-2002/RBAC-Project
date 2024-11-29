import express from "express";
import cors from "cors";
import { signup, signin } from "./controller/user.js";
import services from "./controller/services.js";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/signup", signup);
app.post("/signin", signin);
app.use("/service", services);

// Connect to MongoDB and start server
connectDB();

app.listen(port, () => {
  console.log(`Server Running on Port: http://localhost:${port}`);
});
