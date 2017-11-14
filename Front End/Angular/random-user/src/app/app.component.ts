import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data

  constructor(private http : Http){ }

  RefreshData(){

    this.http.get("https://randomuser.me/api")
    .subscribe(
      result => {
        this.data = result.json().results[0];
      },
      error => {

      }
    );

  }


}
