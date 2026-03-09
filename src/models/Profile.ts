import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

interface ProfileAttributes {
  id?: number;
  name: string;
  bio: string;
  location: string;
  nationality: string;
  availability: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  address: string;
  github: string;
  twitter: string;
  linkedin: string;
  expectedSalary: number;
  ownACar: boolean;
  haveDrivingLicense: boolean;
  noticePeriod: string;
  immigrationStatus: string;
  referees: string;
  willingToRelocate: boolean;
  languages: string;
  skills: string;
}

class Profile extends Model<ProfileAttributes> implements ProfileAttributes {
  public id!: number;
  public name!: string;
  public bio!: string;
  public location!: string;
  public nationality!: string;
  public availability!: string;
  public dateOfBirth!: Date;
  public email!: string;
  public phone!: string;
  public address!: string;
  public github!: string;
  public twitter!: string;
  public linkedin!: string;
  public expectedSalary!: number;
  public ownACar!: boolean;
  public haveDrivingLicense!: boolean;
  public noticePeriod!: string;
  public immigrationStatus!: string;
  public referees!: string;
  public willingToRelocate!: boolean;
  public languages!: string;
  public skills!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Profile.init(
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    bio: { type: DataTypes.TEXT },
    location: { type: DataTypes.STRING },
    nationality: { type: DataTypes.STRING },
    availability: { type: DataTypes.STRING },
    dateOfBirth: { type: DataTypes.DATE },
    email: { type: DataTypes.STRING, unique: true },
    phone: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    github: { type: DataTypes.STRING },
    twitter: { type: DataTypes.STRING },
    linkedin: { type: DataTypes.STRING },
    expectedSalary: { type: DataTypes.FLOAT },
    ownACar: { type: DataTypes.BOOLEAN },
    haveDrivingLicense: { type: DataTypes.BOOLEAN },
    noticePeriod: { type: DataTypes.STRING },
    immigrationStatus: { type: DataTypes.STRING },
    referees: { type: DataTypes.TEXT },
    willingToRelocate: { type: DataTypes.BOOLEAN },
    languages: { type: DataTypes.STRING },
    skills: { type: DataTypes.TEXT }
  },
  { sequelize, tableName: "profiles" }
);

export default Profile;