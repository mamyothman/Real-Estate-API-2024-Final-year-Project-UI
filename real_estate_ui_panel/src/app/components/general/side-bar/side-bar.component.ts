import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  username:any;
  user_role:any;

  constructor(
    private router:Router
  ){}

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    this.user_role = sessionStorage.getItem('user_role');
  }

  userManagement(){
    this.router.navigate(["panel/user-management"]);  
  }

  addRole(){
    this.router.navigate(["panel/add-role"]); 
  }

  roleList(){
    this.router.navigate(["panel/role-list"]);   
  }

  addAgent(){
    this.router.navigate(["panel/add-agent"]);   
  }

  agentList(){
    this.router.navigate(["panel/agent-lists"]);  
  }

  paymentData(){
    // this.router.navigate(["panel/add-category"]);  
  }

  categoryList(){
    this.router.navigate(["panel/category-list"]); 
  }

  addCategory(){
    this.router.navigate(["panel/add-category"]);
  }

  feedBackArea(){
    this.router.navigate(["panel/feedback-list"]); 
  }
}
