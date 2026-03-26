//routes/profileRoutes.ts
import { Router } from "express";
import {
  createProfile,
  updateProfile,
  getProfiles,
  deleteProfile,
  getProfileById,
} from "../controllers/profileController";

const router = Router();

// Get all profiles
router.get("/", getProfiles);

// Get a profile by ID
router.get("/:id", getProfileById);

// Create a new profile
router.post("/", createProfile);

// Update an existing profile by ID
router.put("/:id", updateProfile);

// Delete a profile by ID
router.delete("/:id", deleteProfile);

export default router;