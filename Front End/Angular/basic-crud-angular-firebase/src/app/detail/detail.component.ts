import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  key: number;
  obj : any;

  constructor(private db : AngularFireDatabase, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.key = params['id'];

      this.db.list('sample/' + this.key)
      .snapshotChanges()
      .subscribe(result => {
          this.obj = result.map(data => {
            return data.payload.val();
          });
        }
      );

      console.log(this.obj);
    })

   }
}
