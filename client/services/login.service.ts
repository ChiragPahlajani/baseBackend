import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  private url='http://localhost:3000/api/v1/login';
  constructor(private http:HttpClient) { }
  login(email:string,password:string):Observable<any>{
    console.log(typeof email);
    const body = {email:email,password:password};
    console.log(body);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
   
    return this.http.post(this.url,body,{headers:headers})
    
        
      }
 
  }

