//profileController.ts

import { Request, Response } from "express";
import Profile from "../models/Profile"; // default import

// Get all profiles
export const getProfiles = async (req: Request, res: Response) => {
  try {
    const profiles = await Profile.findAll();
    res.json(profiles);
  } catch (error) {
    console.error("Error fetching profiles:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get a profile by ID
export const getProfileById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id); // ✅ convert to number
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const profile = await Profile.findByPk(id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create a new profile
export const createProfile = async (req: Request, res: Response) => {
  try {
    const newProfile = await Profile.create(req.body);
    res.status(201).json(newProfile);
  } catch (error) {
    console.error("Error creating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update an existing profile by ID
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id); // ✅ convert to number
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const profile = await Profile.findByPk(id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    await profile.update(req.body);
    res.json(profile);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a profile by ID
export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id); // ✅ convert to number
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

    const profile = await Profile.findByPk(id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    await profile.destroy();
    res.json({ message: "Profile deleted successfully" });
  } catch (error) {
    console.error("Error deleting profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};