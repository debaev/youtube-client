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

  isContentShown = false;

  allResponse: ISearchResponse['items'] = response.items;

  onShowVideos() {
    this.isContentShown = true;
  }
}
