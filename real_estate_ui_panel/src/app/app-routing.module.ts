import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectorComponent } from './components/general/connector/connector.component';
import { AdminHomePageComponent } from './components/administrator/admin-home-page/admin-home-page.component';
import { LoginAuthComponent } from './components/general/login-auth/login-auth.component';
import { AuthGuard } from './components/general/auth-guard';
import { RoleManagementComponent } from './components/administrator/role-management/role-management.component';
import { AddRoleComponent } from './components/administrator/add-role/add-role.component';
import { CategoryListComponent } from './components/administrator/category-list/category-list.component';
import { AddCategoryComponent } from './components/administrator/add-category/add-category.component';
import { AddAgentComponent } from './components/administrator/add-agent/add-agent.component';
import { AgentsManagementComponent } from './components/administrator/agents-management/agents-management.component';
import { UserManagementComponent } from './components/administrator/user-management/user-management.component';
import { CustomerListComponent } from './components/administrator/customer-list/customer-list.component';
import { FeedbackComponent } from './components/administrator/feedback/feedback.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "login-auth" },
  { path: "login-auth", component: LoginAuthComponent },
  { path: "panel", component: ConnectorComponent, canActivate: [AuthGuard],
    children: [
      { path: "", pathMatch: "full", redirectTo: "admin-home" },
      { path: "admin-home", component: AdminHomePageComponent },
      { path: "add-category", component: AddCategoryComponent },
      { path: "category-list", component: CategoryListComponent },
      { path: "add-role", component: AddRoleComponent },
      { path: "role-list", component: RoleManagementComponent },
      { path: "add-agent", component: AddAgentComponent },
      { path: "agent-lists", component: AgentsManagementComponent },
      { path: "customer-list", component: CustomerListComponent },
      { path: "user-management", component: UserManagementComponent },
      { path: "feedback-list", component: FeedbackComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
