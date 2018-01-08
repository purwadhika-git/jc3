import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userList = [];

  constructor(private http : Http){ }

  GetData(){

    //this.http.get("https://jsonplaceholder.typicode.com/users")
    this.http.get("http://localhost:2018")
    .subscribe(
        result => {
          
          setTimeout(()=>{

            //this.userList = result.json();
            console.log(result);

          }, 4000);

        },
        error => {
          console.log(error);
        }
    );


  }


}
