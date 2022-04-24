import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent implements OnInit {
  constructor(public loginService: LoginService, private route: Router) {}

  isUserLogged!: boolean;

  ngOnInit(): void {
    this.loginService.isLogged$.subscribe((val) => {
      this.isUserLogged = val;
    });
  }

  goToLoginPage() {
    this.route.navigate(['auth']);
  }
}
