import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class SortFilterService {
  sortInputValue = '';

  sortInputType = '';

  isSortAscending = true;

  setSortValue(value: string) {
    this.sortInputValue = value;
  }
}
