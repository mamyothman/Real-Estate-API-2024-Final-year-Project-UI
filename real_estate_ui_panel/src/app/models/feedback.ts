import { Customer } from "./customer";
import { Property } from "./property";

export class Feedback {
    feedBackId?: string; // Optional because it might be auto-generated
    comments!: string;
    rating!: number; // e.g., rating out of 5
    createdAt!: string; // Use ISO 8601 date string format
    propertyData!: Property;
    customerData!: Customer;
  }
