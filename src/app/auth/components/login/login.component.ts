import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  loginForm!: FormGroup;

  isFormValid = true;

  isPasswordHidden = true;

  togglePasswordType() {
    let passType: string = 'password';
    if (this.isPasswordHidden) passType = 'password';
    else passType = 'text';
    return passType;
  }

  togglePasswordVisibility() {
    this.isPasswordHidden = !this.isPasswordHidden;
    this.togglePasswordType();
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          // check whether the entered password has a number
          this.patternValidator(/\d/, {
            hasNumber: true,
          }),
          // check whether the entered password has upper case letter
          this.patternValidator(/[A-Z]/, {
            hasCapitalCase: true,
          }),
          // check whether the entered password has a lower case letter
          this.patternValidator(/[a-z]/, {
            hasSmallCase: true,
          }),
          // check whether the entered password has a special character
          this.patternValidator(/[!@#$%^&*(),.?":{}|<>]/, {
            hasSpecialCharacters: false,
          }),
          Validators.minLength(8),
        ]),
      ),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }

  // eslint-disable-next-line class-methods-use-this
  passwordErrorMessageHandler(pass: string) {
    let errorMessage = '';
    const message = "Your password isn't strong enough Hint: ";
    const regExSym = /[!@#$%^&*(),.?":{}|<>]/;
    const regExNum = /\d/;
    if (pass) {
      if (pass.length < 8) errorMessage = `${message}Type at least 8 characters`;
      else if (pass === pass.toLowerCase() || pass === pass.toUpperCase()) errorMessage = `${message}Use a mixture of both uppercase and lowercase letters`;
      else if (!regExNum.test(pass)) errorMessage = `${message}Use a mixture of letters and numbers`;
      else if (!regExSym.test(pass)) errorMessage = `${message}Password should have inclusion of at least one special character, e.g., ! @ # ? ]`;
      else errorMessage = '';
    }
    return errorMessage;
  }

  onSubmit() {
    if (this.loginForm.status === 'INVALID') {
      this.isFormValid = false;
    } else {
      this.loginService.login(this.loginForm.value);
    }
  }
}
