import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectorComponent } from './components/general/connector/connector.component';
import { CategoryManagementComponent } from './components/administrator/category-management/category-management.component';
import { AdminHomePageComponent } from './components/administrator/admin-home-page/admin-home-page.component';
import { NavBarComponent } from './components/general/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/general/side-bar/side-bar.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginAuthComponent } from './components/general/login-auth/login-auth.component';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { AddCategoryComponent } from './components/administrator/add-category/add-category.component';
import { CategoryListComponent } from './components/administrator/category-list/category-list.component';
import { AddRoleComponent } from './components/administrator/add-role/add-role.component';
import { RoleManagementComponent } from './components/administrator/role-management/role-management.component';
import { AddAgentComponent } from './components/administrator/add-agent/add-agent.component';
import { AgentsManagementComponent } from './components/administrator/agents-management/agents-management.component';
import { CustomerListComponent } from './components/administrator/customer-list/customer-list.component';
import { UserManagementComponent } from './components/administrator/user-management/user-management.component';
import { FeedbackComponent } from './components/administrator/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectorComponent,
    CategoryManagementComponent,
    AdminHomePageComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    LoginAuthComponent,
    AddCategoryComponent,
    CategoryListComponent,
    AddRoleComponent,
    RoleManagementComponent,
    AddAgentComponent,
    AgentsManagementComponent,
    CustomerListComponent,
    UserManagementComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ProgressBarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
