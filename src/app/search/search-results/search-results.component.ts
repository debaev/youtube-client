import { Component, OnInit } from '@angular/core';
import { ISearchResponse } from '../search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit {
  response?: ISearchResponse;

  constructor() { }

  ngOnInit(): void {
  }
}
