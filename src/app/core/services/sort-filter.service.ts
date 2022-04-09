import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class SortFilterService {
  sortInputValue = '';

  setSortValue(value: string) {
    this.sortInputValue = value;
  }
}
