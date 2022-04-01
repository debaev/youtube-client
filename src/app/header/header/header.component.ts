import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  isSortBlockShown: boolean = false;

  searchInputValue: string = '';

  cleanSearchField() {
    if (this.searchInputValue) {
      this.searchInputValue = '';
    }
    console.log('123');
  }

  isInputFilled = this.searchInputValue.length;

  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchInputValue = target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
