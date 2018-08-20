import { DetailsPage } from './../details/details';
import { Course } from './../../services/json';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

courses:any
arrCourses= [];

 lessons:any
 arrLessons=[];

  constructor(public navCtrl: NavController, private service:Course) {

this.service.getCourse().subscribe(results=>{
this.courses= results;
this.arrCourses= this.courses.courses
console.log("response:",this.courses)

this.lessons= results;
this.arrLessons= this.lessons.lessons
console.log("response:",this.lessons)

  });


}

details(lessons:any){
  this.navCtrl.push(DetailsPage,{data:lessons} );
}


}
