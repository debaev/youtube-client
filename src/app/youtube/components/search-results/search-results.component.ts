import { Component } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';
import { YoutubeResponseService } from '../../services/youtube-response.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  fetchedVideos!:ISearchItem[];

  constructor(public youtubeResponseService: YoutubeResponseService) {}
}
