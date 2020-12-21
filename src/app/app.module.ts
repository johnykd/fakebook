import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { CreatePostComponent } from './create-post/create-post.component';
import{FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,MatToolbarModule,FormsModule,
    MatIconModule
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
