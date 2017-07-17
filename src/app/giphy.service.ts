import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class GiphyService {

  constructor(private http:Http) { }

  getGif(searchCriteria) {
    return this.http.get('http://api.giphy.com/v1/gifs/search?api_key=5927585945364280883a90015b9027cd&q=' + searchCriteria + '&limit=100&lang=es')
  }
}

