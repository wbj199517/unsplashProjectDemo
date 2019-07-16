import { Component, OnInit } from '@angular/core';

 

import { RandomPhotoService } from '../services/random-photo.service';

import { Photo } from '../models/photo.model';

 

@Component({

  selector: 'app-random-photo',

  templateUrl: './random-photo.component.html',

  styleUrls: ['./random-photo.component.css'],

})

export class RandomPhotoComponent implements OnInit {

  feature: Boolean;

  query: String;

  orientation: String;

  notFound: Boolean;
 

  randomPhoto: Photo = {};

 

  constructor(private randomPhotoService: RandomPhotoService) {}

 showHighReso(url:string){
     window.open(url);
 }

 toggleFeatured(selection:String){
   if(selection==='on'){
     this.feature=true;
   }else{
     this.feature=false;
   }

 }

  getPhoto() {

    this.randomPhotoService

      .getRandomPhoto(this.query, this.feature, this.orientation)

      .subscribe(

        data => {

          console.log(data);

 

          this.randomPhoto.download_count = data.downloads;

          this.randomPhoto.like_count = data.likes;

          this.randomPhoto.photo_alt_description = data.alt_description;

          this.randomPhoto.photo_description = data.description;

          this.randomPhoto.small_Url = data.urls.small;

          this.randomPhoto.high_resolution_Url = data.urls.full;

          this.randomPhoto.photographer = data.user.name;

          this.notFound = false;

        },

        error => {
            this.notFound=true;
            this.randomPhoto={};
          throw new Error('Something went wrong');

        },

      );

  }

  ngOnInit() {}

}