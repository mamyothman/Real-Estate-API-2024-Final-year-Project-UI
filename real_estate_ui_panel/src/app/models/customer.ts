import { Login } from "./login";

export class Customer {
    customerId?: string; // Optional because it might be auto-generated
    user_data!: Login;
    firstName!: string;
    lastName!: string;
    email!: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  }