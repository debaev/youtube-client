import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import YoutubeModule from './youtube/youtube.module';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import MaterialModule from './material/material.module';
// import FilterPipe from './search/pipe/filter.pipe';
// import SortPipe from './search/pipe/sort.pipe';
// import BorderColorDirective from './search/directive/border-color.directive';
import CoreModule from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    YoutubeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
