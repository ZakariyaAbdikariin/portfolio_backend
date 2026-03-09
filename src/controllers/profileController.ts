// src/controllers/profileController.ts
import { Request, Response } from "express";
import Profile from "../models/Profile";

// Create a new profile
export const createProfile = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : error,
    });
  }
};

// Update an existing profile
export const updateProfile = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

    if (!id) {
      res.status(400).json({ message: "ID parameter is required" });
      return;
    }

    const profile = await Profile.findByPk(Number(id));
    if (!profile) {
      res.status(404).json({ message: "Profile not found" });
      return;
    }

    await profile.update(req.body);
    res.status(200).json(profile);
  } catch (error) {
    res
      .status(500)
      .json({ error: error instanceof Error ? error.message : error });
  }
};
