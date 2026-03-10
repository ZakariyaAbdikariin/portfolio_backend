import express, { Application } from "express";
import dotenv from "dotenv";
import profileRoutes from "./routes/profileRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swaggerDef";

// Load environment variables from .env
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

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

export default app;
