"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const profileRoutes_1 = __importDefault(require("./routes/profileRoutes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDef_1 = __importDefault(require("./swaggerDef"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)()); // Enable CORS so frontend (localhost:3000) can access API
app.use(express_1.default.json());
// Routes
app.use("/api/profiles", profileRoutes_1.default);
// Test route
app.get("/", (req, res) => {
    res.send("Portfolio API is running");
});
// Swagger documentation
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDef_1.default));
exports.default = app;
