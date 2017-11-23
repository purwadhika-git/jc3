import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  key: string = "";
  obj : {};

  constructor(private db : AngularFireDatabase, private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {

      this.getData(params['id'])
      
    })

  }

  getData(id){
    this.db.object('sample/' + id)
    .snapshotChanges()
    .subscribe(
      result => {
        this.key = result.key;
        this.obj = result.payload.val()
        console.log(this.key)
      }
    );
  }

  update(f: NgForm){
    let obj = this.db.object('sample/' + this.key)

    obj.update({
      name : (f.value.name == "") ? "" : f.value.name,
      phone_number : (f.value.phone_number == "") ? "" : f.value.phone_number
    })

    this.router.navigate(['/'])
  }
}
