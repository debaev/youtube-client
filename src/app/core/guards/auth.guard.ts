import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate() {
    if (!this.loginService.isLogged$) this.router.navigate(['auth']);
    return this.loginService.isLogged$;
  }

  canLoad() {
    if (!this.loginService.isLogged$) this.router.navigate(['auth']);
    return this.loginService.isLogged$;
  }
}
