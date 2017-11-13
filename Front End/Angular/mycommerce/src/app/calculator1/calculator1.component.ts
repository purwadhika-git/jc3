import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CalculatorService } from "../calculator.service";

@Component({
  selector: 'app-calculator1',
  templateUrl: './calculator1.component.html',
  styleUrls: ['./calculator1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Calculator1Component implements OnInit {

  angka1;
  angka2;
  result = 0;

  constructor(private cservice : CalculatorService) { }

  ngOnInit() {
  }

  calculate(){
    
    //this.result = parseInt(this.angka1) + parseInt(this.angka2);
    
    this.result = this.cservice.Sum(parseInt(this.angka1), parseInt(this.angka2));
    
  }

}
