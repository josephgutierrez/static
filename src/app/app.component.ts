import { Component, OnInit } from '@angular/core';

import { Music } from './music';
import { MusicService } from './music-collection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'Static - music you can feel';
  albumCollection: Music[];

  constructor(private musicService: MusicService) {}

  getAlbumCollection(): void {
    this.musicService.getAlbumCollection()
      .then(albumCollection => {
        this.albumCollection = albumCollection.results
        console.log(this.albumCollection)
    })      
  }

  ngOnInit() : void {
    this.getAlbumCollection()
  }
}
