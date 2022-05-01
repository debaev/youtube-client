import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { addCard } from 'src/app/redux/actions/videos.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private store: Store) {}

  newCardForm!: FormGroup;

  isFormValid = true;

  ngOnInit(): void {
    this.newCardForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl(null, [Validators.maxLength(255)]),
      imgLink: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?',
        ),
      ]),
      videoLink: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?',
        ),
      ]),
      date: new FormControl('', [Validators.required, this.patternValidator({
        invalidDate: true,
      })]),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  patternValidator(error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }
      const today = new Date().getTime();

      // return null if there's no errors
      return new Date(control.value).getTime() > today
        ? error
        : null;
    };
  }

  onSubmit() {
    if (this.newCardForm.status === 'INVALID') {
      this.isFormValid = false;
    } else {
      this.store.dispatch(addCard(this.newCardForm.value));
      alert('New card successfully added!');
      this.newCardForm.reset();
    }
  }
}
