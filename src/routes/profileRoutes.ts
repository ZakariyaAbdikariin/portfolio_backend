import { Router } from "express";
import { createProfile, updateProfile } from "../controllers/profileController";

const router = Router();

// Create a new profile
router.post("/", createProfile);

// Update an existing profile by ID
router.put("/:id", updateProfile); // ✅ fixed

export default router;
