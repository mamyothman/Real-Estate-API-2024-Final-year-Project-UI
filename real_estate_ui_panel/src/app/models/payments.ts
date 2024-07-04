import { Customer } from "./customer";
import { PropertyBooking } from "./property-booking";

export class Payments {
    paymentId?: string; // Optional because it might be auto-generated
    controllNumber!: string;
    propertyBookingData!: PropertyBooking;
    customerData!: Customer;
    payment_status!: number;
  }
