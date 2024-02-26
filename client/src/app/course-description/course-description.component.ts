import { Component } from '@angular/core';
import{CourseDescriptionService} from'../../../services/course-description.service'
@Component({
  selector: 'app-course-description',
  templateUrl: './course-description.component.html',
  styleUrl: './course-description.component.css'
})
export class CourseDescriptionComponent {
 constructor(private CourseContent:CourseDescriptionService){}
 ngOnInit():void{
  this.CourseContent.getParticularCourseData().subscribe(data=>{
    console.log(data.course);
    
  })
 }
}
