import { Component, OnInit } from '@angular/core';
import { Task } from "../model/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

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
