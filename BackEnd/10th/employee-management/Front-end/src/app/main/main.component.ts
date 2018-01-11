import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  file : File;
  employeeList = [];

  constructor(private http : Http ){ }

  ngOnInit(){
    this.loadEmployeeList();
  }

  loadEmployeeList(){

    let token = localStorage.getItem("token");
    let header = new Headers({ "Authorization" : "Bearer " + token })
    let options = new RequestOptions({ headers : header });

    this.http.get("http://localhost:3000/api/employee", options)
    .subscribe(
      result => {
        this.employeeList = result.json();
      },
      error => {
        
      }
    );
  }

  fileChange($event){
    this.file = $event.target.files[0];
  }

  SaveEmployeeData(f : NgForm){
    if( f.value.name != "" && f.value.name != null && this.file != null){

      
      let formData = new FormData();
      formData.append("name", f.value.name);
      formData.append("address", f.value.address);
      formData.append("phoneNumber", f.value.phoneNumber);
      formData.append("salary", f.value.salary);
      formData.append("profile", this.file);

      let header = new Headers();
      let options = new RequestOptions({ headers : header });

      this.http.post("http://localhost:3000/api/employee", formData, options)
      .subscribe(
        result => {
          console.log(result.json());
          this.loadEmployeeList();
          f.reset();
        },
        error => {
          console.log(error);
        },
      );

      

    }
    else{
      console.log("error")
    }
  }

  DeleteEmployeeData(id){
    let header = new Headers();
    let options = new RequestOptions({ headers : header });

    this.http.delete("http://localhost:3000/api/employee/" + id, options)
    .subscribe(
      result => {
        this.loadEmployeeList();
      },
      error => {
        console.log(error);
      }
    );
  }

}
