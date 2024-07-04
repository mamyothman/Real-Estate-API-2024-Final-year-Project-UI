import { Customer } from "./customer";
import { HouseAgent } from "./house-agent";
import { Property } from "./property";

export class PropertyBooking {
    bookingId!: string;
    propertyData!: Property;
    customerData!: Customer;
    startDate!: Date;
    endDate!: Date;
    totalPrice!: number;
    bookingStatus!: number;
    houseAgentData!: HouseAgent;
    status!: string;
}
