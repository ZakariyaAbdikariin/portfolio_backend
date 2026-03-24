// src/app.ts

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
app.use(express.json());

// Enable CORS only for your frontend
app.use(cors({
  origin: "https://sakariyeabdikariin.co.uk", // your frontend domain
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

// Root API route
app.get("/api", (req: Request, res: Response) => {
  res.json({
    message: "API is running 🚀",
    endpoints: {
      profiles: "/api/profiles",
      docs: "/api-docs"
    }
  });
});

// Mount profile routes under /api/profiles
app.use("/api/profiles", profileRoutes);

// Root route for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Portfolio API is running");
});

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
