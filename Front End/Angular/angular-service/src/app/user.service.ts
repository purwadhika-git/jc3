import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private userList = [
    {
      name : "User 1",
      address : "Address 1",
      phoneNumber : "Phone Number 1"
    },
    {
      name : "User 2",
      address : "Address 2",
      phoneNumber : "Phone Number 2"
    },
    {
      name : "User 3",
      address : "Address 3",
      phoneNumber : "Phone Number 3"
    }
  ]

  constructor() { }

  GetUser(){
    return this.userList;
  }

  AddNewUser(user){
    this.userList.push(user);
  }

  DeleteUser(index){
    this.userList.splice(index, 1);
  }

}
