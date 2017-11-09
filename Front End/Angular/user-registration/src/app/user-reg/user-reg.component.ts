import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from "@angular/forms";
import { User } from "../model/user";

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserRegComponent implements OnInit {

  editedIndex = 0;
  userList = [];

  constructor() {}

  ngOnInit() {
  }

  registerUser(data : NgForm){

    const newId = (this.userList.length == 0) ? 1 : this.userList[this.userList.length - 1].id + 1;
    const user : User = {
      id : newId,
      name : data.value.name,
      address : data.value.address,
      email : data.value.email
    };
    this.userList.push(user);
    data.reset();
  }

  updateUser(data : NgForm){
    
    this.userList[this.editedIndex].name = data.value.name;
    this.userList[this.editedIndex].address = data.value.address;
    this.userList[this.editedIndex].email = data.value.email;

    data.reset();
  }

  setEditedIndex(index){
    this.editedIndex = index;
    console.log(index);
  }

  resetForm(data : NgForm){
    data.reset();
  }

  deleteUser(index){
    this.userList.splice(index, 1);
  }


}
