import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import { MusicService } from './music-collection.service';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    ArtistDetailsComponent,
    AlbumComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
    {
      path: '',
      component: MusicComponent
    },
    {
      path: 'artist/:id',
      component: ArtistDetailsComponent
    }
])
  ],
  providers: [
    MusicService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
