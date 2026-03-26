"use strict";
//profileController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfile = exports.updateProfile = exports.createProfile = exports.getProfileById = exports.getProfiles = void 0;
const Profile_1 = __importDefault(require("../models/Profile")); // default import
// Get all profiles
const getProfiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profiles = yield Profile_1.default.findAll();
        res.json(profiles);
    }
    catch (error) {
        console.error("Error fetching profiles:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getProfiles = getProfiles;
// Get a profile by ID
const getProfileById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id); // ✅ convert to number
        if (isNaN(id))
            return res.status(400).json({ message: "Invalid ID" });
        const profile = yield Profile_1.default.findByPk(id);
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        res.json(profile);
    }
    catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getProfileById = getProfileById;
// Create a new profile
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProfile = yield Profile_1.default.create(req.body);
        res.status(201).json(newProfile);
    }
    catch (error) {
        console.error("Error creating profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.createProfile = createProfile;
// Update an existing profile by ID
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id); // ✅ convert to number
        if (isNaN(id))
            return res.status(400).json({ message: "Invalid ID" });
        const profile = yield Profile_1.default.findByPk(id);
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        yield profile.update(req.body);
        res.json(profile);
    }
    catch (error) {
        console.error("Error updating profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.updateProfile = updateProfile;
// Delete a profile by ID
const deleteProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id); // ✅ convert to number
        if (isNaN(id))
            return res.status(400).json({ message: "Invalid ID" });
        const profile = yield Profile_1.default.findByPk(id);
        if (!profile) {
            return res.status(404).json({ message: "Profile not found" });
        }
        yield profile.destroy();
        res.json({ message: "Profile deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.deleteProfile = deleteProfile;
