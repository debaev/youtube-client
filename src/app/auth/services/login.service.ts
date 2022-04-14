import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../models/userModel';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  isLogged: boolean = false;

  userName = 'Your Name';

  login(user: IUser) {
    localStorage.setItem('username', user.login);
    localStorage.setItem('token', user.pass);
    this.isLogged = true;
    this.navigateToMainPage();
    this.userName = user.login;
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.isLogged = false;
    this.navigateToLoginPage();
    this.userName = 'Your Name';
  }

  navigateToMainPage() {
    this.router.navigate(['home']);
  }

  navigateToLoginPage() {
    this.router.navigate(['auth']);
  }
}
