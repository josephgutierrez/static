import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Music } from './music';

@Injectable()

export class MusicService {
  private musicUrl = 'https://itunes.apple.com/search?term=dance&entity=album&limit=21&callback=JSONP_CALLBACK';
  private artistUrl = 'https://itunes.apple.com/lookup?';
  constructor(private jsonp: Jsonp) {}

  getAlbumCollection(): Observable<any> {
    return this.jsonp.get(this.musicUrl)
    .map(res => res.json().results);
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
