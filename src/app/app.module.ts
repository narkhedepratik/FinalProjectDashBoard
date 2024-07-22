import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorsComponent } from './template/visitors/visitors.component';
import { UsersDashboardComponent } from './include/users-dashboard/users-dashboard.component';
import { HomeComponent } from './template/home/home.component';
import { EmiCalculatorComponent } from './include/emi-calculator/emi-calculator.component';
import { EnquiryComponent } from './include/enquiry/enquiry.component';
import { SignInComponent } from './include/sign-in/sign-in.component';
import { VisitorHeaderComponent } from './include/visitor-header/visitor-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserHeaderComponent } from './include/user-header/user-header.component';
import { SideNavComponent } from './include/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitorsComponent,
    UsersDashboardComponent,
    HomeComponent,
    EmiCalculatorComponent,
    EnquiryComponent,
    SignInComponent,
    VisitorHeaderComponent,
    UserHeaderComponent,
    SideNavComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
