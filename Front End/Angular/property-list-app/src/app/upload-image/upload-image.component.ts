import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import 'firebase/storage'

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  file : File

  constructor(private db : AngularFireDatabase, private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  fileChange($event){
    this.file = $event.target.files[0];
    console.log(this.file);
  }

  upload(){
    
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child("images/" + this.file.name).put(this.file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // upload in progress
        console.log("Upload in progress !!");
      },
      (error) => {
        // upload error
        console.log("Upload image error !! " + error.message);
      },
      () => {
        // upload success
        console.log("Upload success !!");
        console.log(uploadTask.snapshot.downloadURL);
        // insert data to database
      }
    )


  }

}
