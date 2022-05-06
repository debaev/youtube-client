import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/userModel';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {
    this.isLogged$ = this.loginSubject.asObservable();
    this.isUserLogged();
  }

  public isLogged$!: Observable<boolean>;

  public loginSubject = new BehaviorSubject(false);

  login(user: IUser) {
    localStorage.setItem('username', user.username);
    localStorage.setItem('token', user.password);
    this.navigateToMainPage();
    this.isUserLogged();
  }

  // eslint-disable-next-line class-methods-use-this
  getUsername() {
    return localStorage.getItem('username') ?? 'Your Name';
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.navigateToLoginPage();
    this.isUserLogged();
  }

  isUserLogged() {
    const user = localStorage.getItem('username') && localStorage.getItem('token');
    if (user) {
      this.loginSubject.next(true);
    } else {
      this.loginSubject.next(false);
    }
  }

  navigateToMainPage() {
    this.router.navigate(['home']);
  }

  navigateToLoginPage() {
    this.router.navigate(['auth']);
  }
}
