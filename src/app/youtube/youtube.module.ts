import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SearchResultsComponent from './components/search-results/search-results.component';
import SearchItemComponent from './components/search-item/search-item.component';
import MaterialModule from '../material/material.module';
import SortPipe from './pipes/sort-videos/sort.pipe';
import FilterPipe from './pipes/filter-videos/filter.pipe';
import BorderColorDirective from './directives/border-colorizer/border-color.directive';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SortPipe,
    FilterPipe,
    BorderColorDirective,
    MainPageComponent,
    DetailedInformationPageComponent,
  ],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export default class YoutubeModule { }
