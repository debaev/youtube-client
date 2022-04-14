import { Component } from '@angular/core';
import { YoutubeResponseService } from 'src/app/youtube/services/youtube-response.service';
import SortFilterService from '../../services/sort-filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  constructor(
    public sortService: SortFilterService,
    private youtubeService: YoutubeResponseService,
  ) {}

  isSortBlockShown: boolean = false;

  searchInputValue: string = '';

  isDateSortActive = false;

  isCountSortActive = false;

  onShowContent() {
    this.youtubeService.isVideosShown = true;
  }

  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchInputValue = target.value;
  }

  cleanSearchField() {
    if (this.searchInputValue) {
      this.searchInputValue = '';
    }
  }

  onDateSort() {
    this.sortService.isSortAscending = !this.sortService.isSortAscending;
    this.sortService.sortInputType = 'date';
    this.isDateSortActive = true;
    this.isCountSortActive = false;
  }

  onCountSort() {
    this.sortService.isSortAscending = !this.sortService.isSortAscending;
    this.sortService.sortInputType = 'count';
    this.isCountSortActive = true;
    this.isDateSortActive = false;
  }

  onFilterInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.sortService.setSortValue(target.value);
  }
}
