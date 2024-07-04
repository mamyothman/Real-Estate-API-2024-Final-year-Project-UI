import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectorComponent } from './components/general/connector/connector.component';
import { IndexPageComponent } from './components/general/index-page/index-page.component';
import { RegistrationPageComponent } from './components/general/registration-page/registration-page.component';
import { AboutPageComponent } from './components/general/about-page/about-page.component';
import { AgentsPageComponent } from './components/general/agents-page/agents-page.component';
import { ContactPageComponent } from './components/general/contact-page/contact-page.component';
import { LoginAuthPageComponent } from './components/general/login-auth-page/login-auth-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index-page' },

  { path: '', component: ConnectorComponent, 
    children: [
      { path: 'index-page', component: IndexPageComponent },
      { path: 'about-us-page', component: AboutPageComponent },
      { path: 'agents-page', component: AgentsPageComponent },
      { path: 'contact-us-page', component: ContactPageComponent },
      { path: 'login-auth-page', component: LoginAuthPageComponent },
      { path: 'registration-page', component: RegistrationPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
