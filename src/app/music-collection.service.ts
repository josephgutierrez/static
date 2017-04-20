import { Injectable } from '@angular/core';

import { Music } from './music';
import { ALBUMCOLLECTION } from './temp-music';

@Injectable()

export class MusicService {
  getAlbumCollection(): Promise<Music[]> {
    return Promise.resolve(ALBUMCOLLECTION);
  }
}