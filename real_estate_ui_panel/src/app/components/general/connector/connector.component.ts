import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrl: './connector.component.css'
})
export class ConnectorComponent {

  user_id:any;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user_id = sessionStorage.getItem('user_id');

    if(this.user_id == null || this.user_id == "" || this.user_id == undefined) {
      this.router.navigate(['/login-auth']);
    }
  }
}
