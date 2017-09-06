import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Music } from '../music';
import { MusicService } from '../music-collection.service';

@Component({
  selector: 'music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
})

export class MusicComponent implements OnInit {
  albumCollection: Music[];

  constructor(private musicService: MusicService, private router: Router) { }

  getAlbumCollection(): void {
    this.musicService.getAlbumCollection().subscribe(
      res => {
        this.albumCollection = res;
      },
      error => {
        console.log(`An error occured ${error}`);
      });
  }

  showAlbum(album) {
    const artistId = album.artistId;
    this.router.navigate(['/artist', artistId])
  }

  ngOnInit(): void {
    this.getAlbumCollection()
  }
}
