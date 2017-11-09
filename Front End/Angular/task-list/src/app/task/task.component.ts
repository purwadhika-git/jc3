import { Component, OnInit } from '@angular/core';
import { Task } from "../model/task";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  // ngModel
  newTask : string = "";
  
  // array of task
  taskList = [];

  constructor() { }

  ngOnInit() {
  }

  // add task using ngModel
  // AddTask(){
  //   if(this.newTask != "" && this.newTask != null){
  //     const task : Task = {
  //       name : this.newTask,
  //       completed : false,
  //     };

  //     this.taskList.push(task);
  //     this.newTask = "";

  //     console.log(this.taskList);
  //   }
  // }

  // add task using ngForm
  AddTaskForm(f : NgForm){

    if(f.value.task != "" && f.value.task != null){
        const task : Task = {
          name : f.value.task,
          completed : false,
        };

        const a = new Task();

        this.taskList.push(task);
        f.reset();

        console.log(this.taskList);
    }
  }

  DeleteTask(index){
    this.taskList.splice(index, 1);
  }

}
