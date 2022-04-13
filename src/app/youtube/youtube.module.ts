import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SearchResultsComponent from './components/search-results/search-results.component';
import SearchItemComponent from './components/search-item/search-item.component';
import SortPipe from './pipes/sort-videos/sort.pipe';
import FilterPipe from './pipes/filter-videos/filter.pipe';
import BorderColorDirective from './directives/border-colorizer/border-color.directive';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { LocalDatePipe } from './pipes/local-date/local-date.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SortPipe,
    FilterPipe,
    BorderColorDirective,
    MainPageComponent,
    DetailedInformationPageComponent,
    LocalDatePipe,
  ],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    SharedModule,
  ],
})
export class YoutubeModule { }
