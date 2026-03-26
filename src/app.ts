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

// Enable CORS for both local dev and production frontend
const allowedOrigins = [
  "https://sakariyeabdikariin.co.uk", // production
  "http://localhost:3000", // local dev
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// Root API route
app.get("/api", (req: Request, res: Response) => {
  res.json({
    message: "API is running 🚀",
    endpoints: {
      profiles: "/api/profiles",
      docs: "/api-docs",
    },
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
