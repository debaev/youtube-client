import { Component, Input } from '@angular/core';
import SortFilterService from 'src/app/core/services/sort-filter.service';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  @Input()
    allVideos!: ISearchItem[];

  constructor(public sortService: SortFilterService) { }
}
