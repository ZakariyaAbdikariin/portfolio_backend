"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const profileRoutes_1 = __importDefault(require("./routes/profileRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use("/api/profiles", profileRoutes_1.default);
// Test route
app.get("/", (req, res) => {
    res.send("Portfolio API is running");
});
exports.default = app;
