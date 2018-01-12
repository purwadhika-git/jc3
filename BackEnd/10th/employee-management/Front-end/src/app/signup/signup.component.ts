import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
  }

  Signup(f : NgForm){

    let obj = {
      username : f.value.username,
      password : f.value.password
    }
    let header = new Headers({ "Content-Type" : "application/json" });
    let options = new RequestOptions({ headers : header });

    this.http.post("http://localhost:3000/api/user/new", obj, options)
    .subscribe(
      result => {
        this.route.navigate(['/']);
      },
      error => {
        console.log("Error !");
      }
    );

  }

}
