import { Component } from '@angular/core';
import { IUser } from '../../models/userModel';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private loginService: LoginService) {}

  errorMsg = false;

  user: IUser = {
    login: '',
    pass: '',
  };

  onLogin() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.user.login && this.user.pass
      ? this.loginService.login(this.user)
      : (this.errorMsg = true);
  }
}
