import { Category } from "./category";
import { Login } from "./login";

export class HouseAgent {
    agentId?: string; // Optional because it might be auto-generated
    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    address!: string;
    city!: string;
    state!: string;
    zipCode!: string;
    country!: string;
    licenseNumber!: string;
    agencyName!: string;
    agencyAddress!: string;
    agencyPhone!: string;
    agencyEmail!: string;
    yearsOfExperience!: number;
    specialties!: string;
    description!: string;
    isActive!: number;
    userData!: Login;
    categoryData!: Category;
  }
