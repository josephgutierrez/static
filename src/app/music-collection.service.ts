import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Music } from './music';

@Injectable()

export class MusicService {
  private musicUrl = 'https://itunes.apple.com/search?term=jack+johnson&limit=5&callback=JSONP_CALLBACK';

  constructor(private jsonp: Jsonp) {}

  getAlbumCollection() {
    return this.jsonp.request(this.musicUrl, {method: 'Get'})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}