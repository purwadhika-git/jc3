import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';

const config = {
  apiKey: "AIzaSyB6PuhquBNlSqAO4Zp2gqfNMCqjDdOCjcg",
  authDomain: "angular-firebase-a38f1.firebaseapp.com",
  databaseURL: "https://angular-firebase-a38f1.firebaseio.com",
  projectId: "angular-firebase-a38f1",
  storageBucket: "angular-firebase-a38f1.appspot.com",
  messagingSenderId: "828872349754"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
