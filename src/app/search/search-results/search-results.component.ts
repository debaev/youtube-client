import { Component, OnInit, Input } from '@angular/core';
import { ISearchResponse } from '../search-response.model';
// import response from '../../../routube-response/youtube-response';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit {
  @Input()
    allDisplayedVideos?: ISearchResponse['items'];

  @Input()
    isCardsShown?: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
