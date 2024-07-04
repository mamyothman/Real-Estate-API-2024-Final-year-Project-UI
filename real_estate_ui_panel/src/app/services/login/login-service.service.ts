import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    private http:HttpClient
  ) { }

  private loginUrl: string = environment.url + "login-auth";

  loginAuthenticationPost(login: any): Observable<any> {
    return this.http.post(`${this.loginUrl}/login`, login, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  saveUser(dto: any): Observable<any> {
    return this.http.post<any>(`${this.loginUrl}/registration`, dto, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateLoginData(user_id: string, dto: any): Observable<any> {
    return this.http.put<any>(`${this.loginUrl}/updateLoginData/${user_id}`, dto, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  resetPassword(user_id: string, dto: any): Observable<any> {
    return this.http.put<any>(`${this.loginUrl}/resetPassword/${user_id}`, dto, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getLoginInformationByUserId(user_id: string): Observable<any> {
    return this.http.get<any>(`${this.loginUrl}/getLoginInformationByUserId/${user_id}`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.loginUrl}/getAllUsers`);
  }
}
