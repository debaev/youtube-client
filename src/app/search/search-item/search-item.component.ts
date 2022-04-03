import { Component, OnInit, Input } from '@angular/core';
import { ISearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnInit {
  @Input()
    videoList?: ISearchItem[];

  @Input()
    isCardShown?: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
