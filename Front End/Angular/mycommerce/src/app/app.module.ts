import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { CalculatorService } from "./calculator.service";
import { UserService } from "./user.service";

import { AppComponent } from './app.component';
import { Calculator1Component } from './calculator1/calculator1.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    Calculator1Component,
    UserComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [CalculatorService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
