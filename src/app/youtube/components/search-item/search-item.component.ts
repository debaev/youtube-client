import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import SortFilterService from 'src/app/core/services/sort-filter.service';
import { youtubeVideoSelector } from 'src/app/redux/selectors/videos.selector';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  allVideos$ = this.store.select(youtubeVideoSelector);

  constructor(
    public sortService: SortFilterService,
    private store: Store,
  ) { }
}
