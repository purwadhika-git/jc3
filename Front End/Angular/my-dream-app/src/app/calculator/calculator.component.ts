import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
