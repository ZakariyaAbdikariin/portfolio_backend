import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import profileRoutes from "./routes/profileRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swaggerDef";

// Load environment variables
dotenv.config();

const app: Application = express();

// Middleware
app.use(cors()); // Enable CORS so frontend (localhost:3000) can access API
app.use(express.json());

// Routes
app.use("/api/profiles", profileRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Portfolio API is running");
});

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
