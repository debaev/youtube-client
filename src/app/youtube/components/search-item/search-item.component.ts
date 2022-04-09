import { Component, OnInit, Input } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnInit {
  @Input()
    allVideos!: ISearchItem[];

  // @Input()
  //   isCardShown?: boolean = false;

  // @Input()
  //   filterByWord!: string;

  // @Input()
  //   selectedSortCards!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
