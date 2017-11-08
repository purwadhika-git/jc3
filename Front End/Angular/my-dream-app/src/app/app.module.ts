import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TasklistComponent } from './tasklist/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    CalculatorComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path : '', component : CalculatorComponent},
      { path : 'c1', component : Component1Component},
      { path : 'c2', component : Component2Component},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
