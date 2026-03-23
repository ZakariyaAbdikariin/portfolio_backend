import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import profileRoutes from "./routes/profileRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swaggerDef";

// Load environment variables
dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// API root route
app.get("/api", (req: Request, res: Response) => {
  res.json({
    message: "API is running 🚀",
    endpoints: {
      profiles: "/api/profiles",
      docs: "/api-docs"
    }
  });
});

// Routes
app.use("/api/profiles", profileRoutes);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Portfolio API is running");
});

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
