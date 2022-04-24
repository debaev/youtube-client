import { NgModule } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminRoutingModule } from './admins-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminPageComponent,
  ],
  imports: [
    AdminRoutingModule,
    SharedModule,
  ],
})
export class AdminModule { }
