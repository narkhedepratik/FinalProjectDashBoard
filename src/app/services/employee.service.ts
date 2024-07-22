import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  authLogin(username:string,password:string)
  {
    return this.http.get(`http://localhost:9090/login/${username}/${password}`);
  }
}
