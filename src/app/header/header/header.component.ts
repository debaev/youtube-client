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
