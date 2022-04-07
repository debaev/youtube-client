import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import MaterialModule from './material/material.module';
import FilterPipe from './search/pipe/filter.pipe';
import SortPipe from './search/pipe/sort.pipe';
import BorderColorDirective from './search/directive/border-color.directive';
import CoreModule from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    SortPipe,
    BorderColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
