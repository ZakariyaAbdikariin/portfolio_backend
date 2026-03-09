import express, { Application } from "express";
import dotenv from "dotenv";
import profileRoutes from "./routes/profileRoutes";

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/profiles", profileRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio API is running");
});

export default app;
