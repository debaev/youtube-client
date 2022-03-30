import { Component, OnInit } from '@angular/core';
import { IMockedResponse } from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit {
  response?: IMockedResponse;

  constructor() { }

  ngOnInit(): void {
  }
}
