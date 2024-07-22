import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit{
 constructor(private fb:FormBuilder,private router:Router,
            private empService:EmployeeService){}
 loginForm:FormGroup;

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[],
      password:[]
        })
  }

  onLogin()
  {
    alert("Login...!")
    console.log(this.loginForm.value)
    let un=this.loginForm.controls['username'].value;
    let ps=this.loginForm.controls['password'].value;
    this.empService.authLogin(un,ps).subscribe(
      (user:any)=>{
         if(user!==null)
         {  let userJson:string=JSON.stringify(user);
            localStorage.setItem('user',userJson);
            alert(user.userType)
            this.router.navigateByUrl(`dash/${user.userType}`);  
         }else{
             alert("Enter vaild login details..!")
         }
      }
    )
     this.loginForm.reset(); 
  }

}
