import { Course } from './../../services/json';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
course: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private service:Course) {
    this.course=this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }



  details(){

    this.service.getCourse().subscribe(data=>{
  })
  }

}
