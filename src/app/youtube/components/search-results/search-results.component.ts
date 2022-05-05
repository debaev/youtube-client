import { Component, OnInit } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';
import { YoutubeResponseService } from '../../services/youtube-response.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit {
  fetchedVideos!:ISearchItem[];

  constructor(public youtubeResponseService: YoutubeResponseService) {}

  ngOnInit(): void {
    this.youtubeResponseService.videos$.subscribe((res) => {
      this.fetchedVideos = res;
    });
  }
}
