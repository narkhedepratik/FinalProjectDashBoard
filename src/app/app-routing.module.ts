import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorsComponent } from './template/visitors/visitors.component';
import { HomeComponent } from './template/home/home.component';
import { EmiCalculatorComponent } from './include/emi-calculator/emi-calculator.component';
import { EnquiryComponent } from './include/enquiry/enquiry.component';
import { SignInComponent } from './include/sign-in/sign-in.component';
import { UsersDashboardComponent } from './include/users-dashboard/users-dashboard.component';

const routes: Routes = [
  {path:"" ,redirectTo:"SukhadLoan" ,pathMatch:'full'},
  {path:'SukhadLoan' , component: VisitorsComponent , children:[
    {path:'home',component:HomeComponent},
    {path:'emi', component:EmiCalculatorComponent},
    {path:"enquiry",component:EnquiryComponent},
    {path:"sign-in",component:SignInComponent}

  ]},
  {path:'dash',component:UsersDashboardComponent ,children:[
    {path:'ADMIN', loadChildren:()=>import('./modules/admin/admin.module').then(file=>file.AdminModule)},
    {path:'CRM',   loadChildren:()=>import('./modules/crm/crm.module').then(file=>file.CrmModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
