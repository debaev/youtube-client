import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
