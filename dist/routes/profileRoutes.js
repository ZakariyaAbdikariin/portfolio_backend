"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//routes/profileRoutes.ts
const express_1 = require("express");
const profileController_1 = require("../controllers/profileController");
const router = (0, express_1.Router)();
// Get all profiles
router.get("/", profileController_1.getProfiles);
// Get a profile by ID
router.get("/:id", profileController_1.getProfileById);
// Create a new profile
router.post("/", profileController_1.createProfile);
// Update an existing profile by ID
router.put("/:id", profileController_1.updateProfile);
// Delete a profile by ID
router.delete("/:id", profileController_1.deleteProfile);
exports.default = router;
