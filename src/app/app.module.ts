
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

 

import { AppComponent } from './app.component';

import { RandomPhotoComponent } from './random-photo/random-photo.component';

 

@NgModule({

  declarations: [AppComponent, RandomPhotoComponent],

  imports: [BrowserModule, HttpClientModule, FormsModule],

  providers: [],

  bootstrap: [AppComponent, RandomPhotoComponent],

})

export class AppModule {}