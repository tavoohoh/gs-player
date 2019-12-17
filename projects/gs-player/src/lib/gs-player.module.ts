import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsPlayerComponent } from './gs-player.component';

// https://auth0.com/blog/building-an-audio-player-app-with-angular-and-rxjs/

@NgModule({
  declarations: [GsPlayerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GsPlayerComponent
  ]
})
export class GsPlayerModule { }
