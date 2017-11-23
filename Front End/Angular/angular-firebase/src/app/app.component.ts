import { Component } from '@angular/core';

import { Http, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http : Http){

    this.http.get("https://angular-firebase-a38f1.firebaseio.com/data.json")
    .subscribe(
      result => {
        console.log(result.json());
      },
      error => {

      }
    );

  }

  AddData(){

    var body = JSON.stringify({
      name : "New User",
      address : "New Address"
    }); 

    var header = new Headers({"Content-Type":"application/json"});
    var options = new RequestOptions({ headers : header });

    this.http.post("https://angular-firebase-a38f1.firebaseio.com/data.json", body, options)
    .subscribe(
      result => {
        console.log(result.json());
      },
      error => {
        console.log(error);
      }
    );
    
  }
}
