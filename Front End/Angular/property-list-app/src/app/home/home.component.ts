import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from "firebase/app";

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked  {

  unitList : any[]

  constructor(private db : AngularFireDatabase) { }

  ngOnInit() {

    this.db.list('data')
      .valueChanges()
      .subscribe(result => {
        this.unitList = result;
      })

  }

  addData(){
    
    this.db.list('data').push({ 
      name : "",
      description : "",
      image : ""
    })

    var a = firebase.storage().ref();
    var x = a.child("a");


  }

  ngAfterViewChecked(){
    //this.loadOwlCarousel();
  }

  loadOwlCarousel(){
    $('.owl-carousel').owlCarousel({
      loop:false,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }
    });
  }

}
