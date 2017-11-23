import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private db : AngularFireDatabase, private router : Router) { }

  ngOnInit() {
  }

  add(f: NgForm){
    this.db.list('sample').push({
      name : f.value.name,
      phone_number : f.value.phone_number
    })

    this.router.navigate(['/'])
  }

}
