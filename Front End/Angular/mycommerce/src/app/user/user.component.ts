import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  constructor(private srv : UserService) { }

  ngOnInit() {
    
    console.log(this.srv.GetUser());

    this.Add({
      name : "New User",
      address : "New User Address",
      phoneNumber : "New User Phone Number"
    });

    console.log(this.srv.GetUser());

  }

  Add(user){
    this.srv.AddNewUser(user);
  }

  Delete(index){
    this.srv.DeleteUser(index);
  }

}
