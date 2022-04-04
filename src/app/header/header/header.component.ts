import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  isSortBlockShown: boolean = false;

  searchInputValue: string = '';

  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchInputValue = target.value;
  }

  @Output()
    showVideos = new EventEmitter();

  onSearchSubmit() {
    this.showVideos.emit();
  }

  @Output()
    filterInputValue = new EventEmitter<string>();

  isDateSortActive = false;

  isCountSortActive = false;

  isSortAscending = true;

  isCountAscending = true;

  selectedSortValue = '';

  @Output()
    selectedSortOption = new EventEmitter();

  onSortChange() {
    this.selectedSortOption.emit(this.selectedSortValue);
  }

  onDateSort() {
    this.isSortAscending ? this.selectedSortValue = 'date-ascending' : this.selectedSortValue = 'date-descending';
    this.isSortAscending = !this.isSortAscending;
    this.isDateSortActive = true;
    this.isCountSortActive = false;
    this.onSortChange();
  }

  onCountSort() {
    this.isCountAscending ? this.selectedSortValue = 'count-ascending' : this.selectedSortValue = 'count-descending';
    this.isCountAscending = !this.isCountAscending;
    this.isCountSortActive = true;
    this.isDateSortActive = false;
    this.onSortChange();
  }

  onFilterInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filterInputValue.emit(target.value);
  }

  cleanSearchField() {
    if (this.searchInputValue) {
      this.searchInputValue = '';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
