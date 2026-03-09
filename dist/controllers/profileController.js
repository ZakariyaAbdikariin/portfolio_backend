"use strict";
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
exports.updateProfile = exports.createProfile = void 0;
const Profile_1 = __importDefault(require("../models/Profile"));
// Create a new profile
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield Profile_1.default.create(req.body);
        res.status(201).json(profile);
    }
    catch (error) {
        res.status(500).json({
            error: error instanceof Error ? error.message : error,
        });
    }
});
exports.createProfile = createProfile;
// Update an existing profile
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        if (!id) {
            res.status(400).json({ message: "ID parameter is required" });
            return;
        }
        const profile = yield Profile_1.default.findByPk(Number(id));
        if (!profile) {
            res.status(404).json({ message: "Profile not found" });
            return;
        }
        yield profile.update(req.body);
        res.status(200).json(profile);
    }
    catch (error) {
        res
            .status(500)
            .json({ error: error instanceof Error ? error.message : error });
    }
});
exports.updateProfile = updateProfile;
