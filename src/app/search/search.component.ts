import { Component, OnInit, ViewChild} from '@angular/core';
import { GiphyService } from "../giphy.service";
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild(AngularMasonry) masonry: AngularMasonry;

  public searchCriteria;
  public imageUrls;

  constructor(private giphy: GiphyService) { }

  ngOnInit() {
  }

  onSearchPressed() {
    this.giphy.getGif(this.searchCriteria)
      .subscribe(response => {
        this.imageUrls = response.json().data
          .map(giphyResult => giphyResult.images['fixed_height'].url)
          .map(url => url.replace('httpss://', 'https://'))
      });
  }

}
