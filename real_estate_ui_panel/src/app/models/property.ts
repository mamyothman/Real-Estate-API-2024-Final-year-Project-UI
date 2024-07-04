import { Category } from "./category";
import { HouseAgent } from "./house-agent";

export class Property {
    propertyId!: string;
    title!: string;
    description!: string;
    type!: string; // e.g., "Commercial", "Corporate", "Detached", "Retail"
    floorNumber?: number; // For Office and Shop (optional)
    totalFloors?: number; // For Office and Shop (optional)
    squareFootage!: number;
    price!: number;
    location!: string;
    city!: string;
    state!: string;
    country!: string;
    zipcode!: string;
    buildingAge?: number; // For Office and Shop (optional)
    yearBuilt?: number; // For House (optional)
    bedrooms?: number; // For House (optional)
    bathrooms?: number; // For House (optional)
    balconies?: number; // For House (optional)
    kitchen?: number; // For House (optional)
    livingRooms?: number; // For House (optional)
    amenities?: string; // e.g., "Elevator, Parking, Security, Garden, Garage, Pool" (optional)
    status!: string; // e.g., "Available", "Sold"
    isFeatured?: number; // optional
    houseAgentData?: HouseAgent; // assuming HouseAgent is another interface/type
    categoryData?: Category; // assuming Category is another interface/type
}

