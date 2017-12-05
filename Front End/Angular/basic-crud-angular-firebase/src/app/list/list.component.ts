import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list : any[]
  
  constructor(private db : AngularFireDatabase) { }

  ngOnInit() {

    this.db.list('sample')
    .snapshotChanges()
    .subscribe(result => {

      this.list = result.map(data => {

        var obj = {
          key : data.key,
          value : data.payload.val()
        
        }

        return obj;
      });

    })
    
  }

  remove(id){
    let obj = this.db.object('sample/' + id)
    obj.remove()
  }

}
