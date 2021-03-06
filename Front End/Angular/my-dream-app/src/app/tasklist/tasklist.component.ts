import { Component, OnInit } from '@angular/core';
import { Task } from "../model/task";

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  newTask : string = "";
  taskList = [];

  constructor() { }

  ngOnInit() {
  }

  AddTask(){

    const task : Task = {
      name : this.newTask,
      completed : false,
    };

    this.taskList.push(task);
    this.newTask = "";

    console.log(this.taskList);
  }

  DeleteTask(index){

    this.taskList.splice(index, 1);

  }

}
