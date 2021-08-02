import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoginSubject = new BehaviorSubject<boolean>(false);
baseURL= environment.baseURL

constructor(public http:HttpClient) { }
  


    login(data: any)
    {
       return this.http.post(this.baseURL + '/users/login', data)
    }
  
    register(data: any)
    {
      return this.http.post( this.baseURL + '/users/register',data)
    }


}