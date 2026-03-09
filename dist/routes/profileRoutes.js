"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profileController_1 = require("../controllers/profileController");
const router = (0, express_1.Router)();
// Create a new profile
router.post("/", profileController_1.createProfile);
// Update an existing profile by ID
router.put("/:id", profileController_1.updateProfile); // ✅ fixed
exports.default = router;
