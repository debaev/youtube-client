import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import HeaderComponent from './components/header/header.component';
import LoginComponent from './components/header/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export default class CoreModule { }
