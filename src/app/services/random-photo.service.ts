import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

 

@Injectable({

  providedIn: 'root',

})

export class RandomPhotoService {

  constructor(private http: HttpClient) {}

 

  apiUrl: string =

    'https://api.unsplash.com/photos/random?client_id=099bd47168f041cedf30bb962aef5f2d2bd4785cbe0615c7d217ccc03e7a17f9';
//'https://api.unsplash.com/photos/random?client_id=ff362b82a891c52bf4fef71f4b4a45e09aab2363edfe28f1465f47afc3f93d9a';
  httpOptions = {

    headers: new HttpHeaders()

      .append('Content-Type', 'application/json')

      .append('Access-Control-Allow-Headers', 'Content-Type')

      .append('Access-Control-Allow-Origin', '*'),

  };

 

  getRandomPhoto(

    queryParams: String,

    featureParams: Boolean,

    orientationParams: String,

  ): Observable<any> {

    this.httpOptions.headers.append('Access-Control-Allow-Methods', 'GET');

 

    let getRandomPhotoAPIUrl = this.apiUrl;

    if (queryParams !== undefined && queryParams !== null) {

      getRandomPhotoAPIUrl += '&query=' + queryParams;

    }

    if (featureParams !== undefined && featureParams !== false) {

      getRandomPhotoAPIUrl += '&featured=1';

    }

    if (orientationParams !== undefined && orientationParams !== null) {

      getRandomPhotoAPIUrl += '&orientation=' + orientationParams;

    }

    return this.http.get<any>(getRandomPhotoAPIUrl, this.httpOptions);

  }

}