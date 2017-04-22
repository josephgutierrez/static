import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Music } from './music';

@Injectable()

export class MusicService {
  private musicUrl = 'https://itunes.apple.com/search?term=dance&entity=album&limit=21&callback=JSONP_CALLBACK';
  private artistUrl = 'https://itunes.apple.com/lookup?'
  constructor(private jsonp: Jsonp) {}

  getAlbumCollection() {
    return this.jsonp.request(this.musicUrl, {method: 'Get'})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getArtistDetails(artistId) {
    return this.jsonp.request(`${this.artistUrl}id=${artistId}&entity=album&callback=JSONP_CALLBACK`, {method: 'Get'})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}