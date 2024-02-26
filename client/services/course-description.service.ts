import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseDescriptionService {
  private baseUrl='http://localhost:3000';
  constructor(private http:HttpClient) { }

  getParticularCourseData():Observable<any>{
    const url=`${this.baseUrl}/api/v1/get-course/65dbbe248cd6682def89a88b`;
   return this.http.get(url);
   
   
    
    
  }
}
