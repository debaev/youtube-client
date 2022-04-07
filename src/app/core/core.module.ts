import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import HeaderComponent from './components/header/header.component';
import MaterialModule from '../material/material.module';
import LoginComponent from './components/header/login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export default class CoreModule { }
