import { Component, OnInit } from '@angular/core';
import{CourseDescriptionService} from'../../../services/course-description.service'
import { Course } from '../../../Interfaces/Course.interface'; 
import { log } from 'console';
@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrl: './course-description.component.css'
})
export class CourseDescriptionComponent implements OnInit {
  courses!: Course ;
   sumOfVideoLength=0;
   timeOfCompletion:string='';

 constructor(private CourseContent:CourseDescriptionService){}
 ngOnInit():void{
  this.CourseContent.getParticularCourseData().subscribe(data=>{
    this.courses=data;
    console.log(this.courses);
  
    for(const data of this.courses.course.courseData){
      this.sumOfVideoLength+= data.videoLength;
    }
    const totalMinutes = Math.floor(this.sumOfVideoLength);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    this.timeOfCompletion="Length: "+hours+" hours "+minutes+" minutes"
    
  
  
  })
 }
}
