import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  data = 100;

  constructor() { }

  Sum(a, b){
    return a + b;
  }

}
