import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';
import { PlayerFile, PlayerTheme, PlayerThemeDark, PlayerThemeLight, PlayerConfig } from 'projects/gs-player/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.sass']
})
export class AppComponent implements OnInit {
  public files: Array<PlayerFile>;
  public playerTheme: PlayerTheme = PlayerThemeLight;

  public themeClassBackground = 'dark';
  public playerConfig: PlayerConfig = {
    artistAlbumSeparator: '-'
  };

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.musicService.getFiles().subscribe(files => {
      this.files = files;
    });
  }

  toggleTheme() {
    if (this.themeClassBackground === 'dark') {
      this.playerTheme = PlayerThemeDark;
      this.themeClassBackground = 'light';
    } else {
      this.playerTheme = PlayerThemeLight;
      this.themeClassBackground = 'dark';
    }
  }
}
