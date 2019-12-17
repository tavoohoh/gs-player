import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GsPlayerModule } from 'projects/gs-player/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GsPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
