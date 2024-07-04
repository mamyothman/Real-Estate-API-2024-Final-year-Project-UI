import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';
import { environment } from '../../../environments/environment';
import { Customer } from '../../models/customer';
import { Feedback } from '../../models/feedback';
import { HouseAgent } from '../../models/house-agent';
import { HouseAgentImage } from '../../models/house-agent-image';
import { Payments } from '../../models/payments';
import { PropertyBooking } from '../../models/property-booking';
import { PropertyImages } from '../../models/property-images';
import { Property } from '../../models/property';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {

  private categoryUrl = environment.url + 'categories/';
  private customerUrl = environment.url;
  private feedbackUrl = environment.url;
  private apiUrl = environment.url;

  constructor(private http: HttpClient) { }

  // Get all categories
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }

    // Get category by ID
    getCategoryById(id: string): Observable<Category> {
      return this.http.get<Category>(`${this.categoryUrl}${id}`);
    }

    // Create a new category
    createCategory(category: Category): Observable<Category> {
      return this.http.post<Category>(this.categoryUrl, category);
    }

    // Update a category
    updateCategory(id: string, category: Category): Observable<Category> {
      return this.http.put<Category>(`${this.categoryUrl}${id}`, category);
    }

  // Delete a category
  deleteCategory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.categoryUrl}${id}`);
  }



  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl + 'customers');
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.customerUrl}customers/${id}`);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerUrl + 'customers', customer);
  }

  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.customerUrl}customers/${id}`, customer);
  }

  deleteCustomer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.customerUrl}customers/${id}`);
  }


    // Feedback methods
    getAllFeedback(): Observable<Feedback[]> {
      return this.http.get<Feedback[]>(this.feedbackUrl + 'feedback');
    }
  
    getFeedbackById(id: string): Observable<Feedback> {
      return this.http.get<Feedback>(`${this.feedbackUrl}feedback/${id}`);
    }
  
    createFeedback(feedback: Feedback): Observable<Feedback> {
      return this.http.post<Feedback>(this.feedbackUrl + 'feedback', feedback);
    }
  
    updateFeedback(id: string, feedback: Feedback): Observable<Feedback> {
      return this.http.put<Feedback>(`${this.feedbackUrl}feedback/${id}`, feedback);
    }
  
    deleteFeedback(id: string): Observable<void> {
      return this.http.delete<void>(`${this.feedbackUrl}feedback/${id}`);
    }


  // House Agent methods (previously added)
  getAllHouseAgents(): Observable<HouseAgent[]> {
    return this.http.get<HouseAgent[]>(this.apiUrl + 'house_agent');
  }

  getHouseAgentById(id: string): Observable<HouseAgent> {
    return this.http.get<HouseAgent>(`${this.apiUrl}house_agent/${id}`);
  }

  createHouseAgent(houseAgent: HouseAgent): Observable<HouseAgent> {
    return this.http.post<HouseAgent>(this.apiUrl + 'house_agent', houseAgent);
  }

  updateHouseAgent(id: string, houseAgent: HouseAgent): Observable<HouseAgent> {
    return this.http.put<HouseAgent>(`${this.apiUrl}house_agent/${id}`, houseAgent);
  }

  deleteHouseAgent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}house_agent/${id}`);
  }

  // Property Booking methods (previously added)
  getAllBookings(): Observable<PropertyBooking[]> {
    return this.http.get<PropertyBooking[]>(this.apiUrl + 'bookings');
  }

  getBookingById(id: string): Observable<PropertyBooking> {
    return this.http.get<PropertyBooking>(`${this.apiUrl}bookings/${id}`);
  }

  createBooking(booking: PropertyBooking): Observable<PropertyBooking> {
    return this.http.post<PropertyBooking>(this.apiUrl + 'bookings', booking);
  }

  updateBooking(id: string, booking: PropertyBooking): Observable<PropertyBooking> {
    return this.http.put<PropertyBooking>(`${this.apiUrl}bookings/${id}`, booking);
  }

  deleteBooking(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}bookings/${id}`);
  }

  // Payment methods (previously added)
  getAllPayments(): Observable<Payments[]> {
    return this.http.get<Payments[]>(this.apiUrl + 'payments/all');
  }

  getPaymentById(id: string): Observable<Payments> {
    return this.http.get<Payments>(`${this.apiUrl}payments/${id}`);
  }

  createPayment(payment: Payments): Observable<Payments> {
    return this.http.post<Payments>(this.apiUrl + 'payments/create', payment);
  }

  updatePayment(id: string, payment: Payments): Observable<Payments> {
    return this.http.put<Payments>(`${this.apiUrl}payments/${id}`, payment);
  }

  deletePayment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}payments/${id}`);
  }

  // House Agent Image methods (previously added)
  uploadHouseAgentImage(agentId: string, imageFile: File): Observable<void> {
    const formData: FormData = new FormData();
    formData.append('imageFile', imageFile);

    return this.http.post<void>(`${this.apiUrl}house-agent-image/create/${agentId}`, formData);
  }

  getAllHouseAgentImages(): Observable<HouseAgentImage[]> {
    return this.http.get<HouseAgentImage[]>(this.apiUrl + 'house-agent-image/allAgents');
  }

  getHouseAgentImageById(id: string): Observable<HouseAgentImage> {
    return this.http.get<HouseAgentImage>(`${this.apiUrl}house-agent-image/by-id/${id}`);
  }

  getHouseAgentImagesByAgentId(agentId: string): Observable<HouseAgentImage[]> {
    return this.http.get<HouseAgentImage[]>(`${this.apiUrl}house-agent-image/by-agent-id/${agentId}`);
  }

  deleteHouseAgentImage(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}house-agent-image/${id}`);
  }

  // Property methods
  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl + 'properties/all');
  }

  getPropertyById(id: string): Observable<Property> {
    return this.http.get<Property>(`${this.apiUrl}properties/${id}`);
  }

  createProperty(property: Property): Observable<Property> {
    return this.http.post<Property>(this.apiUrl + 'properties/create', property);
  }

  updateProperty(id: string, property: Property): Observable<Property> {
    return this.http.put<Property>(`${this.apiUrl}properties/${id}`, property);
  }

  deleteProperty(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}properties/${id}`);
  }

  // Property Image methods
  uploadPropertyImages(propertyId: string, images: { [key: string]: File }): Observable<void> {
    const formData: FormData = new FormData();
    for (const key in images) {
      formData.append(key, images[key]);
    }

    return this.http.post<void>(`${this.apiUrl}property-image/create/${propertyId}`, formData);
  }

  getAllPropertyImages(): Observable<PropertyImages[]> {
    return this.http.get<PropertyImages[]>(this.apiUrl + 'property-image/allProperties');
  }

  getPropertyImageById(id: string): Observable<PropertyImages> {
    return this.http.get<PropertyImages>(`${this.apiUrl}property-image/by-id/${id}`);
  }

  getPropertyImagesByPropertyId(propertyId: string): Observable<PropertyImages> {
    return this.http.get<PropertyImages>(`${this.apiUrl}property-image/by-property-id/${propertyId}`);
  }

  deletePropertyImage(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}property-image/${id}`);
  }

}

