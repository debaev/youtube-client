import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent,
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
  ],
})
export class AuthModule { }
