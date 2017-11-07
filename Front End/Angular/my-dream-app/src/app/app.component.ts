import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // title = 'app';
  // myNumber = 0;

  angka1;
  angka2;
  result = 0;

  tambah(){
    this.result = +this.angka1 + +this.angka2;
  }
  kurang(){
    this.result = parseInt(this.angka1) - parseInt(this.angka2);
  }
  kali(){
    this.result = +this.angka1 / +this.angka2;
  }
  bagi(){
    this.result = +this.angka1 * +this.angka2;
  }

  // RandomNumber() {
  //   this.myNumber = Math.random();
  // }

}
