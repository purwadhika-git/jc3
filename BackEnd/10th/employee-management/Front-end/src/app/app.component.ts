import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  employeeList = [];

  constructor(private http : Http ){ }

  ngOnInit(){
    this.http.get("http://localhost:3000/api/employee")
    .subscribe(
      result => {
        this.employeeList = result.json();
      },
      error => {

      }
    );

  }

}
