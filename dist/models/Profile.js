"use strict";
//Profile.ts
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Profile extends sequelize_1.Model {
}
Profile.init({
    id: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    bio: { type: sequelize_1.DataTypes.TEXT },
    location: { type: sequelize_1.DataTypes.STRING },
    nationality: { type: sequelize_1.DataTypes.STRING },
    availability: { type: sequelize_1.DataTypes.STRING },
    dateOfBirth: { type: sequelize_1.DataTypes.DATE },
    email: { type: sequelize_1.DataTypes.STRING, unique: true },
    phone: { type: sequelize_1.DataTypes.STRING },
    address: { type: sequelize_1.DataTypes.STRING },
    github: { type: sequelize_1.DataTypes.STRING },
    twitter: { type: sequelize_1.DataTypes.STRING },
    linkedin: { type: sequelize_1.DataTypes.STRING },
    expectedSalary: { type: sequelize_1.DataTypes.FLOAT },
    ownACar: { type: sequelize_1.DataTypes.BOOLEAN },
    haveDrivingLicense: { type: sequelize_1.DataTypes.BOOLEAN },
    noticePeriod: { type: sequelize_1.DataTypes.STRING },
    immigrationStatus: { type: sequelize_1.DataTypes.STRING },
    referees: { type: sequelize_1.DataTypes.TEXT },
    willingToRelocate: { type: sequelize_1.DataTypes.BOOLEAN },
    languages: { type: sequelize_1.DataTypes.STRING },
    skills: { type: sequelize_1.DataTypes.TEXT }
}, { sequelize: database_1.sequelize, tableName: "profiles" });
exports.default = Profile;
