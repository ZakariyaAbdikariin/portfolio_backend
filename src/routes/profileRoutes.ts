import { Router } from "express";
import {
  createProfile,
  updateProfile,
  getProfiles,
  deleteProfile,
} from "../controllers/profileController";

const router = Router();

// Create a new profile
router.post("/", createProfile);

// Get all profiles
router.get("/", getProfiles);

// Update an existing profile by ID
router.put("/:id", updateProfile);

// Delete a profile by ID
router.delete("/:id", deleteProfile);

export default router;
