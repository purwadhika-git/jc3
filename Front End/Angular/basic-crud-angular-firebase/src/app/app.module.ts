import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";

import { MyfirebaseService } from "./myfirebase.service";

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';

export const firebaseConfig = {
  apiKey: "AIzaSyC4TQPmui7KiIktKk_YJV0bY5231vSppSU",
  authDomain: "sample-fd479.firebaseapp.com",
  databaseURL: "https://sample-fd479.firebaseio.com",
  projectId: "sample-fd479",
  storageBucket: "sample-fd479.appspot.com",
  messagingSenderId: "311537922228"
}

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    NewComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path : '', component : ListComponent},
      { path : 'detail/:id', component : DetailComponent},
      { path : 'new', component : NewComponent},
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, AngularFireAuthModule
  ],
  providers: [MyfirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
