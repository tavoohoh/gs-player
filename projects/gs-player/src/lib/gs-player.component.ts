import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GsPlayerService } from './gs-player.service';
import { PlayerFile, PlayerCurrentFile, PlayerStreamState, PlayerTheme, PlayerConfig } from './gs-player.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gs-player',
  templateUrl: './gs-player.component.html',
  styleUrls: ['./gs-player.component.sass']
})
export class GsPlayerComponent implements OnInit, OnChanges {
  @Input() public files: Array<PlayerFile> = [];
  @Input() private playerTheme: PlayerTheme;
  @Input() public playerConfig: PlayerConfig;

  public state: PlayerStreamState;
  public currentFile: PlayerCurrentFile;
  public showPlayList = false;
  public sanitizedPlayerTheme;

  constructor(
    private sanitizer: DomSanitizer,
    public playerService: GsPlayerService
  ) { }

  ngOnInit() {
    // listen to stream state
    this.playerService.getState().subscribe(state => {
      this.state = state;
    });

    this.currentFile = {
      index: 0,
      file: this.files[0]
    };

    this.playerService.stop();
    this.playStream(this.files[0].url);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.playerTheme.currentValue.primary || changes.playerTheme.currentValue.secondary) {
      this.sanitizedPlayerTheme = this.sanitizer.bypassSecurityTrustStyle(
        '--primary:' + changes.playerTheme.currentValue.primary + ';' +
        '--secondary:' + changes.playerTheme.currentValue.secondary
      );
    }
  }

  playStream(url) {
    this.playerService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file, index) {
    this.currentFile = { index, file };
    this.playerService.stop();
    this.playStream(file.url);
    this.tooglePlayList(true);
  }

  pause() {
    this.playerService.pause();
  }

  play() {
    this.playerService.play();
  }

  stop() {
    this.playerService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change) {
    this.playerService.seekTo(change.srcElement.value);
  }

  tooglePlayList(isPlaying?: boolean) {
    this.showPlayList = isPlaying ? false : !this.showPlayList;
  }
}

