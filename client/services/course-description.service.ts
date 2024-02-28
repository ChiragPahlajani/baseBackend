import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Course} from '../Interfaces/Course.interface'
@Injectable({
  providedIn: 'root'
})
export class CourseDescriptionService {
  private baseUrl='http://localhost:3000';
  constructor(private http:HttpClient) { }

  getParticularCourseData():Observable<Course>{
    const url=`${this.baseUrl}/api/v1/get-course/65dba3e55b0957b9178028dc`;
   return this.http.get<Course>(url);
   
   
    
    
  }
}
