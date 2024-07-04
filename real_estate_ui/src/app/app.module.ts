import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectorComponent } from './components/general/connector/connector.component';
import { IndexPageComponent } from './components/general/index-page/index-page.component';
import { AboutPageComponent } from './components/general/about-page/about-page.component';
import { ContactPageComponent } from './components/general/contact-page/contact-page.component';
import { AgentsPageComponent } from './components/general/agents-page/agents-page.component';
import { LoginAuthPageComponent } from './components/general/login-auth-page/login-auth-page.component';
import { RegistrationPageComponent } from './components/general/registration-page/registration-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/general/nav-bar/nav-bar.component';
import { FooterComponent } from './components/general/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectorComponent,
    IndexPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    AgentsPageComponent,
    LoginAuthPageComponent,
    RegistrationPageComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
