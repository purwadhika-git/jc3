import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NewunitComponent } from './newunit/newunit.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBRlUog40M6ztHtffuq7-UppDjkg6G9V5c",
  authDomain: "property-list.firebaseapp.com",
  databaseURL: "https://property-list.firebaseio.com",
  projectId: "property-list",
  storageBucket: "property-list.appspot.com",
  messagingSenderId: "695928303952"
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    NewunitComponent,
    BookmarksComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent},
      { path : 'detail', component : DetailComponent},
      { path : 'new', component : NewunitComponent},
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
