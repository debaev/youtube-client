import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/userModel';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public isLogged$!: Observable<boolean>;

  private isLogged$$ = new BehaviorSubject(false);

  constructor(private router: Router) {
    this.isLogged$ = this.isLogged$$.asObservable();
  }

  userName = 'Your Name';

  login(user: IUser) {
    localStorage.setItem('username', user.username);
    localStorage.setItem('token', user.password);
    this.navigateToMainPage();
    this.userName = user.username;
    this.isUserLogged();
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.navigateToLoginPage();
    this.userName = 'Your Name';
    this.isUserLogged();
  }

  isUserLogged() {
    const user = localStorage.getItem('username') && localStorage.getItem('token');
    if (user) {
      this.isLogged$$.next(true);
    } else {
      this.isLogged$$.next(false);
    }
  }

  navigateToMainPage() {
    this.router.navigate(['home']);
  }

  navigateToLoginPage() {
    this.router.navigate(['auth']);
  }
}
