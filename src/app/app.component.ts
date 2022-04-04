import { Component } from '@angular/core';
import { ISearchResponse } from './search/search-response.model';
import response from '../routube-response/youtube-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'YouTube';

  allResponse: ISearchResponse['items'] = response.items;

  isContentShown = false;

  filteredTitle: string = '';

  sortedOption = '';

  onShowVideos() {
    this.isContentShown = true;
  }

  onFilterVideos(text: string) {
    this.filteredTitle = text;
  }

  onSelectSortOption(text: string) {
    this.sortedOption = text;
  }
}
