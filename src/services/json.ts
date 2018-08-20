import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
 import 'rxjs/add/operator/map';
@Injectable()

export class Course{
    url= 'assets/codetribe.json';

    constructor(public http:HttpClient ){


    }

    getCourse(){
        return this.http.get(this.url)
         
    }

    

}




