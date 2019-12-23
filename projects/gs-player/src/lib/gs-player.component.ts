import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GsPlayerService } from './gs-player.service';
import { PlayerFile, PlayerCurrentFile, PlayerStreamState, PlayerTheme, PlayerConfig } from './gs-player.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gs-player',
  templateUrl: './gs-player.component.html',
  styleUrls: ['./gs-player.component.sass']
})
export class GsPlayerComponent implements OnInit, OnChanges, AfterViewInit  {
  @Input() public files: Array<PlayerFile> = [];
  @Input() public playerTheme: PlayerTheme;
  @Input() public playerConfig: PlayerConfig;

  public state: PlayerStreamState;
  public currentFile: PlayerCurrentFile;
  public showPlayList = false;
  public sanitizedPlayerTheme;

  @ViewChild('player', { static: false }) player: ElementRef;

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

  ngAfterViewInit() {
    this.sanitizeTheme(
      this.playerTheme.primary,
      this.playerTheme.secondary
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.player && changes.playerTheme.currentValue.primary || changes.playerTheme.currentValue.secondary) {
      this.sanitizeTheme(
        changes.playerTheme.currentValue.primary,
        changes.playerTheme.currentValue.secondary
      );
    }
  }

  sanitizeTheme(primary: string, secondary: string) {

    if (this.player) {
      const player = this.player.nativeElement;

      const elementColor: Array<HTMLElement> = [
        // .gs-player .media-title
        player.children[0],
        // .gs-player .media-text
        player.children[1].children[1].children[0],
        // .gs-player .media-text
        player.children[1].children[1].children[2]
      ];

      const elementBackground: Array<HTMLElement> = [
        // .slidecontainer .slider
        player.children[1].children[1].children[1].children[0]
      ];

      const svgFill: Array<HTMLElement> = [
        // svg.icon "previous"
        player.children[1].children[0].children[0].children[0],
        // svg.icon "play/pause"
        player.children[1].children[0].children[1].children[0],
        // svg.icon "next"
        player.children[1].children[0].children[2].children[0],
        // svg.icon "menu"
        player.children[1].children[2].children[0].children[0]
      ];

      // color
      elementColor.forEach(element => {
        element.style.color = primary;
      });

      // background
      elementBackground.forEach(element => {
        element.style.background = secondary;
      });

      // fill
      svgFill.forEach(svg => {
        svg.style.fill = primary;
      });
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

  playPause() {
    if (!this.state.playing) {
      this.playerService.play();
    } else {
      this.playerService.pause();
    }
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

