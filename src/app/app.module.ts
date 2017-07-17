import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { GiphyService } from "./giphy.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MasonryModule
  ],
  providers: [
    GiphyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
