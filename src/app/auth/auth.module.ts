import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
})
export class AuthModule { }
