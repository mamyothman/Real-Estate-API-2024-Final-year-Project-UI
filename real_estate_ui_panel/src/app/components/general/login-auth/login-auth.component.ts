import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../../services/login/login-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrl: './login-auth.component.css'
})

export class LoginAuthComponent {

  loader: boolean = false;
  agreedToTerms: boolean = false;

  username:any;
  password:any;
  current_year:any;

  constructor(
    private router:Router,
    private login_service:LoginServiceService
  ){}

  ngOnInit(): void {
    this.loader = false;
    this.agreedToTerms = false; 
    this.current_year = new Date().getFullYear();
  }

  processLogin(){
    this.loader = true;
    const login_obj = {
      "username": this.username,
      "password": this.password
    }
    setTimeout(() =>{
      this.login_service.loginAuthenticationPost(login_obj).subscribe((resp:any)=>{
        this.loader = false;
        sessionStorage.setItem('user_id', resp.user_id);
        sessionStorage.setItem('username', resp.username);
        sessionStorage.setItem('user_role', resp.role_id.roleName);
        this.checkROle(resp.role_id.roleName);
      },
      (error:HttpErrorResponse)=>{
        this.loader = false;
        this.username = this.password = "";
      }
    );
    },2000);
  }

  checkROle(role:any){
    switch(role){

      case "Administrator":
      this.router.navigate(["panel/admin-home"]);
      break;

      case "Agent":
        this.router.navigate(["agent-home"]);
        break;

        default:
          this.router.navigate(["login-auth"]);
          break;
    }
  }

  createAccount(){
    window.location.href = 'http://localhost:9090/registration-page';
  }
}
