import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MusicService } from '../music-collection.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  albums: Array<any>

  constructor(private route: ActivatedRoute, private musicService: MusicService) {

   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.musicService.getArtistDetails(params.id)
      .then(data => this.albums = data.results)
    })
  }

}
